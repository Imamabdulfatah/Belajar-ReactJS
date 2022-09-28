import React, { Component, Fragment } from "react";
import "BlogPost.css";
import Post from "../../component/Post/Post";

/// nyari foto
/// https://placeimg.com/
class BlogPost extends Component {
  render() {
    return (
      <Fragment>
        <p className="section-title">Blog Post</p>

        <Post title="title" desc="desc" />
      </Fragment>
    );
  }
}

export default BlogPost;
