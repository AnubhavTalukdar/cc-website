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
            <div className="newsletter container-fluid px-0 py-lg-4 py-md-4 py-5">
                <div className="row container-fluid pl-5 justify-content-center">
                    <div className="col-lg-5 col-sm-12 col-xs-12">
                        <p className="newsletter-text1">Stay updated every week...</p>
                        <p className="newsletter-text2">Get exclusive interviews, opinions and workplace <br />insights straight to your inbox. It's completely free!</p>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-xs-12">
                    <form onSubmit={submit}>
                        <div className="row pt-2">
                            
                            <div className="col-lg-8 col-sm-12 col-xs-12 pt-2">
                                <input type="email" required class="newsletter-input form-control" id="exampleInputEmail1" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 pt-2 text-lg-left text-center">
                                <button className="newsletter-button">Sign me up!</button>
                            </div>
                            
                        </div>
                    </form>
                    </div>
                </div>
                
            </div>
            <Modal show={show} onHide={handleClose} centered dialogClassName="modal-90w">
        
        <Modal.Body>
        <div className="py-3">
            <center>
            <h6>Thank you for subscribing to our newsletter!</h6>
         
            <button className="btn btn-info mt-2 float-right mr-3" onClick={()=>handleClose()}>Okay</button>
            </center>
        </div>
        </Modal.Body>
      </Modal>
        </div>
    );
}

export default Newsletter;