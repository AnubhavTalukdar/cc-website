/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react"
import logobw from "./../assets/img/logobw.png"
import map from "./../assets/img/map.png"
import FacebookIcon from "./../assets/icons/facebook.png"
import TwitterIcon from "../assets/icons/twitter.png"
import InstagramIcon from "../assets/icons/instagram.png"
import YoutubeIcon from "../assets/icons/youtube.png"
import SpotifyIcon from "../assets/icons/spotify.png"
import LinkedinIcon from "../assets/icons/linkedin.png"
import { BASE_URL } from "../config/url";
import Tooltip from '@material-ui/core/Tooltip';
import axios from "axios"

function Footer(){
    const [youtube, setYoutube] = useState("")
    const [facebook, setFacebook] = useState("")
    const [twitter, setTwitter] = useState("")
    const [instagram, setInstagram] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [spotify, setSpotify] = useState("")
    const [address1, setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [cp, setCp] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(() => { 
        axios.get(`${BASE_URL}/contact-details/1`)
        .then(response => {
            setYoutube(response.data.Youtube)
            setFacebook(response.data.Facebook)
            setTwitter(response.data.Twitter)
            setInstagram(response.data.Instagram)
            setLinkedin(response.data.LinkedIn)
            setSpotify(response.data.Spotify)
            setMessage(response.data.Copyright_Message)
            setAddress1(response.data.Address_1)
            setAddress2(response.data.Address_2)
            setCp(response.data.City_Pincode)
            setPhone(response.data.Phone_No)
            setEmail(response.data.Email)
            
        })

    }, [])
    return(
        <footer>
            <div className="footer container-fluid pt-lg-5 pt-md-5 pt-3 pb-2">
                <div className="row container-fluid pl-5">
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12 pt-3 pb-1 text-center">
                    <img className="footer-logo" src={logobw} alt="logo-bw" />
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12 pt-4 pb-lg-1 pb-md-1 pb-3 text-lg-right text-center pr-lg-5 pr-none">
                    <p className="footer-column2-text">Get in touch <br className="d-lg-block d-md-block d-none"/> with us!</p>
                    
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12 text-lg-left text-center pl-lg-5 pr-none l-border r-border">
                <p className="footer-column3-text">You could drop us a message <a className="footer-anchor" href="/contactus/#contactUsForm">here.</a></p>
                <p className="footer-column3-text">Or write to us at <br/><a className="footer-anchor" href={"mailto:"+email} target="_blank" rel="noopener noreferrer">{email}</a></p>
                <div className="footer-column3-text">
                    <span className="d-lg-block d-md-block d-none">Follow us : </span>
                    <div className="row container-fluid mt-1 pl-lg-0 justify-content-lg-start justify-content-center">  
                    <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Facebook</b> page!</span></React.Fragment>} arrow>
                    <a href={facebook} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-facebook" src={FacebookIcon} alt="facebook-icon" /> 
                    </a>
                    </Tooltip>
                    </div>
                    <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Twitter</b> page!</span></React.Fragment>} arrow>
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-twitter" src={TwitterIcon} alt="twitter-icon"  /> 
                    </a>
                    </Tooltip>
                    </div>
                    <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Instagram</b> page!</span></React.Fragment>} arrow>
                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-instagram" src={InstagramIcon} alt="instagram-icon" />
                    </a>
                    </Tooltip>
                    </div>
                    <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Linkedin</b> page!</span></React.Fragment>} arrow>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-instagram" src={LinkedinIcon} alt="linkedin-icon" />
                    </a>
                    </Tooltip>
                    </div>
                    <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Spotify</b> page!</span></React.Fragment>} arrow>
                    <a href={spotify} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-instagram" src={SpotifyIcon} alt="spotify-icon" />
                    </a>
                    </Tooltip>
                    </div>
                    <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Youtube</b> page!</span></React.Fragment>} arrow>
                    <a href={youtube} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-instagram" src={YoutubeIcon} alt="youtube-icon" />
                    </a>
                    </Tooltip>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-6 col-xs-12 col-sm-12 text-lg-left text-center">
                <p className="footer-column4-heading">Visit us at our Delhi Office.</p>
                <div className="row">
                    <div className="col-lg-4 col-md-5 col-6 text-lg-left text-center">
                        <img src={map} alt="map" width="88px" height="86px"/>

                    </div>
                    <div className="col-lg-8 col-md-7 col-6 text-lg-left text-center">
                    <p className="footer-column4-text">{address1} <br /> {address2}<br/>{cp}</p>
                    <p className="footer-column4-text"><a className="footer-anchor-1" href={"tel:"+phone} target="_blank" rel="noopener noreferrer">{phone}</a></p>
                    </div>
                </div>
   
                </div>
                </div>
                <div className="row container-fluid pl-5 pt-2">
                    <div className="col-12">
                        <p className="footer-copyright">{message}</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;