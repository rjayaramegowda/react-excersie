import React from 'react';

const Product = (props) => {
    return (
    
        <section className="container my-5">
            <div className="row row-cols-1 row-cols-md-2">
               <div className="col mb-3">
                  <article className="card border-0">
                     <figure>
                        <img className="card-img-top mb-0" src={(props.vo.imageUrl === "/no_menu_image.jpg") ? "../assets/img/default.jpg" : props.vo.imageUrl } alt="placeholder" />
                        <div className="card-img-overlay p-2">
                        {props.vo.available === true ? <button className="btn btn-success btn-sm rounded-pill py-0">Available</button> : <button className="btn btn-danger btn-sm rounded-pill py-0">Not Available</button>}
    
                        </div>
                     </figure>
                  </article>
               </div>
               <div className="col mb-3 pt-5">
                  <h1>{props.vo.name}</h1>
                  <p className="lead">{ (props.vo.description === "") ? "No description found for  " + props.vo.name + ", will be updated soon" : props.vo.description} </p>
                  <h1 className="d-block h6 mb-0">{props.vo.category}</h1>
                  
                  <div className="d-flex justify-content-start align-items-center py-4 g-font-size-14">
                     <span className="g-font-size-22"><strong>${props.vo.price}</strong> </span>
                     <span className="px-2">${props.vo.tax}</span>
                     <span className="text-danger">($ {props.vo.price + props.vo.tax })</span>
                  </div>
                  <div className="form-group form-inline">
                     <label for="exampleInputPassword1">Updated New Price</label>
                     <input type="Number" class="form-control ml-3" id="exampleInputPassword1" defaultValue={props.vo.price} />
                     
                  </div>
                  <div className="form-group form-inline">
                     <span>Is Available ?</span>
                     <input type="Radio" class="form-control ml-2" name="radio1" id="radio-available" checked />
                     <label className="ml-2" for="exampleInputPassword1">Yes</label>

                     <input type="Radio" class="form-control ml-2" name="radio1" id="radio-not-available"  />
                     <label className="ml-2" for="exampleInputPassword1">No</label>

                     
                  </div>
                  <div className="d-flex">
                     <button className="btn btn-primary rounded-pill px-4"><i className="fa fa-spinner fa-spin mr-2" aria-hidden="true" /> Buy Now </button>
                     <button className="btn btn-warning rounded-pill px-4 ml-2"><i className="fa fa-pencil mr-2" aria-hidden="true" /> Edit
                     </button>
                     <button className="btn btn-success rounded-pill px-4 ml-2"><i className="fa fa-save mr-2" aria-hidden="true" /> Save
                     </button>
                  </div>
               </div>
            </div>
         </section>
        
    );
};

export default Product;