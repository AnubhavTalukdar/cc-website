import React, {useState, useEffect} from "react";
import { useParams } from "@reach/router";
import { BASE_URL } from "../config/url";
import axios from "axios"
import atw from "../assets/img/atw.png"

function IndividualBlog(){

    const {blogId} = useParams()

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [author, setAuthor] = useState("")
    const [authorDesg, setAuthorDesg] = useState("")
    const [date, setDate] = useState("")

    useEffect(() => { 
        axios.get(`${BASE_URL}/blogs/${blogId}`)
        .then(response => {
            console.log(response.data)
            setTitle(response.data.Title)
            setDesc(response.data.Description)
            setAuthor(response.data.Author)
            setAuthorDesg(response.data.Author_Designation)
            setDate(response.data.Date_of_Publishing)
            setImg(`${BASE_URL}${response.data.Placeholder_Image.url}`)
            
        })

    }, [])

    console.log(img)

    return(
        <>
        <div className="row container-fluid pt-4 pb-lg-5 pl-none pb-3 custom-blog-padding">
            <div className="col-lg-8 col-sm-12 pl-lg-5 pl-none">
                <h4 className="individual-blog-heading">{title}</h4>
                <br />
                <div className="text-center">
                <img src={img} className="individual-blog-img"/>
                </div>
                <br />
                <br />
                <p className="individual-blog-description">{desc}</p>
                <br />
                <h4 className="individual-blog-author">{author}</h4>
                <h4 className="individual-blog-designation">{authorDesg}</h4>
                <br />
                <h4 className="individual-blog-designation">Published On : {date}</h4>

            </div>
           
            <div className="col-lg-4 col-sm-12 pl-lg-5 pl-none mt-3 mt-lg-none">
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
                </div>
            </div>
        </div>
        <section className="container-fluid pr-0 pt-2 pb-5 pl-0 pl-lg-4 faq-section2">
            <div className="col-12 text-center text-lg-left">
              <span className="faq-section2-text">Did you find our blogs interesting ? </span>
            </div>
            
            <div className="col-12 text-center text-lg-left">
              <span className="faq-section2-text"><a href="/contactus/#contactUsForm" style={{color: '#860000'}}>Sign Up</a> for our blog !</span>
            </div>
           


        </section>
        </>
    )
}

export default IndividualBlog;