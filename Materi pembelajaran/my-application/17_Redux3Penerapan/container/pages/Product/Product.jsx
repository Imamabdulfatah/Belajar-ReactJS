import React, { Component, Fragment } from "react";
import "./Product.css";
import CardProduct from "./Card/CardProduct";

/// bentuk statefull widget
class Product extends Component {
  // untuk menyamakan data count dan counter
  state = {
    order: 4,
    name: "Udin",
  };
  // ini untuk di kirim ke CardProduct
  handleCounterChange = (newValue) => {
    this.setState({
      order: newValue,
    });
  };
  render() {
    return (
      <Fragment>
        <h1>Product</h1>
        <hr />
        <div className="header">
          <div className="logo">{/* <img src="" alt="" /> */}</div>
          <div className="troley">
            <img src="https://img2.pngdownload.id/20180515/zfw/kisspng-shopping-cart-logo-shopping-bags-trolleys-5afb65b09c72d4.3564791415264250086408.jpg" alt="" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        {/* jika counter berubah / nama bebas */}
        {/* value tersubut dikirm ke atas untuk diubh menjadi newvalue */}
        {/* atau pengiriman props dari cardProduct */}
        <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
      </Fragment>
    );
  }
}

export default Product;
