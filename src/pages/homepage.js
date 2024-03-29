import React from 'react';
import "./css/homepage.css";
import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
   <div className="container-fluid py-5 homepage-container">
    <div className="container-fluid my-3 py-5">
    <div className="container-fluid my-5 py-5">
    <div className="container-fluid my-5 py-5">
    <div className="row">
      <div className="col-lg-8 text-center text-lg-start d-flex  flex-column align-items-center">
        <h1 className="display-3 text-white animated sliderInLeft text-center fw-bold">Welcome To <span className="bs-orange text-shadow">Sizzle</span></h1>
        <br/>
        <h2 className="text-white text-center fst-italic text-shadow">"Indulge in Culinary Delights: Where Every Bite is a Passport to Flavors of Amore!"</h2>
        <div className="mt-4">
        <div className="btn-menu mx-sm-2 mx-1 px-2 px-sm-4 py-2"><Link className="link-destyle" to="/menu">our menu</Link></div>
        <div className="btn-menu mx-sm-2 mx-1 px-2 px-sm-4 py-2"><Link className="link-destyle" to="book-a-table">book a table</Link></div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
   </div>
  )
}
