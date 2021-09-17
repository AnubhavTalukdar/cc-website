import React, {useState, useEffect} from "react";
import Carousel from "react-elastic-carousel"
import { BASE_URL } from "../config/url";
import axios from "axios"
var arraySort = require('array-sort');

function AboutUs(){

    const [topPara, setTopPara] = useState("")
    const [mission, setMission] = useState("")
    const [vision, setVision] = useState("")
    const [team, setTeam] = useState([])
    const [testimonials, setTestimonials] = useState([])
    const [media, setMedia] = useState([])
    

    const breakPoints = [
        { width: 1, itemsToShow: 1,itemsToScroll: 1 },
        { width: 550, itemsToShow: 2,itemsToScroll: 2 },
        { width: 768, itemsToShow: 3,itemsToScroll: 3 },
        { width: 1200, itemsToShow: 3,itemsToScroll: 3},
      ];

    const breakPoints1 = [
        { width: 1, itemsToShow: 1,itemsToScroll: 1 },
        { width: 550, itemsToShow: 1,itemsToScroll: 1 },
        { width: 768, itemsToShow: 1 ,itemsToScroll: 1},
        { width: 1200, itemsToShow: 1,itemsToScroll: 1},
      ];

      const breakPoints2 = [
        { width: 1, itemsToShow: 1,itemsToScroll: 1 },
        { width: 550, itemsToShow: 3,itemsToScroll: 3 },
        { width: 768, itemsToShow: 4,itemsToScroll: 4 },
        { width: 1200, itemsToShow: 4,itemsToScroll: 4 },
      ];

    useEffect(() => { 
        window.scroll(0,0)
        axios.get(`${BASE_URL}/website-texts`)
        .then(response => {
            setTopPara(response.data.About_Us_1)
            setVision(response.data.Vision)
            setMission(response.data.Mission)
        })

        axios.get(`${BASE_URL}/our-teams`)
        .then(response => {
            setTeam(arraySort(response.data, "id"))
        })

        axios.get(`${BASE_URL}/testimonials`)
        .then(response => {
            setTestimonials(arraySort(response.data, "id"))
        })

        axios.get(`${BASE_URL}/media-insertions`)
        .then(response => {
            setMedia(arraySort(response.data, "id"))
        })

    }, [])

    return(
        <div>
            <section className="container-fluid pt-5 pb-5 pl-5 about-section1">
                <div className="col-12">
                <span className="about-section1-text">Welcome to<br/>our <span style={{color: '#860000'}}>virtual</span> workspace !</span>
                </div>
            </section>
            <div className="row about-section2 container-fluid justify-content-center">
            <div className="col-lg-10 pl-none pb-lg-5 pb-3">
                <p className="about-section2-text pt-lg-none pt-md-none pt-5">
                {topPara}
                </p>
            </div>
            </div>
            <div className="row about-section3 container-fluid justify-content-center pb-5 pt-5">
              
                <div className="col-lg-6 col-sm-12 mt-lg-0 mt-3">
                    <h5 className="text-center" style={{color: '#860000'}}>Our Vision</h5>
                    <p className="about-section3-text text-justify">
                    {vision}    
                    </p>
                </div>
                
                <div className="col-lg-6 col-sm-12 mt-lg-0 mt-3">
                    <h5 className="text-center" style={{color: '#860000'}}>Our Mission</h5>
                    <p className="about-section3-text text-justify">
                    {mission}    
                    </p>
                </div>
            </div>
           <div className="about-section4 container-fluid pt-5 pb-5">
           <h1 className="about-section4-heading text-center">The Team</h1>
           <br />
                <center>
                <Carousel className="team" breakPoints={breakPoints}>
                    { team.map((t)=>(
                    <div className="team-card text-center">
                        <img src={BASE_URL + t.Image.formats.thumbnail.url} className="rounded-circle team-card-photo" alt="teammember" />
                        <h6 className="mt-5 team-card-heading">{t.Name}, {t.Designation}</h6>
                        <p className="team-card-desc pl-3 pr-3 text-justify mt-3">{t.Description}</p>
                    </div>
                    ))}
                    
                </Carousel>
                </center>
            </div>
            <div className="about-section6 container-fluid pt-5 pb-5">
            <h1 className="about-section6-heading text-center">A powerful ambition with efforts of many!</h1>
            <br />
            <br />
                <center>
                <Carousel className="testimonial" breakPoints={breakPoints1}>
                    { testimonials.map((t)=>(
                    <div className="row giants-card">
                        <div className="col-lg-4 col-sm-12 text-center">
                            <img src={BASE_URL + t.Image.formats.thumbnail.url} className="rounded-circle giants-card-photo" alt="giants" />
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <h5 className="mt-1 giants-card-heading text-center text-lg-left">{t.Name}, {t.Designation}</h5>
                            <p className="about-section6-desc text-justify mt-3">{t.Testimonial}</p>
                        </div>
                    </div>
                    )) 
                    }
                </Carousel>
                </center>
                
            </div>
            <div className="about-section7 container-fluid pt-5 pb-5">
            <h1 className="about-section7-heading text-center">Media Insertions</h1>
           <br />
           <br />
                <Carousel breakPoints={breakPoints2}>
                    { media.map((m)=>(
                    <div className="media-card pl-3 pr-3">
                        <img src={BASE_URL + m.Image.formats.thumbnail.url} className="media-card-photo" alt="media" />
                        <h6 className="mt-5 media-card-desc">{m.Description}</h6>
                        <a href={m.Link} target="_blank" rel="noopener noreferrer" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}><button className="mt-3 media-card-button btn btn-light">View More</button></a>
                    </div>  
                    ))}
                    
                </Carousel>
            </div>
        </div>
    )
}


export default AboutUs;