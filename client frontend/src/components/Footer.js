import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
    <div className="Announcement ">
    <div className="container">
      <div className="row">
        
        <div className=" col-12 col-lg-12 justify-content-center  d-flex align-items-center">
          <Link to="">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="">
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link to="">
            <i className="fab fa-youtube"></i>
          </Link>
          <Link to="">
            <i className="fab fa-pinterest-p"></i>
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
