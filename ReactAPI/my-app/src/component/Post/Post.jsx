import React from "react";
// import { withRouter } from "react-router";

/// sebagai kerangka untuk api

/// stateless karena pake const
const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb" id="img-thumb">
        <img src="https://placeimg.com/200/200/tech" alt="" />
      </div>
      <div className="content">
        {/* jika di klik akan menuju kedatail */}
        <p className="title" onClick={() => props.goDetail(props.data.id)}>
          {props.data.title}
        </p>
        <p className="desc">{props.data.body}</p>
        <button className="update" onClick={() => props.update(props.data)}>
          Update
        </button>
        <button className="remove" onClick={() => props.remove(props.data.id)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default Post;
