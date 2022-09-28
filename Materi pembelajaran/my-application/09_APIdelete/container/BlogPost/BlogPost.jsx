import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";
import axios from "axios";

/// membuat database dengan json di db.json
/// https://github.com/typicode/json-server
class BlogPost extends Component {
  state = {
    post: [],
  };

  getPostAPI = () => {
    axios.get("http://localhost:3004/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  };

  handleRemove = (data) => {
    axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
      this.getPostAPI();
    });
  };

  componentDidMount() {
    /// mengunakan axios
    // dan fake api dari db.json  => install dulu ada di web
    /// gunakan alternatif port  { $ json-server --watch db.json --port 3004 }
    this.getPostAPI();
  }

  render() {
    return (
      // data={post ini isi nya body (title, description)}
      <Fragment>
        <p className="section-title">Blog Post</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} data={post} remove={this.handleRemove} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
