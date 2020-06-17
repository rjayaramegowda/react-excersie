import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
  return {
    products: state.productList,
  };
}

class MenuItems extends Component {
  render() {
    
    var productList = this.props.products.map((item, index) => 
        <div className="col px-0 mb-1" key={index}>
            <Link to={'/p/' + item.itemId} className="btn btn-light rounded-0 btn-block">{item.name}</Link>
        </div>
    );

    return (
      <>
        {productList}        
      </>
    );
  }
}

export default connect(mapStateToProps)(MenuItems);
