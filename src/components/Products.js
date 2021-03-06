import React , {useEffect, useState} from "react"
import products from "../assets/img/products.png"
import products2 from "../assets/img/Product2.png"
import avatar from "../assets/img/avatar-testimonial.png"
import Carousel from "react-elastic-carousel"
import axios from "axios"
import { BASE_URL } from "../config/url";
var arraySort = require('array-sort');


function Products(){
    const breakPoints = [
        { width: 1, itemsToShow: 1,itemsToScroll: 1 },
        { width: 550, itemsToShow: 2,itemsToScroll: 2 },
        { width: 768, itemsToShow: 4,itemsToScroll: 4 },
        { width: 1200, itemsToShow: 4,itemsToScroll: 4 },
      ];
    
    const [offerings, setOfferings] = useState([])
    const [length, setLength] = useState("")
    const [facts1, setFacts1] = useState("")
    const [facts2, setFacts2] = useState("")
    const [clients, setClients] = useState([])
    const [freeconsult, setFreeconsult] = useState("")
    
    
      useEffect(() => { 
        window.scroll(0,0)

        axios.get(`${BASE_URL}/our-offerings`)
        .then(response => {
            setOfferings(response.data)
            setLength(response.data.length)
        })

        axios.get(`${BASE_URL}/website-texts`)
        .then(response => {
            setFacts1(response.data.Facts1)
            setFacts2(response.data.Facts2)
        })

        axios.get(`${BASE_URL}/our-clients`)
        .then(response => {
            setClients(arraySort(response.data, "id"))
        })

        axios.get(`${BASE_URL}/website-texts`)
        .then(response => {
            setFreeconsult(response.data.Free_Consult)
        })


    }, [])


    return(
        <>
            <div className="row pt-5 pb-5 container-fluid justify-content-center">
                <div className="col-lg-5 pl-5 pb-5 mt-auto">
                    <p className="products-text1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.</p>
                    <p className="products-text1"> Lorem ipsum dolor sit amet, consectetur. Consectetur adipiscing elit</p>
                </div>
                <div className="col-lg-5 pl-5 text-center text-lg-right">
                    <img className="clipart1" src={products} alt="product" width="100%" />
                </div >
            </div>
            <div className="products-section2 container-fluid pt-5 pb-5 px-lg-5 px-md-3 px-0">
            <h1 className="products-section2-heading text-center">Facts</h1>
            <br />
                <div className="row pt-2 products-section2-row container-fluid">
                    <div className="col-12">
                        <p className="products-section2-text1 text-justify">
                        {facts1}
                        </p>
                    </div>
                </div>
                <div className="row products-section2-row container-fluid">
                    <div className="col-lg-9">
                        <p className="products-section2-text1 text-justify">
                        {facts2}  
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <img src={products2} alt="products-clipart2" width="100%"/>
                    </div>
                </div>
            </div>
            <div className="products-section3 container-fluid pt-5 pb-5 px-lg-5 px-md-3 px-0">
                <h1 className="products-section3-heading text-center">Our Offerings</h1>
                <br />
                <br id="product"/>
                { offerings.map((o,index) =>(
                    <>
                    
                    { (index % 2) === 0 ?
                    <>
                    <div className="products-section3-row row container-fluid">
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-5">
                        {
                            o.Image === null ?
                            <>
                                <img className="rounded products-section3-img " src="" alt="product-service1" width="100%" />
                            </>
                            :
                            <>
                                <img className="rounded products-section3-img " src={BASE_URL + o.Image.url} alt="product-service1" width="100%" />
                            </>
                        }
                        
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-5">
                        <h1 className="products-section3-subheading">{o.Heading}</h1>
                        <p className="products-section3-desc mt-4 mt-lg-4">
                        {o.Description}
                        </p>
                        <a href={freeconsult} target="_blank" rel="noopener noreferrer" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}><button className="mt-4 mt-lg-5 btn btn-info">Free Consult</button></a>
                        <p className="products-section3-test mt-4 mt-lg-5">
                        {o.Testimonial}
                        </p>
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-2">
                                {
                                    o.Testimonial_Image === null ?
                                    <>
                                        <img className="rounded-circle" src={avatar} alt="teammember-testimonial" width="45px" height="45px"/>
                                    </>
                                    :
                                    <>
                                         <img className="rounded-circle" src={BASE_URL + o.Testimonial_Image.formats.thumbnail.url} alt="teammember-testimonial" width="45px" height="45px"/>
                                    </>
                                }
                               
                            </div>
                        <div className="col-lg-11 col-md-11 col-6">
                            <div className="row ml-1 mt-2 products-section3-name">{o.Name}</div>
                            <div className="row ml-1 products-section3-desg">{o.Designation}</div>
                        </div>
                        </div>
                        </div>
                       
                        
                    </div>
                    <div className="products-section3-row row container-fluid d-none d-lg-block">
                        {/*eslint-disable-next-line */}
                        <svg style={{width: '100%', height: '100%'}} style={{display : index === length - 1 ? "none" : "block"}}>
                            <line stroke-dasharray="4,4,4" r="1" x1="20%" y1="0" x2="80%" y2="100%"
                                style={{stroke : "#7b85a0", strokeWidth: "2"}}/>
                        </svg>
                    </div>
                    </>
                    :
                    <>
                    <div className="products-section3-row row container-fluid">
                    <div className="mobile-products col-lg-6 col-sm-12 mt-lg-0 mt-5 d-lg-none d-block">
                        {
                            o.Image === null ?
                            <>
                                <img className="rounded products-section3-img " src={BASE_URL + o.Image.url} alt="product-service2" width="100%"/>
                            </>:
                            <>
                                <img className="rounded products-section3-img " src={BASE_URL + o.Image.url} alt="product-service2" width="100%"/>
                            </>
                        }
                       
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-5">
                        <h1 className="products-section3-subheading">{o.Heading}</h1>
                        <p className="products-section3-desc mt-4 mt-lg-4">
                        {o.Description}
                        </p>
                        <a href={freeconsult} target="_blank" rel="noopener noreferrer" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}><button className="mt-4 mt-lg-5 btn btn-info">Free Consult</button></a>
                        <p className="products-section3-test mt-4 mt-lg-5">
                        {o.Testimonial}
                        </p>
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-2">
                                {
                                    o.Testimonial_Image === null ?
                                    <>
                                        <img className="rounded-circle" src={avatar} alt="teammember-testimonial" width="45px" height="45px"/>
                                    </>
                                    :
                                    <>
                                        <img className="rounded-circle" src={BASE_URL + o.Testimonial_Image.formats.thumbnail.url} alt="teammember-testimonial" width="45px" height="45px"/>
                                    </>
                                }
                            </div>
                        <div className="col-lg-11 col-md-11 col-6">
                            <div className="row ml-1 mt-2 products-section3-name">{o.Name}</div>
                            <div className="row ml-1 products-section3-desg">{o.Designation}</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-5 d-lg-block d-none">
                        <img className="rounded products-section3-img " src={BASE_URL + o.Image.url} alt="product-service3" width="100%"/>
                    </div>
                    <span></span>
                    </div>
                    <div className="products-section3-row row container-fluid d-none d-lg-block" >
                        {/*eslint-disable-next-line */}
                        <svg style={{width: '100%', height: '100%'}} style={{display : index === length - 1 ? "none" : "block"}}>
                            <line stroke-dasharray="4,4,4" r="1" x1="80%" y1="0" x2="20%" y2="100%"
                                style={{stroke : "#7b85a0", strokeWidth: "2"}}/>
                        </svg>
                    </div>
                    </>}
                    </>
                ))}
                
               
                
            </div>
            <div className="products-section4 container-fluid pt-5 pb-5">
            <h1 className="products-section4-heading text-center">Our Clients</h1>
            <br />
            <br />
                <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={15000}>
                { 
                clients.map((c)=>(
                    <div className="logo-slides text-center">
                        {
                            c.Image === null ?
                            <>
                                <img src="" alt="logo-img" height="70%" />
                            </>:
                            <>
                                <img src={BASE_URL + c.Image.url} alt="logo-img" height="70%" />
                            </>
                        }
                       
                    </div>
                ))}
                </Carousel>
            

            </div>
        </>
    )
}

export default Products;