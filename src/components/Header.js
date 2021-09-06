/* eslint-disable jsx-a11y/anchor-is-valid */
import React , {useState, useEffect} from 'react';
import { BASE_URL } from "../config/url";
import axios from "axios"
import FacebookIcon from "./../assets/icons/facebook.png"
import TwitterIcon from "../assets/icons/twitter.png"
import InstagramIcon from "../assets/icons/instagram.png"
import YoutubeIcon from "../assets/icons/youtube.png"
import SpotifyIcon from "../assets/icons/spotify.png"
import LinkedinIcon from "../assets/icons/linkedin.png"

function Header() {
    const [youtube, setYoutube] = useState("")
    const [facebook, setFacebook] = useState("")
    const [twitter, setTwitter] = useState("")
    const [instagram, setInstagram] = useState("")
    const [linkedin, setLinkedin] = useState("")
    const [spotify, setSpotify] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => { 
        axios.get(`${BASE_URL}/contact-details/1`)
        .then(response => {
            setYoutube(response.data.Youtube)
            setFacebook(response.data.Facebook)
            setTwitter(response.data.Twitter)
            setInstagram(response.data.Instagram)
            setLinkedin(response.data.LinkedIn)
            setSpotify(response.data.Spotify)
            setEmail(response.data.Email)
            
        })

    }, [])

    return(
        <header>
            <div className="container-fluid px-0 header d-lg-block d-md-block d-none">
                <div className="row container-fluid">
                <div className="col-12 text-right pr-1 pt-2">
                    <a className="footer-anchor" href={"mailto:"+email} target="_blank" rel="noopener noreferrer">{email}</a>
                    <a href={facebook} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-facebook" src={FacebookIcon} alt="facebook-icon" />
                    </a>
                    <a href={twitter} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-twitter" src={TwitterIcon} alt="twitter-icon"  /> 
                    </a>
                    <a href={instagram} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-instagram" src={InstagramIcon} alt="instagram-icon" />
                    </a>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-instagram" src={LinkedinIcon} alt="linkedin-icon" />
                    </a>
                    <a href={spotify} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-instagram" src={SpotifyIcon} alt="spotify-icon" />
                    </a>
                    <a href={youtube} target="_blank" rel="noopener noreferrer">
                        <img className="social-icons-instagram" src={YoutubeIcon} alt="youtube-icon" />
                    </a>
                </div>
                </div>
            </div>

        </header>
    );
}

export default Header;