import React, { Component } from "react";

class CardProduct extends Component {
  // untuk menyamakan data count dan counter
  state = {
    order: 4,
    name: "Udin",
  };
  /// untuk perubahan
  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  // mengunakan arrow function
  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
      // ditangkap dikirim ke atas untuk perubahan
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };

  //function biasa itu tidak bisa diakses
  // handleMinus() {
  //   this.setState({
  //     order: this.state.order - 1,
  //   });
  // }

  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img src="https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2020/03/09/1035335755.jpg" alt="" />
        </div>
        <p className="product-title">Daging Ayam Berbumbu</p>
        <p className="product-price">Rp. 410.000</p>
        <div className="counter">
          <button className="minus" onClick={this.handleMinus}>
            -
          </button>
          <input type="text" value={this.state.order} />
          <button className="plus" onClick={this.handlePlus}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default CardProduct;
