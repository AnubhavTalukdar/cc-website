/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react";
import logo from "./../assets/img/logo.png"
import { BASE_URL } from "../config/url";
import axios from "axios"
import {Link} from "@reach/router"
import Cookies from 'js-cookie'

function Nav() {
  const [freeconsult, setFreeconsult] = useState("")

  useEffect(() => { 
    axios.get(`${BASE_URL}/website-texts`)
    .then(response => {
        setFreeconsult(response.data.Free_Consult)
    })

    if(window.location.href.split("/")[3] === "about")
    { 
      var element1 = document.getElementById('link-2');;
      element1.classList.add('nav-link-active');
    }
    else if(window.location.href.split("/")[3] === "products")
    { 
      var element2 = document.getElementById('link-3');;
      element2.classList.add('nav-link-active');
    }
    else if(window.location.href.split("/")[3] === "blogs")
    { 
      var element3 = document.getElementById('link-4');;
      element3.classList.add('nav-link-active');
    }
    else if(window.location.href.split("/")[3] === "freeresources")
    { 
      var element4 = document.getElementById('link-5');;
      element4.classList.add('nav-link-active');
    }
    else if(window.location.href.split("/")[3] === "faq")
    { 
      var element5 = document.getElementById('link-6');;
      element5.classList.add('nav-link-active');
    }
    else if(window.location.href.split("/")[3] === "contactus")
    { 
      var element6 = document.getElementById('link-7');;
      element6.classList.add('nav-link-active');
    }
    else if(window.location.href.split("/")[3] === "")
    { 
      var element7 = document.getElementById('link-1');;
      element7.classList.add('nav-link-active');
    }
    else {
      var element8 = document.getElementById('link-4');;
      element8.classList.add('nav-link-active');
    }

}, [])

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
                <Link className="nav-link" id="link-1" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="link-2" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="link-3" to="/products">Products/Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="link-4" to="/blogs">Blog</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="link-5" to="/freeresources" onClick={()=>Cookies.set("Category","All")}>Free Resources</Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" id="link-6" to="/faq">FAQ</Link>
              </li>
              <li className="nav-item pr-2">
                <Link className="nav-link" id="link-7" to="/contactus">Contact Us</Link>
              </li>
              <li className="nav-item pt-1 lg-pl-1 sm-pl-0 xs-pl-0">
                <a href={freeconsult} target="_blank" rel="noopener noreferrer" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}><button className="nav-button">Free consult</button></a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    </>
    );
}

export default Nav;