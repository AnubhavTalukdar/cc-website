import React, {useState, useEffect} from "react";
import { useParams } from "@reach/router";
import { BASE_URL } from "../config/url";
import axios from "axios"

function IndividualBlog(){

    const {blogId} = useParams()

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [author, setAuthor] = useState("")
    const [authorDesg, setAuthorDesg] = useState("")
    const [date, setDate] = useState("")
    const [aroundTheWebs, setAroundTheWebs] = useState([])
    const [visible, setVisible] = useState(5)
    const [length, setLength] = useState(0)

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
    // eslint-disable-next-line

    axios.get(`${BASE_URL}/around-the-webs`)
        .then(response => {
            setAroundTheWebs(response.data)
            setLength(response.data.length)
        })
    // eslint-disable-next-line
    }, [])

    const loadMore = (e) => {
        setVisible((prevValue) => prevValue + 3)
    }


    return(
        <>
        <div className="row container-fluid pt-4 pb-lg-5 pl-none pb-3 custom-blog-padding">
            <div className="col-lg-8 col-sm-12 pl-lg-5 pl-none">
                <h4 className="individual-blog-heading">{title}</h4>
                <br />
                <div className="text-center">
                <img src={img} alt={"individual-blog-picture"+blogId} className="individual-blog-img"/>
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
           
            <div className="col-lg-4 col-sm-12 pl-lg-5 pl-none mt-5 mt-lg-none">
                <div className="row">
                
                <h2 className="our-blogs-heading2-small pl-lg-5 pl-none">THIS WEEK</h2>
                <h2 className="our-blogs-heading2 pl-lg-5 pl-none">Around the web</h2>
                <h2 className="our-blogs-heading2-last pl-lg-5 pl-none pb-lg-4 pb-3">A curated list of articles from around the web, that drew our attention this week.</h2>
                { aroundTheWebs.slice(0,visible).map((a)=>(
                     <div className="row pl-lg-5 pl-none pb-3">
                     <div className="col-7">
                         <p className="atw-heading"><a href={a.Article_Link} target="_blank" rel="noopener noreferrer" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}>{a.Title} </a></p>
                         <p className="atw-summary">{a.Description}</p>
                         <p className="atw-medium">{a.Website_Name}<br /><span className="atw-dnr">{a.Date} | {a.Reading_Time} mins</span></p>
                     </div>
                     <div className="col-5 text-center left-padding-remover right-padding-remover">
                     <a href={a.Article_Link} target="_blank" rel="noopener noreferrer" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}><img src={BASE_URL + a.Image.formats.thumbnail.url} alt="" width="100%"/></a>
                     </div>
                 </div>
                ))
                }
                <br />
                <center>
                    <button type="button" class="load-more-button mr-lg-none mr-md-3 mr-3 mb-4" onClick={loadMore} style={{display : visible >= length || length <= 5 ? "none": "block"}}>Load More</button>
                </center>
                </div>
            </div>
        </div>
        <section className="container-fluid pr-0 pt-2 pb-5 pl-0 pl-lg-4 faq-section2">
            <div className="col-12 text-center text-lg-left">
              <span className="faq-section2-text">Did you find our blogs interesting? </span>
            </div>
            
            <div className="col-12 text-center text-lg-left">
              <span className="faq-section2-text"><a href="/contactus/#contactUsForm" style={{color: '#860000'}}>Sign Up</a> for our blog!</span>
            </div>
           


        </section>
        </>
    )
}

export default IndividualBlog;