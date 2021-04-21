/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./../assets/img/logo.png"


function Nav() {
    return(
    <>
    <nav className="navbar navbar-expand-lg sticky-top navbar-light border-bottom border-dark" style={{backgroundColor : "white"}}>
        <div className="container-fluid">
    
            <a className="navbar-brand" href="/"><img src={logo} alt="logo" width="230px" height="67px"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto pr-3">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Free Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Products/Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item pr-2">
                <a className="nav-link" href="/faq">FAQ</a>
              </li>
              <li className="nav-item pt-1 lg-pl-1 sm-pl-0 xs-pl-0">
                <button className="nav-button">Free consult</button>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    </>
    );
}

export default Nav;