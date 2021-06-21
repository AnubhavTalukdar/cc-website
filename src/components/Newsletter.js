import React, {useState} from "react";
import { BASE_URL } from "../config/url";
import axios from "axios"
import Modal from 'react-bootstrap/Modal'

function Newsletter() {
    var date = new Date()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("")

    const submit = (e) => {
        e.preventDefault();
        axios.post(`${BASE_URL}/newsletter-subscribers`, {Email: email, Date_of_Subscribing: date})
        .then(response => {
            setEmail("")
            handleShow()
        })

    }

    

    return(
        <div>
            <div className="newsletter container-fluid px-0 pt-4 pb-3">
                <div className="row container-fluid pl-5 justify-content-center">
                    <div className="col-lg-5 col-sm-12 col-xs-12">
                        <p className="newsletter-text1">Stay updated every week</p>
                        <p className="newsletter-text2">Get exclusive interviews, opinions and workplace <br />insights straight to your inbox. It's completely free !</p>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-xs-12">
                    <form onSubmit={submit}>
                        <div className="row pt-2">
                            
                            <div className="col-lg-8 col-sm-12 col-xs-12 pt-2">
                                <input type="email" required class="newsletter-input form-control" id="exampleInputEmail1" placeholder="Enter your email here" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 pt-2 text-lg-left text-center">
                                <button className="newsletter-button">Sign me up!</button>
                            </div>
                            
                        </div>
                    </form>
                    </div>
                </div>
                
            </div>
            <Modal  
        show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>
        <div>

            <h6>Thank you for subscribing to consciousculture.in!</h6>
        </div>
        </Modal.Body>
      </Modal>
        </div>
    );
}

export default Newsletter;