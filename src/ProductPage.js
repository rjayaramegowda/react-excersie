import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import menu from "./data.json"


function mapStateToProps(state) {
    return {
      products: state.productList,
    };
  }

class ProductPage extends Component {
  render() {
    let itemId = this.props.match.params.itemId;
    
    return (
      <>      
        <Product vo={menu[itemId]} />        
      </>
    );
  }
}

export default connect(mapStateToProps)(ProductPage);
