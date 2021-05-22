/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import clipart1 from "./../assets/img/clipart1.PNG"
import FacebookIcon from "./../assets/icons/facebook.png"
import TwitterIcon from "../assets/icons/twitter.png"
import InstagramIcon from "../assets/icons/instagram.png"

function ContactUs(){
    return(
    <>
    <div className="row pt-5 container-fluid justify-content-center">
        <div className="col-lg-5 pl-5 pb-5 mt-auto">
            <p className="contact-us-text1">We always love hearing <br/>from you!</p>
            <p className="contact-us-text1"> Send us your querries, give us feedback <br/>or start a conversation or join in/<br/>contribute/ collaborate!</p>
        </div>
        <div className="col-lg-5 pl-5 text-center text-lg-right">
            <img className="clipart1" src={clipart1} alt="clipart1" width="85%" />
        </div >
    </div>
    <br id="contactUsForm"/>
    <div className="row container-fluid pb-5 justify-content-center" >
            
            <div className="row container-fluid ml-lg-5 mr-lg-4 ml-4 mr-0" style={{borderRadius : "30px", backgroundColor : "#f1f1f1"}}>
            <div className="col-lg-7 col-sm-12 col-xs-12 mt-5 mb-5 pl-2 pr-2 pl-lg-5 pr-lg-5" style={{borderRadius : "30px", backgroundColor : "white"}}>
                <br />
                <input type="text" class="contact-us-input form-control" id="name" placeholder="Name" />
                <br />
                <input type="email" class="contact-us-input form-control" id="email" placeholder="Email" />
                <br />
                <input type="text" class="contact-us-input form-control" id="company" placeholder="Company" />
                <br />
                <input type="number" class="contact-us-input form-control" id="contact" placeholder="Contact" />
                <br />
                <textarea class="contact-us-message form-control" id="FormControlTextarea1" rows="8" placeholder="Message"/>
                <br />
                <button className="contact-us-button float-right">Submit</button>
                <br />
                <br />
            </div>
            <div className="col-lg-5 col-sm-12 col-xs-12 mt-lg-5 mt-2 mb-lg-5 mb-2 pl-lg-5 pl-2">
                <br />
                <br />
                <p className="contact-us-text2">contact@consciousculture.in</p>
                <p className="contact-us-text3 mt-lg-5 mb-lg-5 mt-2 mb-2">Address Line 1 <br />Address Line 2<br />City, Pincode</p>
                <p className="contact-us-text4 mb-lg-5 mb-2">+91 9873175838</p>
                <p className="contact-us-text2">Our FAQ Section</p>
                <p>
                <a href="#">
                    <img className="social-icons-facebook" src={FacebookIcon} alt="facebook-icon" /> 
                </a>
                <a href="#">
                    <img className="social-icons-twitter" src={TwitterIcon} alt="twitter-icon"  /> 
                </a>
                <a href="#">
                    <img className="social-icons-instagram" src={InstagramIcon} alt="instagram-icon" />
                </a>
                </p>
            </div>
            </div>
        
        
    </div>
    </>
    )
}

export default ContactUs;