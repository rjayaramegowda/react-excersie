import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductThumb from './ProductThumb';

function mapStateToProps(state) {
   return {
      products: state.productList
   };
}

class ProductsRow extends Component {
   constructor(props) {
      super(props); 
      this.state = {category: this.props.category}     
   }
   
   render() {

      var category = this.state.category;
      var filteredData = this.props.products.filter((item) => (item.category === category && item.imageUrl !== "/no_menu_image.jpg"));
      
      var rowItems = filteredData.map((item, index) => <ProductThumb vo={item} key={index} /> );

      
      return (
         <>
         <section className="container my-2">
             <div className="py-4">
                <h1>{this.props.category}</h1>
                <p className="lead">unfiltered traditional sake </p>
             </div>
             <div className="row row-cols-1 row-cols-md-4">
              {rowItems}         
             </div>
          </section>
          <hr />
          </>
      );
   }
}

export default connect(mapStateToProps)(ProductsRow);