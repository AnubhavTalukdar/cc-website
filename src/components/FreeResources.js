/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react"
import clipart2 from "../assets/img/clipart2.PNG"
import SideArrow from "../assets/img/sidearrow.PNG"
import Modal from 'react-bootstrap/Modal'


function FreeResources(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
        <div className="row pt-5 container-fluid justify-content-center">
        <div className="col-lg-5 pl-5 pb-lg-5 pb-3 mt-auto">
            <p className="freeresources-text1 pt-lg-none pt-md-none pt-5">We are here to help you create a <br />Conscious Culture. sectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
        <div className="col-lg-5 pl-5 text-center text-lg-right">
            <img className="clipart2" src={clipart2} alt="clipart1" width="100%" />
        </div >
        </div>
        <div className="row mt-5 mb-5 container-fluid justify-content-center">
        <div className="col-lg-5 pl-5 pt-5">
            <div className="freeresource-card ml-3">
                <p className="freeresource-card-heading px-4 py-3">Resource Name Can write in a lot of words, say 12 easily. </p>
                <p className="freeresource-card-subheading px-4 py-1">Description of the resource</p>
            </div>
            <div className="freeresource-cardbottom">
                <p className="freeresource-cardbottom-text pt-2 text-center">Download the PDF</p>
            </div>
        </div>
        <div className="col-lg-5 pl-5 pt-5">
            <div className="freeresource-card ml-3">
            <p className="freeresource-card-heading px-4 py-3">Resource Name Can write in a lot of words, say 12 easily. </p>
            <p className="freeresource-card-subheading px-4 py-1">Description of the resource</p>
            </div>
            <div className="freeresource-cardbottom">
                <p className="freeresource-cardbottom-text pt-2 text-center">Download the PDF</p>
            </div>
        </div >
        <div className="col-lg-5 pl-5 pt-5">
            <div className="freeresource-card ml-3">
                <p className="freeresource-card-heading px-4 py-3">Resource Name Can write in a lot of words, say 12 easily. </p>
                <p className="freeresource-card-subheading px-4 py-1">Description of the resource</p>
            </div>
            <div className="freeresource-cardbottom">
                <p className="freeresource-cardbottom-text pt-2 text-center">Download the PDF</p>
            </div>
        </div>
        <div className="col-lg-5 pl-5 pt-5">
            
            <div className="freeresource-endcard ml-3">
            <p className="freeresource-endcard-text px-4 py-3">Send a request for other <br/> free resources</p>
            
            <button className="freeresource-button mt-5 mr-3 float-right" onClick={handleShow}>
            <img className="sidearrow mt-5 ml-5 " src={SideArrow} alt="side-arrow" />
            </button>
            
            </div>
        </div >
        </div>
        <Modal  
        show={show} onHide={handleClose}>
        <Modal.Header closeButton>
           <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row container-fluid justify-content-center" >
        
        <div className="row container-fluid ml-lg-5 mr-lg-4 ml-4 mr-0" style={{borderRadius : "30px", backgroundColor : "#f1f1f1"}}>
        <div className="col-lg-12 col-sm-12 col-xs-12 mt-5 mb-5 pl-2 pr-2 pl-lg-5 pr-lg-5" style={{borderRadius : "30px", backgroundColor : "white"}}>
            <br />
            <input type="text" class="contact-us-input form-control" id="name" placeholder="Name" style={{width : "100%"}}/>
            <br />
            <input type="email" class="contact-us-input form-control" id="email" placeholder="Email" style={{width : "100%"}}/>
            <br />
            <input type="text" class="contact-us-input form-control" id="company" placeholder="Company" style={{width : "100%"}}/>
            <br />
            <input type="number" class="contact-us-input form-control" id="contact" placeholder="Contact" style={{width : "100%"}}/>
            <br />
            <textarea class="contact-us-message form-control" id="FormControlTextarea1" rows="3" placeholder="Message"/>
            <br />
            <button className="contact-us-button float-right">Submit</button>
            <br />
            <br />
        </div>
        
        </div>
    
    
</div>
        </Modal.Body>
      </Modal>
        </>

    );
}

export default FreeResources;