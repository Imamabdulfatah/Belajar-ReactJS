import React from "react";

const Post = (props) => {
  return (
    <div className="post">
      <div className="img-thumb">
        <img src="https://placeimg.com/180/190/tech" alt="" />
      </div>
      <div className="content">
        <p className="title">Dummy Tile</p>
        <p className="desc">Dummy body here</p>
      </div>
    </div>
  );
};

export default Post;
