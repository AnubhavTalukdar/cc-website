/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import FacebookIcon from "./../assets/icons/facebook.png"
import TwitterIcon from "../assets/icons/twitter.png"
import InstagramIcon from "../assets/icons/instagram.png"

function Header() {
    return(
        <header>
            <div className="container-fluid px-0 header">
                <div className="row container-fluid">
                <div className="col-12 text-right pr-1 pt-2">
                    <a className="footer-anchor" href="mailto:contact@consciousculture.in" target="_blank" rel="noopener noreferrer">contact@consciousculture.in</a>
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
            </div>

        </header>
    );
}

export default Header;