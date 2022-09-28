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

  componentDidMount() {
    /// mengunakan axios
    // dan fake api dari db.json  => install dulu ada di web
    /// gunakan alternatif port  { $ json-server --watch db.json --port 3004 }
    axios.get("http://localhost:3004/posts").then((result) => {
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
