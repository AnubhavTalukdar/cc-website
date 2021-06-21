/* jsx-a11y/iframe-has-title */
import React, {useState, useEffect} from "react";
import Ashoka from "../assets/img/ashoka.png"
import Welham from "../assets/img/welham.png"
import Trucup from "../assets/img/trucup.png"
import Nipman from "../assets/img/nipman.png"
import Card1 from "../assets/img/card1.jpg"
import Card2 from "../assets/img/card2.jpg"
import SideArrow from "../assets/img/sidearrow.PNG"
import BlogSecond from "../assets/img/blog.png"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BASE_URL } from "../config/url";
import axios from "axios"
var arraySort = require('array-sort');

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Homepage(){
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
  
  
    const handleClose = () => {
      setOpen(false);
    };

    const [blogs, setBlogs] = useState([])

    useEffect(() => { 
        axios.get(`${BASE_URL}/blogs`)
        .then(response => {
            setBlogs(arraySort(response.data, "id"))
        })

    }, [])

    let last = blogs.slice(-1)

    let lastf = blogs.slice(-5).reverse()
    console.log(last)
    console.log(lastf)
    return(
        <>
            <div>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <div className={classes.paper}>
                <h4 id="transition-modal-title">The website is currently under construction!</h4>
                <br />
                <br />
                <div className="text-right">
                    <button className="btn btn-info" onClick={handleClose}>Continue to site</button>
                </div>
            </div>
            </Fade>
        </Modal>
        </div>    
        <div className="homepage-section1 container-fluid px-0">
        
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="carousel-dots active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="carousel-dots"aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="carousel-dots" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src={BlogSecond} className="carousel-img d-block w-100" alt="carousel-img-1" />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={BlogSecond} className="carousel-img d-block w-100" alt="carousel-img-2" />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={BlogSecond} className="carousel-img d-block w-100" alt="carousel-img-3" />
    </div>
  </div>
  
</div>

        </div>
        <div className="homepage-section2 container-fluid px-0 mt-5">
            <div className="row container-fluid">
                <div className="col-lg-7 pt-3">
                    { last.map((b) =>(
                        <div className="row pl-5 container-fluid">
                        <div className="col-lg-5 col-sm-12 px-0">
                           <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}> <img src={BASE_URL + b.Placeholder_Image.url} alt="" width="100%"/></a>
                        </div>
                        <div className="col-lg-7 col-sm-12 pl-lg-5 pl-md-0 pl-0 pt-3 pt-lg-0 pb-0 pb-lg-4">
                           <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}> <p className="homepage-section2-highlight-heading">{b.Title}</p></a>

                           <p className="homepage-section2-highlight-read">{b.Summary}</p>

                           <p className="homepage-section2-highlight-author">{b.Author} <br/><p className="homepage-section2-highlight-read">{b.Date_of_Publishing} | {b.Reading_Time} min read</p></p>
                        </div> 
        
                        </div>

                    ))}
                    
                    <div className="row pl-5 container-fluid">
                    {lastf.slice(1,5).map((b) =>(
                        <div className="col-lg-6 pt-2 col-sm-12 px-0">
                        <div className="row px-0">
                        <div className="col-4">
                            <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}> <img className="homepage-section2-blog-img" src={BASE_URL + b.Placeholder_Image.formats.thumbnail.url} alt="blog-img"/></a>
                        </div>
                        <div className="col-8">
                            <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}> <p className="homepage-section2-blog-heading">{b.Title}</p></a>
                            <p className="homepage-section2-blog-subheading">{b.Summary}</p>
                            <p className="homepage-section2-blog-author">{b.Author}<br /><span className="homepage-section2-blog-read">{b.Date_of_Publishing} | {b.Reading_Time} min read</span></p>
                        </div>
                        </div>
                    </div>

                    ))}
                    </div>
                    
                    
                </div>
                <div className="col-lg-5 pt-3 pl-5">
                    <p className="homepage-section2-question-heading">Is the following situation an example of mansplaining?</p>
                    <p className="homepage-section2-question-subheading1">A male director tells his cameraperson to capture women’s narratives on periods in a certain way. Being a woman, the cameraperson feels she knows how to capture the story as she knows about periods better than the director. </p>
                    <p className="homepage-section2-question-subheading2">Is the director mansplaining?</p>
                    <br />
                    <div className="row container-fluid">
                    <div className="col-6 px-0">
                    <input type="radio" id="op1" name="response"/>
                    &nbsp;&nbsp;
                    <label className="homepage-section2-question-label">Yes, he is</label>
                    </div>
                    <div className="col-6 px-0">
                    <input type="radio" id="op2" name="response"/>
                    &nbsp;&nbsp;
                    <label className="homepage-section2-question-label">No, he is not</label>
                    </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="row container-fluid">
                   
                    <div className="col-12 px-0">
                    <button className="homepage-section2-question-button">Submit</button>
                    </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

        </div>
        <div className="homepage-section3 container-fluid px-0">
            <div className="row container-fluid">
                <div className="col-12">
                    <h1 className="hompage-section3-heading pl-3">Our Offerings</h1><br />
                    <p className="hompage-section3-subheading1 pl-4">We all wear several hats. <br /><span className="hompage-section3-subheading2">Choose the capacity in which you are visiting us:</span></p> 
                </div>
            </div>
            <br />
            <div className="row container-fluid pl-5 pr-lg-3 pr-none homepage-section3-cards">
                <div className="col-lg-4 col-sm-12 mt-5">
                    <div className="homepage-section3-card" />
                    <div className="homepage-section3-cardbottom text-center"><p className="homepage-section3-cardbottomtext pt-3">Become a growth ally now!</p></div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-5">
                    <div className="homepage-section3-card" />
                    <div className="homepage-section3-cardbottom text-center"><p className="homepage-section3-cardbottomtext pt-3">Become a growth ally now!</p></div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-5">
                    <div className="homepage-section3-card" />
                    <div className="homepage-section3-cardbottom text-center"><p className="homepage-section3-cardbottomtext pt-3">Become a growth ally now!</p></div>
                </div>
            </div>
            <div className="row container-fluid pl-5 pr-lg-5 pr-none mt-5 homepage-section3-end justify-content-center">
                <div className="col-lg-4 col-sm-12 homepage-section3-endbutton">
                    <p className="homepage-section3-endbuttontext text-center pt-2">Read more about our products</p>
                </div>

            </div> 
            <br />
        <br />
        <br />
        </div>
       
        <div className="homepage-section4 container-fluid px-0">
        
        <div className="row container-fluid homepage-section4-row pl-5">
            <div className="col-lg-5 col-sm-12 pl-lg-5 pl-none">
                <p className="homepage-section4-text1">"Our team at Trucup found CIELead Untapped analysis report highly useful. After having gone through many psychometric tests in my professional career, I thought I had a good understanding of my unconscious bias. However, Untapped brought a lot of internalized opinions to the surface. The tools provided by CIELead helped us design a better communication strategy to reach out to diverse customer segments."</p>
                <p className="homepage-section4-text2">Alakshi Tomar <br /><span className="homepage-section4-text3">Cofounder, TruCup</span></p>
                <p className="text-center"><img src={Ashoka} alt="ashoka-img" width="52px" height="61px"/> <img src={Welham} alt="welham-img" width="119px" height="61px"/> <img src={Trucup} alt="trucup-img" width="96px" height="96px"/> <img src={Nipman} alt="nipman-img" width="61px" height="61px" style={{backgroundColor : "#707070"}}/></p>
                
            </div>
            <div className="col-lg-7 col-sm-12 pl-lg-5 pl-none d-flex justify-content-center">
                <iframe width="512" height="288"
                src="https://www.youtube.com/embed/dhm5lGtHqtM" title="youtube-video" style={{border : "10px solid white"}}>
                </iframe>
            </div>
        </div>
        
        </div>
        <div className="homepage-section5 container-fluid px-0">
            <br />
        </div>
        <div className="container-fluid px-0 homepage-section6 container-fluid px-0">
            <div className="row container-fluid pl-5">
            <br />
            <br />
            <div className="col-lg-6 col-md-12 col-sm-12">
                <div className="hompage-section6card ml-lg-5 ml-md-5 ml-3 px-3 pt-3 mt-lg-none"><img src={Card1} alt="card1-img" width="100%"/></div>
                <div className="hompage-section6cardbottom d-flex ml-lg-5 ml-md-5 ml-3 px-3 pt-3">
                <p className="hompage-section6cardbottom-heading">Share your story! <br /><p className="hompage-section6cardbottom-subheading">Become a contributor. One paragraph about 
                why work with us One paragraph about why </p></p>
                <img className="sidearrow mt-3" src={SideArrow} alt="side-arrow" />
                
                </div>
                <br />

            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="hompage-section6card ml-lg-5 ml-md-5 ml-3 px-3 pt-3 mt-lg-none"><img src={Card2} alt="card2-img" width="100%"/></div>
            <div className="hompage-section6cardbottom d-flex ml-lg-5 ml-md-5 ml-3 px-3 pt-3">
                <p className="hompage-section6cardbottom-heading">Work with us! <br/><p className="hompage-section6cardbottom-subheading">Become a contributor. One paragraph about 
                why work with us One paragraph about why </p></p>
                <img className="sidearrow mt-3" src={SideArrow} alt="side-arrow" />
                
            </div>
            <br />
            </div>
            </div>
            <br />
            <br />
        </div>


        
        </>
    );
}

export default Homepage;