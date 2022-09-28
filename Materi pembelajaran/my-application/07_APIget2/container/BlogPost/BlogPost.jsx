import React, { Component, Fragment } from "react";
import "./BlogPost.css";
import Post from "../../component/Post/Post";
import axios from "axios";

/// nyari foto
/// https://placeimg.com/

/// 1. github axios untuk get request api kita install di github
/// https://github.com/axios/axios
class BlogPost extends Component {
  state = {
    post: [],
  };
  /// 2. web data api
  // https://jsonplaceholder.typicode.com/
  componentDidMount() {
    /// 1. mengunakan fetch
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     this.setState({
    //       post: json,
    //     });
    //   });

    /// 2.mengunakan axios
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      this.setState({
        post: result.data,
      });
    });
  }

  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>
        {this.state.post.map((post) => {
          return <Post key={post.id} title={post.title} desc={post.body} />;
        })}
      </Fragment>
    );
  }
}

export default BlogPost;
