/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react"
import { BASE_URL } from "../config/url";
import axios from "axios"
import clipart2 from "../assets/img/clipart2.PNG"
import Modal from 'react-bootstrap/Modal'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Spinner from 'react-bootstrap/Spinner'
import Cookies from 'js-cookie'
var arraySort = require('array-sort');

function FreeResources() {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [freeResources, setFreeResources] = useState([]);
    const [filteredResources, setFilteredResources] = useState([]);
    const [length, setLength] = useState(0);
    const [visible, setVisible] = useState(5);
    const [length1, setLength1] = useState(0);
    const [visible1, setVisible1] = useState(5);
    const [filter, setFilter] = useState(Cookies.get("Category"));
    const [categories, setCategories] = useState([]);
    const [fEmail, setFEmail] = useState("");
    const [disp1, setDisp1] = useState("block");
    const [disp2, setDisp2] = useState("none");
    const [resourceLink, setResourceLink] = useState("");
    const [resourceHeading, setResourceHeading] = useState("");
    
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [cEmail, setCEmail] = useState("");
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [disp3, setDisp3] = useState("block");
    const [disp4, setDisp4] = useState("none");

    const blue = "-webkit-linear-gradient(70deg, #34ADFF 35%, #4CBFFF 35%)"
    const purple = "-webkit-linear-gradient(70deg, #45338F 35%, #7A69BF 35%)"
    const maroon = "-webkit-linear-gradient(70deg, #8A1D45 35%, #BF4B75 35%)"
    const yellow = "-webkit-linear-gradient(70deg, #FAA51A 35%, #FCC160 35%)"
    const red = "-webkit-linear-gradient(70deg, #F04B23 35%, #F57556 35%)"

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const handleClose2 = () => setShow2(false); 
    const handleClose3 = () => setShow3(false);
    
   

    const loadMore = (e) => {
        setVisible((prevValue) => prevValue + 3)
    }

    const loadMore1 = (e) => {
        setVisible1((prevValue) => prevValue + 3)
    }

    const changeFilter = (e) => {
        var s = e.target.value
        setFilter(s)
        var b = []
        b = freeResources.filter(function(fr){
            return fr.Category.name === s
        })
        setFilteredResources(b)
        setLength1(b.length)
    }
    

    const requestResource = (e) => {
        e.preventDefault()
        setDisp1("none")
        setDisp2("block")
       
        axios.post('http://localhost:8000/email_resource', {resourceLink: resourceLink, resourceHeading: resourceHeading, email: fEmail})
        .then(response => {
            setShow1(false);
              setShow2(true)
              setDisp1("block")
              setDisp2("none")
        })
    }


    useEffect(() => { 
        window.scroll(0,0)
        axios.get(`${BASE_URL}/free-resources`)
        .then(response => {
            if(filter === "All"){
                setFreeResources(arraySort(response.data, "id").reverse())
                setFilteredResources(arraySort(response.data, "id").reverse())
                setLength(response.data.length)
                setLength1(response.data.length)
            }
            else {
                setFreeResources(arraySort(response.data, "id").reverse())
                setLength(response.data.length)

                var f = arraySort(response.data, "id").reverse()
                var b = []
                b = f.filter(function(fr){
                    return fr.Category.name === filter
                })
                setFilteredResources(b)
                setLength1(b.length)
            }
        })

        axios.get(`${BASE_URL}/categories`)
        .then(response => {
            setCategories(response.data)
        })
    // eslint-disable-next-line
    }, [])

    const submit = (e) => {
        e.preventDefault();
        setDisp3("none")
        setDisp4("block")
        axios.post(`${BASE_URL}/free-resource-requests`, {Name: name, Email: cEmail, Company : company, Phone : number, Message : message})
        .then(response => {
            setName("")
            setNumber("")
            setCompany("")
            setCEmail("")
            setMessage("")
            setDisp3("block")
            setDisp4("none")
            setShow(false)
            setShow3(true)
        })
       
    }


    return(
        <>
        <div className="row pt-lg-5 pt-0 pb-2 container-fluid justify-content-center">
        <div className="col-lg-5 pl-5 pb-lg-5 pb-3 mt-auto">
            <p className="freeresources-text1 pt-lg-none pt-md-none pt-5">We are here to help you create a <br className="d-lg-block d-none"/>Conscious Culture. sectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
        <div className="col-lg-5 pl-5 text-center text-lg-right">
            <img className="clipart2" src={clipart2} alt="clipart1" width="100%" />
        </div >
        </div>
        <div className="row mt-3 pl-lg-5 container-fluid pr-lg-5 pr-0">
            <div className="col-lg-9 col-md-4 col-sm-0 mt-2">
            </div>
            <div className="col-lg-3 col-md-8 col-sm-6 mt-2 pr-lg-5 pr-md-5 pr-0">
                <InputLabel id="filter">Filter By Category</InputLabel>
                <Select
                labelId="filter"
                id="filter"
                fullWidth
                onChange={changeFilter}
                value={filter}
                >
                <MenuItem value="All">All</MenuItem>
                { categories.map((c) => (
                    <MenuItem value={c.name}>{c.name}</MenuItem>
                ))}
                
                </Select>
            </div>
        </div>
        <div className="row pt-4 pb-5 pl-lg-5 container-fluid">
            { filter === "All" ?
            <>
             { freeResources.slice(0,visible).map((f) => (
                <div className="col-lg-6 col-sm-12 py-none px-lg-5 px-none">
                <div className="freeresources-card mt-3 row container-fluid py-5 px-3" onClick={()=>{setResourceLink(BASE_URL + f.Resource.url);setResourceHeading(f.Title);handleShow1()}} style={{ backgroundImage: f.Theme === "Blue" ? blue : f.Theme === "Red" ? red : f.Theme === "Purple" ? purple : f.Theme === "Yellow" ? yellow : maroon}}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img className="freeresource-img" src={f.Cover_Image === null ? "" : BASE_URL + f.Cover_Image.formats.thumbnail.url} alt=""/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 mt-lg-0 mt-3">
                        <h5 style={{color : "white"}}>{f.Title}</h5>
                        <h6 className="mt-4" style={{color : "white"}}>Category: <em>{f.Category.name}</em></h6>
                        <p className="mt-4" style={{color : "white"}}><em>{f.Description}</em></p>
                    </div>
                </div>
            </div>

            ))
            }

            <div className="col-lg-6 col-sm-12 py-none px-lg-5 px-none" onClick={handleShow}>
                <div className="freeresources-lastcard mt-3 row container-fluid py-5 px-5" onClick={handleShow}>
                    <div className="col-lg-12 mt-auto mb-auto text-center pl-3">
                        <h5 style={{color : "white"}}>Send a request for other free resources.</h5>
                    </div>
                </div>
            </div>
            
            <center>
                <button type="button" class="load-more-button ml-lg-0 ml-md-0 ml-5 mr-lg-none mr-md-3 mr-3 mb-4 mt-3" onClick={loadMore} style={{display : visible >= length || length <= 5 ? "none": "block"}}>Load More</button>
            </center>

            </>:
            <>
            { filteredResources.slice(0,visible).map((f) => (
                <div className="col-lg-6 col-sm-12 py-none px-lg-5 px-none">
                <div className="freeresources-card mt-3 row container-fluid py-5 px-3" onClick={()=>{setResourceLink(BASE_URL + f.Resource.url);setResourceHeading(f.Title);handleShow1()}} style={{ backgroundImage: f.Theme === "Blue" ? blue : f.Theme === "Red" ? red : f.Theme === "Purple" ? purple : f.Theme === "Yellow" ? yellow : maroon}}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img className="freeresource-img" src={f.Cover_Image === null ? "" : BASE_URL + f.Cover_Image.formats.thumbnail.url} height="200vh" alt=""/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 mt-lg-0 mt-3">
                        <h5 style={{color : "white"}}>{f.Title}</h5>
                        <h6 className="mt-4" style={{color : "white"}}>Category : <em>{f.Category.name}</em></h6>
                        <p className="mt-4" style={{color : "white"}}><em>{f.Description}</em></p>
                    </div>
                </div>
            </div>

            ))
            }

            <div className="col-lg-6 col-sm-12 py-none px-lg-5 px-none" onClick={handleShow}>
                <div className="freeresources-lastcard mt-3 row container-fluid py-5 px-5" onClick={handleShow}>
                    <div className="col-lg-12 mt-auto mb-auto text-center">
                        <h5 style={{color : "white"}}>Send a request for other free resources.</h5>
                    </div>
                </div>
            </div>
            
            <center >
                <button type="button" class="load-more-button ml-lg-0 ml-md-0 ml-5 mr-lg-none mr-md-3 mr-3 mb-4 mt-3" onClick={loadMore1} style={{display : visible1 >= length1 || length1 <= 5 ? "none": "block"}}>Load More</button>
            </center>
            </>
            }         
        </div>
       
        
    
        <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
           <Modal.Title>Request a Free Resource</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={submit}>
        <div className="row container-fluid justify-content-center" >
        
        <div className="row container-fluid ml-lg-5 mr-lg-4 ml-4 mr-0" style={{borderRadius : "30px", backgroundColor : "#f1f1f1"}}>
        <div className="col-lg-12 col-sm-12 col-xs-12 mt-5 mb-5 pl-2 pr-2 pl-lg-5 pr-lg-5" style={{borderRadius : "30px", backgroundColor : "white"}}>
            <br />
            <input type="text" class="contact-us-input form-control" id="name" placeholder="Name" style={{width : "100%"}} value={name} onChange={(e)=>setName(e.target.value)} required/>
            <br />
            <input type="email" class="contact-us-input form-control" id="email" placeholder="Email" style={{width : "100%"}} value={cEmail} onChange={(e)=>setCEmail(e.target.value)} required/>
            <br />
            <input type="text" class="contact-us-input form-control" id="company" placeholder="Company Name" style={{width : "100%"}} value={company} onChange={(e)=>setCompany(e.target.value)} />
            <br />
            <input type="number" class="contact-us-input form-control" id="contact" placeholder="Phone Number" style={{width : "100%"}} value={number} onChange={(e)=>setNumber(e.target.value)} required/>
            <br />
            <textarea class="contact-us-message form-control" id="FormControlTextarea1" rows="3" placeholder="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)} required/>
            <br />
            <button className="contact-us-button float-right"><span style={{display : disp3}}>Submit</span><center className="pb-1" style={{display : disp4}}><Spinner animation="border" variant="light" size="sm" /></center></button>
            <br />
            <br />
        </div>
        </div>
        </div>
        </form>
        </Modal.Body>
      </Modal>
      <Modal show={show1} centered onHide={handleClose1}>
        <Modal.Header closeButton>
           Please enter your Email Id to get this free resource :
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={requestResource}>
            <div className="row container-fluid">
                
                <div className="col-lg-8 col-12">
                    <br />
                    <input type="email" class="contact-us-input form-control" id="email2" placeholder="Email" required style={{width : "100%"}} onChange={(e)=>setFEmail(e.target.value)}/>
                    <br className="d-lg-block d-none"/>
                </div>
                <div className="col-lg-4 col-12 text-lg-center text-right mt-lg-0 mt-3">
                    <br className="d-lg-block d-none"/>
                    <button type="submit" className="contact-us-button mt-1"><span style={{display : disp1}}>Submit</span><center className="pb-1" style={{display : disp2}}><Spinner animation="border" variant="light" size="sm" /></center></button>
                </div>
                
            </div>
            </form>
        </Modal.Body>
      </Modal>
      <Modal show={show2} centered onHide={handleClose2}>
        <Modal.Body>
        <div className="py-3">
            <center>
            <h6>Please check your inbox for your Free Resource!</h6>
         
            <button className="btn btn-info mt-2 float-right mr-3" onClick={()=>handleClose2()}>Okay</button>
            </center>
        </div>
        </Modal.Body>
      </Modal>
      <Modal show={show3} centered onHide={handleClose3}>
        <Modal.Body>
        <div className="py-3">
            <center>
            <h6>Thank you, our team will reach out to you as soon as possible!</h6>
         
            <button className="btn btn-info mt-2 float-right mr-3" onClick={()=>handleClose3()}>Okay</button>
            </center>
        </div>
        </Modal.Body>
      </Modal>
    </>

    );
}

export default FreeResources;