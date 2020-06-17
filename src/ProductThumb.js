import React from 'react';
import { Link } from 'react-router-dom';

const ProductThumb = (props) => {
    return (
        <div className="col mb-3">
                  <article className="card border-0">
                  <Link to={'/p/' + props.vo.itemId}>
                     <figure>
                        <img className="card-img-top mb-0 border-0" src={props.vo.imageUrl} alt="placeholder" />
                        <div className="card-img-overlay p-2">
                        {props.vo.available === true ? <button className="btn btn-success btn-sm rounded-pill py-0">Available</button> : <button className="btn btn-danger btn-sm rounded-pill py-0">Not Available</button>}
                        </div>
                     </figure>
                     </Link>
                     <div className="py-2 px-3">
                        <h1 className="d-block h6 mb-0">{props.vo.name}</h1>
                        <span className="g-font-size-14">{props.vo.category}</span>
                        <div className="d-flex justify-content-start g-font-size-14">
                           <span className="g-font-size-14"> <strong>${props.vo.price}</strong> </span>
                           <span className="px-2">${props.vo.tax}</span>
                           <span className="text-danger">($ {props.vo.price + props.vo.tax })</span>
                        </div>
                     </div>
                  </article>
               </div>
    );
};

export default ProductThumb;