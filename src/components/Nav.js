/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "./../assets/img/logo.png"
import {Link} from "@reach/router"

function Nav() {
    return(
    <>
    <nav className="navbar navbar-expand-lg sticky-top navbar-light border-bottom border-dark" style={{backgroundColor : "white"}}>
        <div className="container-fluid">
    
            <a className="navbar-brand" href="/"><img src={logo} alt="logo" className="nav-logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto pr-3">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products/Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blogs">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/freeresources">Free Resources</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/faq">FAQ</Link>
              </li>
              <li className="nav-item pr-2">
                <Link className="nav-link" to="/contactus">Contact Us</Link>
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