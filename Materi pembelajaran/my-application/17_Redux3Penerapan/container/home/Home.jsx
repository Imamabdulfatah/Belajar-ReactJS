// libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
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
          <Link to="/">BlogPost</Link>
          <Link to="product">Product</Link>
          <Link to="/lifecycle">LifeCycle</Link>
          <Link to="/youtube-component">Youtube</Link>
          {/* <Link to="/detail-post/:id">detail</Link> */}
        </div>
        <Switch>
          <Route path="/" exact component={BlogPost} />
          <Route path="/detail-post/:postID" component={DetailPost} />
          <Route path="/product" component={Product} />
          <Route path="/lifecycle" component={LifeCycleComp} />
          <Route path="/youtube-component" component={YoutubeCompPage} />
        </Switch>
      </Router>
    );
  }
}

export default Home;
