import React, { Component } from "react";
import { connect } from "react-redux";
import ProductsRow from "./ProductsRow";

function mapStateToProps(state) {
  return {
    categoryList: state.categoryList,
  };
}

class ProductsByCategory extends Component {
  render() {
    var categoryItems = this.props.categoryList.map((item, index) =>          
         <ProductsRow key={index} category={item}/>         
   )
      
    return (
      <>
        {categoryItems}
      </>
    );
  }
}

export default connect(mapStateToProps)(ProductsByCategory);
