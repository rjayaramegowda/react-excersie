import React from 'react';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="py-3 shadow-sm">
   <div className="container">
      <div className="d-flex flex-row">
      <Link to="/"><i className="fa fa-facebook text-primary mr-3 g-font-size-44" aria-hidden="true" /></Link>
         <Link to="/" className="btn btn-link text-secondary g-font-size-13 ml-auto">Home</Link> 
         <a href="https://github.com/rjayaramegowda" className="btn btn-link text-secondary g-font-size-13">Github</a>
         <a href="https://www.linkedin.com/in/ravichandranj/" className="btn btn-warning avator rounded-circle text-truncate border-0 p-0 mx-2">
         <img src="../assets/img/avatar.jpg" className="rounded-circle img-fluid" alt="avator" />
         </a>
         <div>
            <button className="btn btn-link text-secondary" data-toggle="dropdown" data-target="nava1" id="dropdownMenuButton">
            <i className="fa fa-th g-font-size-20" aria-hidden="true" />
            </button>
            <div id="nava1" aria-labelledby="dropdownMenuButton" className="dropdown-menu border-0 shadow mt-sm-4 g-font-size-14 text-capitalize font-weight-bold">
               <section className="my-4 width-98vw">
                  <div className="row row-cols-1 row-cols-md-5 mx-3">
                     <MenuItems />
                  </div>
               </section>
            </div>
         </div>
      </div>
   </div>
</header>
    );
};

export default Header;