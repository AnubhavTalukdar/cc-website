import React, {useState, useEffect} from "react";
import BlogsPicture from "../assets/img/download.png"
import atw from "../assets/img/atw.png"
import { BASE_URL } from "../config/url";
import axios from "axios"
var arraySort = require('array-sort');

function Blogs(){

    const [blogs, setBlogs] = useState([])
    const [visible, setVisible] = useState(5)
    const [length, setLength] = useState(0)
    

    useEffect(() => { 
        axios.get(`${BASE_URL}/blogs`)
        .then(response => {
            console.log(response.data)
            setBlogs(arraySort(response.data, "id"))
            setLength(response.data.length)
        })

    }, [])

    let last = blogs.slice(-1)

    const loadMore = (e) => {
        setVisible((prevValue) => prevValue + 3)
    }

    return(
        <>
        <div className="row container-fluid justify-content-center pt-4 pb-lg-5 pb-3">
            <div className="col-lg-10 col-sm-12 pl-4">
                
                { last.map((b)=>(
                    <div className="row container-fluid px-0 pl-5">
                    <div className="col-lg-8 col-sm-12">
                    <img className="highlight-img" src={BlogsPicture} alt="highlight-img" />
                </div>
                <div className="col-lg-4 col-sm-12">
                    <span className="highlight-category">PRIDE MONTH • </span>
                    <span className="highlight-date">{b.Date_of_Publishing}</span><br />
                    <span className="highlight-read"><em>{b.Reading_Time} mins read</em></span><br />
                    <p className="highlight-heading">{b.Title} </p>
                    <p className="highlight-summary">{b.Summary}</p>
                    <p className="highlight-author">{b.Author} <br /><span className="highlight-designation">{b.Author_Designation}</span></p>
                </div>
                </div>
                ))}
            </div>
        </div>
        <div className="row pl-lg-5 pl-md-5 pr-lg-5 pl-3 pr-0 container-fluid">
            <div className="col-lg-7 col-sm-12 pl-lg-5 pl-none">
                <div className="row">
                    <h1 className="our-blogs-heading1 pl-5">Our Blogs</h1>
                    { 
                    blogs.slice(0,visible).map((b) =>(
                        <div className="row pl-5 pb-3">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <img className="blog-img" src={BASE_URL + b.Placeholder_Image.formats.thumbnail.url} alt=""/>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <span className="blog-category">PRIDE MONTH • </span>
                            <span className="blog-date">{b.Date_of_Publishing}</span><br />
                            <span className="blog-read"><em>{b.Reading_Time} mins read</em></span><br />
                            <p className="blog-heading">{b.Title} </p>
                            <p className="blog-summary">{b.Summary} </p>
                            <p className="blog-author">{b.Author}<br /><span className="highlight-designation">{b.Author_Designation}</span></p>
                        </div>
                    </div>
                    ))
                    
                    }
           
                </div>
                <br />
                <center>
                    <button type="button" class="load-more-button" onClick={loadMore} style={{display : visible === length ? "none": "block"}}>Load More</button>
                </center>
                <br />
            </div>
            <div className="col-lg-5 col-sm-12 pl-5">
                <div className="row">
                <h2 className="our-blogs-heading2-small pl-lg-5 pl-none">THIS WEEK</h2>
                <h2 className="our-blogs-heading2 pl-lg-5 pl-none">Around the web</h2>
                <h2 className="our-blogs-heading2-last pl-lg-5 pl-none pb-lg-4 pb-3">A curated list of articles from around the web, that drew our attention this week.*</h2>
                <div className="row pl-lg-5 pl-none pb-3">
                    <div className="col-7">
                        <p className="atw-heading">Gender as a gateway to inclusion of all</p>
                        <p className="atw-summary">Tagline for blog one Tagling for blog one</p>
                        <p className="atw-medium">Medium <br /><span className="atw-dnr">Aug 5 | 5 min</span></p>
                    </div>
                    <div className="col-5 text-center">
                        <img src={atw} alt="" width="90%"/>
                    </div>
                </div>
                <div className="row pl-lg-5 pl-none pb-3">
                    <div className="col-7">
                        <p className="atw-heading">Gender as a gateway to inclusion of all</p>
                        <p className="atw-summary">Tagline for blog one Tagling for blog one</p>
                        <p className="atw-medium">Medium <br /><span className="atw-dnr">Aug 5 | 5 min</span></p>
                    </div>
                    <div className="col-5 text-center">
                        <img src={atw} alt="" width="90%"/>
                    </div>
                </div>
                <div className="row pl-lg-5 pl-none pb-3">
                    <div className="col-7">
                        <p className="atw-heading">Gender as a gateway to inclusion of all</p>
                        <p className="atw-summary">Tagline for blog one Tagling for blog one</p>
                        <p className="atw-medium">Medium <br /><span className="atw-dnr">Aug 5 | 5 min</span></p>
                    </div>
                    <div className="col-5 text-center">
                        <img src={atw} alt="" width="90%"/>
                    </div>
                </div>
                <div className="row pl-lg-5 pl-none pb-3">
                    <div className="col-7">
                        <p className="atw-heading">Gender as a gateway to inclusion of all</p>
                        <p className="atw-summary">Tagline for blog one Tagling for blog one</p>
                        <p className="atw-medium">Medium <br /><span className="atw-dnr">Aug 5 | 5 min</span></p>
                    </div>
                    <div className="col-5 text-center">
                        <img src={atw} alt="" width="90%"/>
                    </div>
                </div>
                <div className="row pl-lg-5 pl-none pb-3">
                    <div className="col-7">
                        <p className="atw-heading">Gender as a gateway to inclusion of all</p>
                        <p className="atw-summary">Tagline for blog one Tagling for blog one</p>
                        <p className="atw-medium">Medium <br /><span className="atw-dnr">Aug 5 | 5 min</span></p>
                    </div>
                    <div className="col-5 text-center">
                        <img src={atw} alt="" width="90%"/>
                    </div>
                </div>
                <a href="/" style={{textDecoration : "none"}}>
                <div className="row first-card mb-3">
                    <p className="first-card-heading pt-4">Have something to share? <br />Get in touch! <p className="first-card-summary pt-3">We would love to hear your story. </p></p>
                    
                </div>
                </a>
                <a href="/" style={{textDecoration : "none"}}>
                <div className="row second-card mb-4">
                    <p className="second-card-heading pt-4">Sign up!<p className="second-card-summary pt-3">For our blogs</p></p>
                    
                </div>
                </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Blogs;