import React from "react";
import "./YoutubeComp.css";

/// bentuk stateless widget

/// props ini yang membuat dinamis dari reactnya
const YoutubeComp = (props) => {
  return (
    <div className="youtube-wrapper">
      <div className="img-thumb">
        <img src="https://i.pinimg.com/originals/19/03/f7/1903f770e003453944143cb13018daaf.jpg" alt="" />
        <p className="time">{props.time}</p>
      </div>
      <p className="title">{props.title}</p>
      <p className="desc">{props.desc}</p>
    </div>
  );
};

YoutubeComp.defaultProps = {
  time: "00.00",
  title: "Title here",
  desc: "akan tayang",
};

export default YoutubeComp;
