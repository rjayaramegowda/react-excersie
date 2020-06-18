import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "./Product";
import menu from "./data.json"
import ProductsRow from "./ProductsRow";


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
        <hr />
        <ProductsRow category={menu[itemId].category}/>       
      </>
    );
  }
}

export default connect(mapStateToProps)(ProductPage);
