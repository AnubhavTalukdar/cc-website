/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react"
import clipart1 from "./../assets/img/clipart1.PNG"
import FacebookIcon from "./../assets/icons/facebook.png"
import TwitterIcon from "../assets/icons/twitter.png"
import InstagramIcon from "../assets/icons/instagram.png"
import YoutubeIcon from "../assets/icons/youtube.png"
import SpotifyIcon from "../assets/icons/spotify.png"
import LinkedinIcon from "../assets/icons/linkedin.png"
import { BASE_URL } from "../config/url";
import Modal from 'react-bootstrap/Modal'
import Spinner from 'react-bootstrap/Spinner'
import axios from "axios"
import Tooltip from '@material-ui/core/Tooltip';

function ContactUs(){
    const [name, setName] = useState("")
    const [company, setCompany] = useState("")
    const [cEmail, setCEmail] = useState("")
    const [number, setNumber] = useState("")
    const [message, setMessage] = useState("")
    const [disp1, setDisp1] = useState("block")
    const [disp2, setDisp2] = useState("none")

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
    const [phone, setPhone] = useState("")

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submit = (e) => {
        e.preventDefault();
        setDisp1("none")
        setDisp2("block")
        axios.post(`${BASE_URL}/contact-form-responses`, {Name: name, Email: cEmail, Company : company, Contact_No : number, Message : message})
        .then(response => {
            
            
        })
        // eslint-disable-next-line
        axios.post('https://consciousculture.in/email_contact_us', {name: name, phone: number, company: company, email: cEmail, message: message})
        .then(response => {
            setName("")
            setNumber("")
            setCompany("")
            setCEmail("")
            setMessage("")
            handleShow()
            setDisp1("block")
            setDisp2("none")
        }) 
    }

    useEffect(() => { 
        window.scroll(0,0)
        axios.get(`${BASE_URL}/contact-details/1`)
        .then(response => {
            setYoutube(response.data.Youtube)
            setFacebook(response.data.Facebook)
            setTwitter(response.data.Twitter)
            setInstagram(response.data.Instagram)
            setLinkedin(response.data.LinkedIn)
            setSpotify(response.data.Spotify)
            setAddress1(response.data.Address_1)
            setAddress2(response.data.Address_2)
            setCp(response.data.City_Pincode)
            setPhone(response.data.Phone_No)
            setEmail(response.data.Email)
            
        })

    }, [])
    return(
    <>
    <div className="row pt-5 container-fluid justify-content-center">
        <div className="col-lg-5 pl-5 pb-5 mt-auto">
            <p className="contact-us-text1">We always love hearing <br className="d-lg-block d-none"/>from you!</p>
            <p className="contact-us-text1"> Send us your queries, give us feedback <br className="d-lg-block d-none" />or start a conversation or join in/<br className="d-lg-block d-none"/>contribute/collaborate!</p>
        </div>
        <div className="col-lg-5 pl-5 text-center text-lg-right">
            <img className="clipart1" src={clipart1} alt="clipart1" width="85%" />
        </div >
    </div>
    <br id="contactUsForm"/>
    <div className="row container-fluid pb-5 justify-content-center px-lg-5 px-3" >
            
            <div className="row container-fluid ml-lg-5 mr-lg-4 ml-4 mr-0" style={{borderRadius : "30px", backgroundColor : "#f1f1f1"}}>
            <div className="col-lg-7 col-sm-12 col-xs-12 mt-5 mb-5 pl-2 pr-2 pl-lg-5 pr-lg-5" style={{borderRadius : "30px", backgroundColor : "white"}}>
                <form onSubmit={submit}>
                <br />
                <input type="text" className="contact-us-input form-control" id="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                <br />
                <input type="email" className="contact-us-input form-control" id="email" placeholder="Email" value={cEmail} onChange={(e)=>setCEmail(e.target.value)} required/>
                <br />
                <input type="text" className="contact-us-input form-control" id="company" placeholder="Company Name" value={company} onChange={(e)=>setCompany(e.target.value)}/>
                <br />
                <input type="number" className="contact-us-input form-control" id="contact" placeholder="Phone Number" value={number} onChange={(e)=>setNumber(e.target.value)} required/>
                <br />
                <textarea className="contact-us-message form-control" id="FormControlTextarea1" rows="8" placeholder="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)} required/>
                <br />
                <button type="submit" className="contact-us-button float-right"><span style={{display : disp1}}>Submit</span><center className="pb-1" style={{display : disp2}}><Spinner animation="border" variant="light" size="sm" /></center></button>
                <br />
                <br />
                </form>
            </div>
            <div className="col-lg-5 col-sm-12 col-xs-12 mt-lg-5 mt-2 mb-lg-5 mb-2 pl-lg-5 pl-2">
                <br />
                <br />
               
                <a href={"mailto:"+email} target="_blank" rel="noopener noreferrer" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}><p className="contact-us-text2">{email}</p></a>
                <p className="contact-us-text3 mt-lg-5 mb-lg-5 mt-2 mb-2">{address1} <br />{address2}<br />{cp}</p>
                <a  href={"tel:"+phone} target="_blank" rel="noopener noreferrer" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}><p className="contact-us-text4 mb-lg-5 mb-2">{phone}</p></a>
                <p className="contact-us-text2 mt-lg-0 mt-md-0 mt-3">Follow us on Social Media</p>
                <p>
                <div className="row container-fluid pl-0">
                <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Facebook</b> page</span></React.Fragment>} arrow>
                        <a href={facebook} target="_blank" rel="noopener noreferrer">
                            <img className="social-icons-facebook" src={FacebookIcon} alt="facebook-icon" /> 
                        </a>
                    </Tooltip>
                </div>
                <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Twitter</b> page</span></React.Fragment>} arrow>
                        <a href={twitter} target="_blank" rel="noopener noreferrer">
                            <img className="social-icons-twitter" src={TwitterIcon} alt="twitter-icon"  /> 
                        </a>
                    </Tooltip>
                </div>
                <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Instagram</b> page</span></React.Fragment>} arrow>
                        <a href={instagram} target="_blank" rel="noopener noreferrer">
                            <img className="social-icons-instagram" src={InstagramIcon} alt="instagram-icon" />
                        </a>
                    </Tooltip>  
                </div>
                <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>LinkedIn</b> page</span></React.Fragment>} arrow>
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                            <img className="social-icons-instagram" src={LinkedinIcon} alt="linkedin-icon" />
                        </a>
                    </Tooltip>  
                </div>
                <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Spotify</b> page</span></React.Fragment>} arrow>
                        <a href={spotify} target="_blank" rel="noopener noreferrer">
                            <img className="social-icons-instagram" src={SpotifyIcon} alt="spotify-icon" />
                        </a>
                    </Tooltip>  
                </div>
                <div className="col-1">
                    <Tooltip sx={{backgroundColor: "black"}} title={<React.Fragment><span style={{fontSize: "14px"}}>Visit our <b>Youtube</b> page</span></React.Fragment>} arrow>
                        <a href={youtube} target="_blank" rel="noopener noreferrer">
                            <img className="social-icons-instagram" src={YoutubeIcon} alt="youtube-icon" />
                        </a>
                    </Tooltip>  
                </div>
                </div>
                </p>
            </div>
            </div>
        
        
    </div>
    <Modal  show={show} centered onHide={handleClose} >
        
        <Modal.Body>
        <div className="py-3">
            <center>
            <h6>Thank you, our team will reach out to you as soon as possible!</h6>
         
            <button className="btn btn-info mt-2 float-right mr-2" onClick={()=>handleClose()}>Okay</button>
            </center>
        </div>
        </Modal.Body>
    </Modal>
    </>
    )
}

export default ContactUs;