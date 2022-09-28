import React, { Component } from "react";
import Counter from "./Counter";

class CardProduct extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2020/03/09/1035335755.jpg" alt="" />
        </div>
        <p className="product-title">Daging Ayam Berbumbu</p>
        <p className="product-price">Rp. 410.000</p>
        <Counter />
      </div>
    );
  }
}

export default CardProduct;
