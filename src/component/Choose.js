import React, { Component } from "react";

export default class choose extends Component {

  state = {
    imgProduct:require('../assets/products/black-car.png')
  }

  renderCar = (imgNewProduct)=>{
    this.setState({imgProduct:imgNewProduct})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: "100%" }}
              src={this.state.imgProduct}
              alt="blackcar"
            />
          </div>
          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header text-primary">
                Exterior color
              </div>
              <div className="card-body">
                <div className="row border border-link pt-2 pb-2" onClick={()=>{this.renderCar(require('../assets/products/black-car.png'))}} style={{cursor:"pointer"}}>
                  <img className="col-2" src={require('../assets/icons/icon-black.jpg')} alt="black-icon"/>
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../assets/products/steel-car.png'))}} style={{cursor:"pointer"}}>
                  <img className="col-2" src={require('../assets/icons/icon-steel.jpg')} alt="steel-icon"/>
                  <div className="col-10">
                    <h3>Modern Steel</h3>
                    <p>Metalic</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../assets/products/silver-car.png'))}} style={{cursor:"pointer"}}>
                  <img className="col-2" src={require('../assets/icons/icon-silver.jpg')} alt="silver-icon"/>
                  <div className="col-10">
                    <h3>Lunar Silver</h3>
                    <p>Metalic</p>
                  </div>
                </div>
                <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../assets/products/red-car.png'))}} style={{cursor:"pointer"}}>
                  <img className="col-2" src={require('../assets/icons/icon-red.jpg')} alt="red-icon"/>
                  <div className="col-10">
                    <h3>Rallye Red</h3>
                    <p>Metalic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
