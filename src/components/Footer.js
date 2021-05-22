/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import logobw from "./../assets/img/logobw.png"
import map from "./../assets/img/map.png"
import FacebookIcon from "./../assets/icons/facebook.png"
import TwitterIcon from "../assets/icons/twitter.png"
import InstagramIcon from "../assets/icons/instagram.png"

function Footer(){
    return(
        <footer>
            <div className="footer container-fluid pt-5 pb-2">
                <div className="row container-fluid pl-5">
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12 pt-3 pb-1 text-center">
                    <img className="footer-logo" src={logobw} alt="logo-bw" />
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12 pt-4 pb-1 text-lg-right text-center pr-lg-5 pr-none">
                    <p className="footer-column2-text">Get in touch <br /> with us!</p>
                    
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12 text-lg-left text-center pl-lg-5 pr-none l-border r-border">
                <p className="footer-column3-text">You could drop us a message <a className="footer-anchor" href="/contactus/#contactUsForm">here.</a></p>
                <p className="footer-column3-text">Or write to us at <br/><a className="footer-anchor" href="mailto:contact@consciousculture.in" target="_blank" rel="noopener noreferrer">contact@consciousculture.in</a></p>
                <div className="footer-column3-text">
                    Follow us : 
                    <a href="#">
                        <img className="social-icons-facebook" src={FacebookIcon} alt="facebook-icon" /> 
                    </a>
                    <a href="#">
                        <img className="social-icons-twitter" src={TwitterIcon} alt="twitter-icon"  /> 
                    </a>
                    <a href="#">
                        <img className="social-icons-instagram" src={InstagramIcon} alt="instagram-icon" />
                    </a>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12 text-lg-left text-center">
                <p className="footer-column4-heading">Visit us at our Delhi Office.</p>
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-6 text-lg-left text-center">
                        <img src={map} alt="map" width="88px" height="86px"/>

                    </div>
                    <div className="col-lg-8 col-md-7 col-6 text-lg-left text-center">
                    <p className="footer-column4-text">Address Line 1 <br /> Address Line 2 <br/>City, Pincode</p>
                    <p className="footer-column4-text"><a className="footer-anchor" href="">+91 9873175838</a></p>
                    </div>
                </div>
   
                </div>
                </div>
                <div className="row container-fluid pl-5 pt-2">
                    <div className="col-12">
                        <p className="footer-copyright">Copyright © 2020 Conscious Culture LLP. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;