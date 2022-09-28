import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";
import axios from "axios";

/// membuat database dengan json di db.json
/// https://github.com/typicode/json-server
class BlogPost extends Component {
  state = {
    post: [],
    /// digunakan untuk post
    formBlogPost: {
      id: 1,
      title: "",
      body: "",
      userId: 1,
    },
    isUpdate: false,
  };

  /// membuat untuk get api a
  getPostAPI = () => {
    /// mengunakan axios
    // dan fake api dari db.json  => install dulu ada di web
    /// gunakan alternatif port  { $ json-server --watch db.json --port 3004
    axios.get("http://localhost:3004/posts?_sort=id&_order=desc").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  // Untuk mengambil db.json yang post aja
  postDataToAPI = () => {
    axios.post("http://localhost:3004/posts", this.state.formBlogPost).then((res) => {
      this.getPostAPI();
      this.setState({
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };

  // untuk mengapdate
  putDataToAPI = () => {
    axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
      this.getPostAPI();
      /// digunakan agar sesudah diupdate kosong kembali
      this.setState({
        isUpdate: false,
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    });
  };

  /// digunakan untuk menghapus
  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      /// setelah dihapus dipanggil kembali
      this.getPostAPI();
    });
  };

  handleUpdate = (data) => {
    this.setState({
      formBlogPost: data,
      isUpdate: true,
    });
  };

  /// method untuk post/ perubahan
  handleFormChange = (event) => {
    // digunakan agar bentuk string dibawah ke bentuk object
    let formBlogPostNew = { ...this.state.formBlogPost };
    let timestamp = new Date().getTime();
    // name dari input title dan body yang name
    /// if ini digunakan untuk isUpdate berjalan
    if (!this.state.isUpdate) {
      formBlogPostNew["id"] = timestamp;
    }

    formBlogPostNew[event.target.name] = event.target.value;

    this.setState({
      formBlogPost: formBlogPostNew,
    });
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  componentDidMount() {
    /// dipanggil getPostAPI
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          {/* untuk input suatu hall dideteksi dengan onChange */}
          {/* value untuk mengambil data di formBlogPost di tampilkan di input dan textarea */}
          <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange} />
          <label htmlFor="body">Blog Content</label>
          <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add biodata" onChange={this.handleFormChange}></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {/*  data={post ini isi nya body (title, description)} */}
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
