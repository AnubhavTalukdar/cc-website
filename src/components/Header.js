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
import Tooltip from '@material-ui/core/Tooltip';

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
                <div className="row container-fluid d-flex flex-row-reverse">
                
                    <div className="col-lg-6 col-md-10 right-margin-remover">
                        <div className="row container-fluid text-right pl-5 pr-0 mt-2 right-margin-remover">
                        <div className="col-1 text-right">
                        </div>
                        <div className="col-5 text-right right-margin-remover">
                            <a className="footer-anchor" href={"mailto:"+email} target="_blank" rel="noopener noreferrer">{email}</a>
                        </div>   
                        <div className="col-1 text-right right-margin-remover">
                            <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Facebook</b> page!</span></React.Fragment>} arrow>
                            <a href={facebook} target="_blank" rel="noopener noreferrer">
                                <img className="social-icons-facebook" src={FacebookIcon} alt="facebook-icon" />
                            </a>
                            </Tooltip>
                        </div>
                        <div className="col-1 text-right right-margin-remover">
                        <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Twitter</b> page!</span></React.Fragment>} arrow>
                            <a href={twitter} target="_blank" rel="noopener noreferrer">
                                <img className="social-icons-twitter" src={TwitterIcon} alt="twitter-icon"  /> 
                            </a>
                            </Tooltip>
                        </div>
                        <div className="col-1 text-right right-margin-remover">
                        <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Instagram</b> page!</span></React.Fragment>} arrow>
                            <a href={instagram} target="_blank" rel="noopener noreferrer">
                                <img className="social-icons-instagram" src={InstagramIcon} alt="instagram-icon" />
                            </a>
                            </Tooltip>
                        </div>
                        <div className="col-1 text-right right-margin-remover">
                        <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Linkedin</b> page!</span></React.Fragment>} arrow>
                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                <img className="social-icons-instagram" src={LinkedinIcon} alt="linkedin-icon" />
                            </a>
                            </Tooltip>
                        </div>
                        
                        <div className="col-1 text-right right-margin-remover">
                            <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Spotify</b> page!</span></React.Fragment>} arrow>
                            <a href={spotify} target="_blank" rel="noopener noreferrer">
                                <img className="social-icons-instagram" src={SpotifyIcon} alt="spotify-icon" />
                            </a>
                            </Tooltip>
                        </div>
                        <div className="col-1 text-right right-margin-remover">
                        <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Youtube</b> page!</span></React.Fragment>} arrow>
                            <a href={youtube} target="_blank" rel="noopener noreferrer">
                                <img className="social-icons-instagram" src={YoutubeIcon} alt="youtube-icon" />
                            </a>
                            </Tooltip>
                        </div>
                        </div>
                    </div>
                
                </div>
            </div>

        </header>
    );
}

export default Header;