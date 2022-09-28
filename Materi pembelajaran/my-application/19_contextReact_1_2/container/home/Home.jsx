// libraries
import React, { Component, Fragment, createContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// pages
import BlogPost from "../pages/BlogPost/BlogPost";
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";
import LifeCycleComp from "../pages/LifeCycleComp/LifeCycleComp";
import Product from "../pages/Product/Product";
import YoutubeCompPage from "../pages/YoutubeCompPage/YoutubeCompPage";

// style
import "./Home.css";
// import GlobalProvider from "../../context/context";

// versi singkat
export const RootContext = createContext();
const Provider = RootContext.Provider;

/// https://jsonplaceholder.typicode.com/
class Home extends Component {
  state = {
    totalOrder: 5,
  }

  dispatch = (action) => {
    if (action.type === "PLUS_ORDER") {
      return this.setState({
        totalOrder: this.state.totalOrder + 1,
      });
    }
    if (action.type === "MINUS_ORDER") {
      return this.setState({
        totalOrder: this.state.totalOrder - 1,
      });
    }
  };
  render() {
    return (
      <Router>
        <Provider
          // inisialisasi apa saja yang dipakai
          value={{
            state: this.state,
            dispatch: this.dispatch,
          }}
         
        >
          <Fragment>
            <div className="navigation">
              <Link to="/">BlogPost</Link>
              <Link to="product">Product</Link>
              <Link to="/lifecycle">LifeCycle</Link>
              <Link to="/youtube-component">Youtube</Link>
            </div>
            <Switch>
              <Route path="/" exact component={BlogPost} />
              <Route path="/detail-post/:postID" component={DetailPost} />
              <Route path="/product" component={Product} />
              <Route path="/lifecycle" component={LifeCycleComp} />
              <Route path="/youtube-component" component={YoutubeCompPage} />
            </Switch>
          </Fragment>
        </Provider>
        {/* <Fragment>
          <div className="navigation">
            <Link to="/">BlogPost</Link>
            <Link to="product">Product</Link>
            <Link to="/lifecycle">LifeCycle</Link>
            <Link to="/youtube-component">Youtube</Link>
          </div>
          <Switch>
            <Route path="/" exact component={BlogPost} />
            <Route path="/detail-post/:postID" component={DetailPost} />
            <Route path="/product" component={Product} />
            <Route path="/lifecycle" component={LifeCycleComp} />
            <Route path="/youtube-component" component={YoutubeCompPage} />
          </Switch>
        </Fragment> */}
      </Router>
    );
  }
}

// export default GlobalProvider(Home);
export default Home;

