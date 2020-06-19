import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
   return {
      categoryList: state.categoryList,
   };
}

class Product extends Component {
   
   constructor(props) {
      super(props);
      this.editClickHandler = this.editClickHandler.bind(this);
      this.state = {...this.props.vo, editable: false}
   }

    editClickHandler() {      
      this.setState({editable: !this.state.editable})
   }
   
   render() {
      
      return (
         <section className="container my-5">
            <div className="row row-cols-1 row-cols-md-2">
               <div className="col mb-3">
                  <article className="card border-0">
                     <figure>
                        <img className="card-img-top mb-0" src={(this.props.vo.imageUrl === "/no_menu_image.jpg") ? "../assets/img/default.jpg" : this.props.vo.imageUrl } alt="placeholder" />
                        <div className="card-img-overlay p-2">
                        {this.state.available === true ? <button className="btn btn-success btn-sm rounded-pill py-0">Available</button> : <button className="btn btn-danger btn-sm rounded-pill py-0">Not Available</button>}
    
                        </div>
                     </figure>
                  </article>
               </div>
               <div className="col mb-3 pt-5">
                  <h1>{this.props.vo.name}</h1>
                  <p className="lead">{ (this.props.vo.description === "") ? "No description found for  " + this.props.vo.name + ", will be updated soon" : this.props.vo.description} </p>
                  <h1 className="d-block h6 mb-0">{this.props.vo.category}</h1>
                  
                  <div className="d-flex justify-content-start align-items-center py-4 g-font-size-14">
                     <span className="g-font-size-22"><strong>${this.state.price}</strong> </span>
                     <span className="px-2">${this.props.vo.tax}</span>
                     <span className="text-danger">($ {this.props.vo.price + this.props.vo.tax })</span>
                  </div>
                  <form id="form1" className={this.state.editable  ? '' : 'd-none' } >
                  <div className="form-group form-inline">
                     <label>Updated New Price</label>
                     <input type="Number" className="form-control ml-3" onChange={e => this.setState({price: e.target.value})} defaultValue={this.props.vo.price} />                     
                  </div>
                  <div className="form-group form-inline">
                     <span className="mr-3">Is Available ?</span>
                     <div className="custom-control custom-radio custom-control-inline">
                     <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" onClick={e => this.setState({available: true})} defaultChecked={this.props.vo.available === true} />
                     <label className="custom-control-label" htmlFor="customRadioInline1">Yes</label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                     <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" onClick={e => this.setState({available: false})} defaultChecked={this.props.vo.available === false} />
                     <label className="custom-control-label" htmlFor="customRadioInline2">No</label>
                  </div>                 
                  </div>
                                    </form>

                  <div className="d-flex">
                     <button className="btn btn-primary rounded-pill px-4"><i className="fa fa-spinner fa-spin mr-2" aria-hidden="true" /> Buy Now </button>
                     <button onClick={this.editClickHandler} className="btn btn-warning rounded-pill px-4 ml-2"><i className="fa fa-pencil mr-2" aria-hidden="true" /> Edit
                     </button>
                     
                  </div>
               </div>
            </div>
         </section>
      );
   }
}

export default connect(mapStateToProps)(Product);