import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../../component/Post/Post";
// import axios from "axios";
import API from '../../../services';
// import { withRouter } from "react-router-dom";


//// statefull karena pake class
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
/// gunakan alternatif port  { $ json-server --watch db.json --port 3004
  getPostAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        post: result
      });
    })
    API.getComments().then((result) => {
      this.setState({
        comments: result
      });
    })
  };

  // Untuk mengambil db.json yang post aja
  postDataToAPI = () => {
    API.postNewsBlog(this.state.formBlogPost).then((res) => {
      this.getPostAPI();
      this.setState({
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    })
  };

  // untuk mengapdate
  putDataToAPI = () => {
    API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then((res) => {
      this.getPostAPI();
      this.setState({
        isUpdate: false,
        formBlogPost: {
          id: 1,
          title: "",
          body: "",
          userId: 1,
        },
      });
    })
  };

  /// digunakan untuk menghapus
  handleRemove = (data) => {
    API.deleteNewsBlog(data).then((res) => {
      this.getPostAPI();
    })
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

  // kita mentrige function kita sendiri
  handleDetail = (id) => {
    this.props.history.push(`/detail-post/${id}`);
    // versi 6
    // const navigate = useNavigate();
    // navigate(`/detail-post/${id}`);
  };

  componentDidMount() {
    /// dipanggil getPostAPI
    this.getPostAPI();
  }

  render() {
    return (
      <Fragment>
        <h1>BlogPost</h1>
        <hr />
        <p className="section-title">Blog Post</p>
        <div className="form-add-post">
          <label htmlFor="title">Title</label>
          <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange} />
          <label htmlFor="body">Blog Content</label>
          <textarea name="body" id="body" cols="30" rows="10" value={this.state.formBlogPost.body} placeholder="add biodata" onChange={this.handleFormChange}></textarea>
          <button className="btn-submit" onClick={this.handleSubmit}>
            Simpan
          </button>
        </div>
        {/* punya comments dari global API */}
        {/* {
            this.state.comments.map((comment) => {
              return <p>{comment.name} - {comment.email}</p>
            })
        } */}
        {/*  data={post ini isi nya body (title, description)} */}
        {
            this.state.post.map((post) => {
              return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />;
            })
        }
      </Fragment>
    );
  }
}

// const BlogPostWithRouter = withRouter(BlogPost);
export default BlogPost;
