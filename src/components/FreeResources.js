/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState, useEffect} from "react"
import { BASE_URL } from "../config/url";
import axios from "axios"
import clipart2 from "../assets/img/clipart2.PNG"
import Modal from 'react-bootstrap/Modal'
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
var arraySort = require('array-sort');

function FreeResources(){
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [freeResources, setFreeResources] = useState([]);
    const [filteredResources, setFilteredResources] = useState([]);
    const [length, setLength] = useState(0)
    const [visible, setVisible] = useState(5)
    const [filter, setFilter] = useState("All")
    const [categories, setCategories] = useState([])
    const [fEmail, setFEmail] = useState("")
    const [resourceLink, setResourceLink] = useState("")

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
   

    const loadMore = (e) => {
        setVisible((prevValue) => prevValue + 3)
    }

    const changeFilter = (e) => {
        var s = e.target.value
        setFilter(s)
        var b = []
        b = freeResources.filter(function(fr){
            return fr.Category.name === s
        })
        setFilteredResources(b)
        console.log(b)
    }

    const requestResource = (e) => {
        e.preventDefault()
        window.Email.send({
            SecureToken : "c27ae495-ba3b-4e95-b9c5-e04fa40e6549",
            To : `${fEmail}`,
            From : "dassubhra1998@gmail.com",
            Subject : "This Mail is from Concious Culture",
            Body : '<h4>Greetings,</h4><h4>From Conscious Culture Team!</h4> <br ><a href="'+ resourceLink +'">Click on this link to open your free resource!</a>'
        })
        .then(
          response => {
              setShow1(false);
              setShow2(true)
          }
        );
    }

    useEffect(() => { 
        
        axios.get(`${BASE_URL}/free-resources`)
        .then(response => {
            console.log(response.data)
            setFreeResources(arraySort(response.data, "id").reverse())
            setFilteredResources(arraySort(response.data, "id").reverse())
            setLength(response.data.length)
        })

        axios.get(`${BASE_URL}/categories`)
        .then(response => {
            setCategories(response.data)
        })

    }, [])


    return(
        <>
        <div className="row pt-5 pb-2 container-fluid justify-content-center">
        <div className="col-lg-5 pl-5 pb-lg-5 pb-3 mt-auto">
            <p className="freeresources-text1 pt-lg-none pt-md-none pt-5">We are here to help you create a <br />Conscious Culture. sectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
        </div>
        <div className="col-lg-5 pl-5 text-center text-lg-right">
            <img className="clipart2" src={clipart2} alt="clipart1" width="100%" />
        </div >
        </div>
        <div className="row mt-3 pl-lg-5 container-fluid pr-lg-5 pr-0">
            <div className="col-lg-8 col-md-4 col-sm-0 mt-2">
            </div>
            <div className="col-lg-4 col-md-8 col-sm-6 mt-2 pr-lg-5 pr-md-5 pr-0">
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
                <div className="freeresources-card mt-3 row container-fluid py-5 px-3" onClick={()=>{setResourceLink(BASE_URL + f.Resource.url);handleShow1()}} style={{ backgroundImage: f.Theme === "Blue" ? blue : f.Theme === "Red" ? red : f.Theme === "Purple" ? purple : f.Theme === "Yellow" ? yellow : maroon}}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img className="freeresource-img" src={BASE_URL + f.Cover_Image.formats.thumbnail.url} alt=""/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 mt-lg-0 mt-3">
                        <h5 style={{color : "white"}}>{f.Title}</h5>
                        <h6 className="mt-4" style={{color : "white"}}>Category : {f.Category.name}</h6>
                        <p className="mt-4" style={{color : "white"}}>{f.Description}</p>
                    </div>
                </div>
            </div>

            ))
            }
            </>:
            <>
            { filteredResources.slice(0,visible).map((f) => (
                <div className="col-lg-6 col-sm-12 py-none px-lg-5 px-none">
                <div className="freeresources-card mt-3 row container-fluid py-5 px-3" onClick={()=>{setResourceLink(BASE_URL + f.Resource.url);handleShow1()}} style={{ backgroundImage: f.Theme === "Blue" ? blue : f.Theme === "Red" ? red : f.Theme === "Purple" ? purple : f.Theme === "Yellow" ? yellow : maroon}}>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img className="freeresource-img" src={BASE_URL + f.Cover_Image.formats.thumbnail.url} height="200vh" alt=""/>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 mt-lg-0 mt-3">
                        <h5 style={{color : "white"}}>{f.Title}</h5>
                        <h6 className="mt-4" style={{color : "white"}}>Category : {f.Category.name}</h6>
                        <p className="mt-4" style={{color : "white"}}>{f.Description}</p>
                    </div>
                </div>
            </div>

            ))
            }
            </>
            }
           
          
            
            <div className="col-lg-6 col-sm-12 py-none px-lg-5 px-none" onClick={handleShow}>
                <div className="freeresources-lastcard mt-3 row container-fluid py-5 px-5" onClick={handleShow}>
                    <div className="col-lg-12 text-center">
                        <h3 style={{color : "white"}}>Send a request for other free resources</h3>
                    </div>
                </div>
            </div>           
        </div>
       
        <center>
            <button type="button" class="load-more-button mr-lg-none mr-md-3 mr-3 mb-4" onClick={loadMore} style={{display : visible >= length || length <= 5 ? "none": "block"}}>Load More</button>
        </center>
    
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
           <Modal.Title>Request a Free Resource</Modal.Title>
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
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
           Please enter your Email Address
        </Modal.Header>
        <Modal.Body>
            <form onSubmit={requestResource}>
            <div className="row container-fluid">
                
                <div className="col-lg-8 col-6">
                    <br />
                    <input type="email" class="contact-us-input form-control" id="email2" placeholder="Email" required style={{width : "100%"}} onChange={(e)=>setFEmail(e.target.value)}/>
                    <br />
                </div>
                <div className="col-lg-4 col-6">
                    <br />
                    <button type="submit" className="contact-us-button mt-1">Submit</button>
                </div>
                
            </div>
            </form>
        </Modal.Body>
      </Modal>
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>

        </Modal.Header>
        <Modal.Body>
        <div>
            <h6>Please check your inbox for your Free Resource!</h6>
        </div>
        </Modal.Body>
      </Modal>
    </>

    );
}

export default FreeResources;