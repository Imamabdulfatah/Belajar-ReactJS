// libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// pages
import BlogPost from "../pages/BlogPost/BlogPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";

// style
import "./Home.css";

/// api gratisan
/// https://jsonplaceholder.typicode.com/
class Home extends Component {
  state = {
    showComponent: true,
  };

  // componentDidMount() {}
  render() {
    return (
      // versi v6router
      // https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom
      <Router>
        {/* bagian router */}
        <div className="navigation">
          <h1>Component Global</h1>
          <Link to="/">BlogPost</Link>
          <Link to="product">Product</Link>
          <Link to="/lifecycle">LifeCycle</Link>
          <Link to="/youtube-component">Youtube</Link>
        </div>
        <Routes>
          <Route path="/" exact element={<BlogPost />} />
          <Route path="/product" element={<Product />} />
          <Route path="/lifecycle" element={<LifeCycleComp />} />
          <Route path="/youtube-component" element={<YoutubeCompPage />} />
        </Routes>
      </Router>
    );
  }
}

export default Home;
