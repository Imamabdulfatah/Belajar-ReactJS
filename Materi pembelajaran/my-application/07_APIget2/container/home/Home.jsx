import React, { Component } from "react";
import BlogPost from "../BlogPost/BlogPost";

/// api gratisan
/// https://jsonplaceholder.typicode.com/
class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Blog Post</h1>
        <hr />
        <BlogPost />
      </div>
    );
  }
}

export default Home;
