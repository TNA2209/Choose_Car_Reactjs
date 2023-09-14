import React, { Component } from "react";

export default class Header extends Component {
  productList = [
    {
      id: 1,
      name: "black car",
      price: 1000,
      img: require("../assets/products/black-car.png"),
    },
    {
      id: 2,
      name: "red car",
      price: 1000,
      img: require("../assets/products/red-car.png"),
    },
    {
      id: 3,
      name: "silver car",
      price: 1000,
      img: require("../assets/products/silver-car.png"),
    },
    {
      id: 4,
      name: "steel car",
      price: 1000,
      img: require("../assets/products/steel-car.png"),
    },
  ];

  renderTable = () => {
    //   let mangtrComponent = [];
    //   for (let index = 0; index < this.productList.length; index++) {
    //     let product = this.productList[index];
    //     let trJSX = (
    //       <tr>
    //         <td>{product.id}</td>
    //         <td>{product.name}</td>
    //         <td>{product.price}</td>
    //         <td>
    //           <img style={{ width: 100 }} src={product.img} />
    //         </td>
    //       </tr>

    //     );
    //     mangtrComponent.push(trJSX);
    //   }return mangtrComponent;
    // };
    let mangtrComponent = this.productList.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img style={{ width: 100 }} src={product.img} />
          </td>
        </tr>
      );
    });
    return mangtrComponent;
  };
  render() {
    return (
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
