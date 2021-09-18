/* jsx-a11y/iframe-has-title */
import React, {useState, useEffect} from "react";
import Carousel1 from "react-elastic-carousel"
import Card1 from "../assets/img/card1.jpg"
import Card2 from "../assets/img/card2.jpg"
import C1 from "../assets/img/c1.JPG"
import C2 from "../assets/img/c2.JPG"
import C3 from "../assets/img/c3.JPG"
import SideArrow from "../assets/img/sidearrow.PNG"
import HomepagePicture from "../assets/img/HomepagePicture.jpg"
import HomepagePicture1 from "../assets/img/HomepagePicture1.jpg"
import HomepagePicture2 from "../assets/img/HomepagePicture2.jpg"
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { BASE_URL } from "../config/url";
import axios from "axios"
import ProgressBar from 'react-bootstrap/ProgressBar'
import Cookies from 'js-cookie'
import {Link, navigate} from "@reach/router"
import Carousel from 'react-bootstrap/Carousel'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
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
   
    const [id, setId] = useState(0)
    const [question, setQuestion] = useState("")
    const [questionDesc, setQuestionDesc] = useState("")
    const [subQuestion, setSubQuestion] = useState("")
    const [optionA, setOptionA] = useState("")
    const [optionB, setOptionB] = useState("")
    const [optionC, setOptionC] = useState("")
    const [optionD, setOptionD] = useState("")
    const [responseA, setResponseA] = useState(0)
    const [responseB, setResponseB] = useState(0)
    const [responseC, setResponseC] = useState(0)
    const [responseD, setResponseD] = useState(0)
    const [op1, setOp1] = useState(0)
    const [op2, setOp2] = useState(0)
    const [op3, setOp3] = useState(0)
    const [op4, setOp4] = useState(0)
    const [outputA, setOutputA] = useState(0)
    const [outputB, setOutputB] = useState(0)
    const [outputC, setOutputC] = useState(0)
    const [outputD, setOutputD] = useState(0)
    const [formTitle, setFormTitle] = useState("")
    const [formLink, setFormLink] = useState("")
    const [card1head, setCard1head] = useState("")
    const [card2head, setCard2head] = useState("")
    const [card3head, setCard3head] = useState("")
    const [card1desc, setCard1desc] = useState("")
    const [card2desc, setCard2desc] = useState("")
    const [card3desc, setCard3desc] = useState("")

    const [clients, setClients] = useState([])

    const Total = outputA + outputB + outputC + outputD

    const breakPoints = [
        { width: 1, itemsToShow: 1,itemsToScroll: 1 },
        { width: 350, itemsToShow: 2,itemsToScroll: 2 },
        { width: 768, itemsToShow: 4,itemsToScroll: 4 },
        { width: 1200, itemsToShow: 4,itemsToScroll: 4 },
      ];

    const submit = (e) => {
        e.preventDefault()
        if(optionC === "" && optionD === ""){
            axios.put(`${BASE_URL}/home-page-quizs/${id}`, {Response_A: responseA+op1, Response_B: responseB+op2})
            .then(response => {
                console.log(response)

                setOutputA(response.data.Response_A)
                setOutputB(response.data.Response_B)

                var question= document.querySelector("#question");
                question.style.display= "none";

                var responses= document.querySelector("#responses");
                responses.style.display= "block";

                Cookies.set("QuizId", id, { expires: 100 })
                Cookies.set("Quiz", "Yes" , { expires: 100 })
            })
        }
        else{
            axios.put(`${BASE_URL}/home-page-quizs/${id}`, {Response_A: responseA+op1, Response_B: responseB+op2, Response_C: responseC+op3, Response_D: responseD+op4})
            .then(response => {
                console.log(response)

                setOutputA(response.data.Response_A)
                setOutputB(response.data.Response_B)
                setOutputC(response.data.Response_C)
                setOutputD(response.data.Response_D)

                var question= document.querySelector("#question");
                question.style.display= "none";

                var responses= document.querySelector("#responses");
                responses.style.display= "block";

                Cookies.set("QuizId", id, { expires: 100 })
                Cookies.set("Quiz", "Yes" , { expires: 100 })
            })
        }
        
    }

    const handleClose = () => {
      setOpen(false);
    };

    const [blogs, setBlogs] = useState([])

    const changeLooking = (e) => {
        const value = e.target.value;
        if(value === "1"){
            Cookies.set("Category","Individual")
            navigate("/freeresources")
            
        }
        else if(value === "2"){
            Cookies.set("Category","Teams")
            navigate("/freeresources")
            
        }
        else if(value === "3"){
            Cookies.set("Category","Organisations")
            navigate("/freeresources")
        }
        else if(value === "4"){
            window.location.href = "/products/#product"
        }
        else if(value === "5"){
            window.location.href = "/products/#product"
        }
        else if(value === "6"){
            window.location.href = "/products/#product"
        }
        else if(value === "7"){
            window.location.href = "/contactus/#contactUsForm"
        }
        else if(value === "8"){
            window.location.href = "/about/#team"
        }
       
    }

    useEffect(() => { 
        window.scroll(0,0)
        axios.get(`${BASE_URL}/blogs`)
        .then(response => {
            setBlogs(arraySort(response.data, "Date_of_Publishing"))
        })

        axios.get(`${BASE_URL}/home-page-quizs`)
        .then(response => {
            console.log(response.data)
            var quizs = arraySort(response.data, "id")
            console.log(quizs[quizs.length -1].id)
            setId(quizs[quizs.length -1].id)
            setQuestion(quizs[quizs.length -1].Question)
            setQuestionDesc(quizs[quizs.length -1].Question_Description)
            setSubQuestion(quizs[quizs.length -1].Sub_Question)
            setOptionA(quizs[quizs.length -1].Option_A)
            setOptionB(quizs[quizs.length -1].Option_B)

            if(quizs[quizs.length -1].Option_C === null && quizs[quizs.length -1].Option_D === null){
                setOptionC("")
                setOptionD("")
            }
            else{
                setOptionC(quizs[quizs.length -1].Option_C)
                setOptionD(quizs[quizs.length -1].Option_D)
            }

            setResponseA(quizs[quizs.length -1].Response_A)
            setResponseB(quizs[quizs.length -1].Response_B)
            setResponseC(quizs[quizs.length -1].Response_C)
            setResponseD(quizs[quizs.length -1].Response_D)

            if(quizs[quizs.length -1].Form_Title !== null){
                setFormTitle(quizs[quizs.length -1].Form_Title)
                setFormLink(quizs[quizs.length -1].Form_Link)
            }

            setOutputA(quizs[quizs.length -1].Response_A)
            setOutputB(quizs[quizs.length -1].Response_B)
            setOutputC(quizs[quizs.length -1].Response_C)
            setOutputD(quizs[quizs.length -1].Response_D)
        })

        axios.get(`${BASE_URL}/website-texts`)
        .then(response =>{
            setCard1head(response.data.Card1_Heading)
            setCard2head(response.data.Card2_Heading)
            setCard3head(response.data.Card3_Heading)
            setCard1desc(response.data.Card1_Desc)
            setCard2desc(response.data.Card2_Desc)
            setCard3desc(response.data.Card3_Desc)
            
        })

        axios.get(`${BASE_URL}/our-clients`)
        .then(response => {
            setClients(arraySort(response.data, "id"))
        })

    }, [])

    let last = blogs.slice(-1)

    let lastf = blogs.slice(-5).reverse()


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
            <Carousel>
                <Carousel.Item interval={4000}><img src={HomepagePicture} className="carousel-img d-block w-100" alt="carousel-img-2" />
                <div className="img-writeup1"><h4 className="img-writeup-text">Create a culture where</h4></div><br />
                <div className="img-writeup2"><h4 className="img-writeup-text">diversity thrives</h4></div>
                <div className="img-writeup3">
                <select className="form-select homepage-select" onChange={changeLooking}>
                    <option value="" selected disabled>I am looking for...</option>
                    <option value="1" >Free DEI resources for individuals</option>
                    <option value="2">Free DEI resources for team leaders</option>
                    <option value="3">Free DEI resources for organisations</option>
                    <option value="4">Services to review your organisation culture</option>
                    <option value="5">Sessions to build awareness</option>
                    <option value="6">Learning and development training</option>
                    <option value="7">Have an idea ?</option>
                    <option value="8">Passionate about DEI, want to join the community ? </option>
                </select>
                </div>
                </Carousel.Item>
                <Carousel.Item interval={4000}><img src={HomepagePicture1} className="carousel-img d-block w-100" alt="carousel-img-2" /><div className="img-writeup1" style={{display: 'none'}}><h4 className="img-writeup-text">Create a culture where</h4></div><br /><div className="img-writeup2" style={{display: 'none'}}><h4 className="img-writeup-text">diversity thrives</h4></div></Carousel.Item>
                <Carousel.Item interval={4000}><img src={HomepagePicture2} className="carousel-img d-block w-100" alt="carousel-img-2" /><div className="img-writeup1" style={{display: 'none'}}><h4 className="img-writeup-text">Create a culture where</h4></div><br /><div className="img-writeup2" style={{display: 'none'}}><h4 className="img-writeup-text">diversity thrives</h4></div></Carousel.Item>
            </Carousel>
        
        </div>
        
        <div className="homepage-section2 container-fluid px-0 mt-lg-5 mt-md-5 mt-3 px-lg-3 px-none">
            
            <div className="row container-fluid right-padding-remover">
                <div className="col-lg-7 pl-md-5 pl-0 right-padding-remover pt-3">
                    { last.map((b) =>(
                        <div className="row pl-5 container-fluid highlight-padding-remover mb-3">
                        
                        <div className="col-lg-12 col-md-12 col-sm-6 pl-md-0 pl-0 pt-3 pt-lg-0 pb-0 pb-lg-2">
                        <a className="row highlight-cards" href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}>
                            <div className="col-lg-12 col-4 d-lg-none d-block thumbnail-margin-remover">
                                <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}> <img className="homepage-section2-blog-img" src={BASE_URL + b.Placeholder_Image.formats.thumbnail.url} alt="blog-img"/></a>
                            </div>
                            <div className="col-lg-12 col-8">
                            <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}> <p className="homepage-section2-highlight-heading">{b.Title}</p></a>

                            <p className="homepage-section2-highlight-read">{b.Summary}</p>

                            <p className="homepage-section2-highlight-author">{b.Author} <br/><p className="homepage-section2-highlight-read">{b.Date_of_Publishing} | {b.Reading_Time} min read</p></p>
                            </div>
                        </a>
                        </div>
                        
        
                        </div>

                    ))}
                    
                    <div className="row pl-3 container-fluid highlight-padding-remover">
                    {lastf.slice(1,5).map((b) =>(
                        <div className="col-lg-6 pt-2 mb-3 col-sm-12 ">
                        <a className="row ml-1 highlight-cards" href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}>
                        <div className="col-4 thumbnail-margin-remover">
                            <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}> <img className="homepage-section2-blog-img" src={BASE_URL + b.Placeholder_Image.formats.thumbnail.url} alt="blog-img"/></a>
                        </div>
                        <div className="col-8">
                            <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}> <p className="homepage-section2-blog-heading">{b.Title}</p></a>
                            <p className="homepage-section2-blog-subheading">{b.Summary}</p>
                            <p className="homepage-section2-blog-author">{b.Author}<br /><span className="homepage-section2-blog-read">{b.Date_of_Publishing} | {b.Reading_Time} min read</span></p>
                        </div>
                        </a>
                    </div>

                    ))}
                    </div>
                    
                    
                </div>
                <div className="col-lg-5 pt-3 pl-5" id="question" style={{display : ((Cookies.get("QuizId") !== id.toString() || Cookies.get("QuizId") === undefined)) ? "block" : "none"}}>
                    <form onSubmit={submit}>
                    <p className="homepage-section2-question-heading">{question}</p>
                    <p className="homepage-section2-question-subheading1">{questionDesc}</p>
                    <p className="homepage-section2-question-subheading2">{subQuestion}</p>
                    <br />
                    { optionC === "" && optionD === "" ?
                    <>
                    <div className="row container-fluid">
                        <div className="col-6 px-0">
                        <input type="radio" id="op1" name="response" onClick={()=>{setOp1(1);setOp2(0);setOp3(0);setOp4(0);}} required/>
                        &nbsp;&nbsp;
                        <label className="homepage-section2-question-label">{optionA}</label>
                        </div>
                        <div className="col-6 px-0">
                        <input type="radio" id="op2" name="response" onClick={()=>{setOp1(0);setOp2(1);setOp3(0);setOp4(0);}} required/>
                        &nbsp;&nbsp;
                        <label className="homepage-section2-question-label">{optionB}</label>
                        </div>
                    </div>
                    </> :
                    <>
                    <div className="row container-fluid">
                        <div className="col-6 px-0">
                        <input type="radio" id="op1" name="response" onClick={()=>{setOp1(1);setOp2(0);setOp3(0);setOp4(0);}} required/>
                        &nbsp;&nbsp;
                        <label className="homepage-section2-question-label" >{optionA}</label>
                        </div>
                        <div className="col-6 px-0">
                        <input type="radio" id="op2" name="response" onClick={()=>{setOp1(0);setOp2(1);setOp3(0);setOp4(0);}} required/>
                        &nbsp;&nbsp;
                        <label className="homepage-section2-question-label" >{optionB}</label>
                        </div>
                    </div>
                    <div className="row container-fluid">
                        <div className="col-6 px-0">
                        <input type="radio" id="op3" name="response" onClick={()=>{setOp1(0);setOp2(0);setOp3(1);setOp4(0);}} required/>
                        &nbsp;&nbsp;
                        <label className="homepage-section2-question-label" >{optionC}</label>
                        </div>
                        <div className="col-6 px-0">
                        <input type="radio" id="op4" name="response" onClick={()=>{setOp1(0);setOp2(0);setOp3(0);setOp4(1);}} required/>
                        &nbsp;&nbsp;
                        <label className="homepage-section2-question-label" >{optionD}</label>
                        </div>
                    </div>
                    </>
                    }
                   
                    <br />
                    <br />
                    <br />
                    <div className="row container-fluid">
                   
                    <div className="col-12 px-0">
                    <button className="homepage-section2-question-button">Submit</button>
                    </div>
                    </div>
                    </form>
                </div>
                <div className="col-lg-5 pt-3 pl-4 my-auto" id="responses" style={{display : ((Cookies.get("Quiz") === "Yes") && (Cookies.get("QuizId") === id.toString())) ? "block" : "none"}}>
                    <p className="homepage-section2-question-subheading2 text-center">Thank you for participating!</p>
                    <br />
                    <ProgressBar style={{height : "50px"}}>
                        <ProgressBar  variant="success" now={((outputA)/(Total))*100} label={`A - ${(((outputA)/(Total))*100).toFixed(1)}%`} />
                        <ProgressBar  variant="info" now={((outputB)/(Total))*100} label={`B - ${(((outputB)/(Total))*100).toFixed(1)}%`} />
                        <ProgressBar  variant="warning" now={((outputC)/(Total))*100} label={`C - ${(((outputC)/(Total))*100).toFixed(1)}%`} />
                        <ProgressBar  variant="danger" now={((outputD)/(Total))*100} label={`D - ${(((outputD)/(Total))*100).toFixed(1)}%`} />
                    </ProgressBar>
                    <br/>
                    { optionC === "" && optionD === "" ?
                    <>
                    <div className="row container-fluid">
                        <div className="col-6 px-0">
                            <label className="homepage-section2-question-label" >A: {optionA}</label>
                        </div>
                        <div className="col-6 px-0">
                            <label className="homepage-section2-question-label" >B: {optionB}</label>
                        </div>
                    </div>
                    </> :
                    <>
                    <div className="row container-fluid">
                        <div className="col-6 px-0">
                            <label className="homepage-section2-question-label" >A: {optionA}</label>
                        </div>
                        <div className="col-6 px-0">
                            <label className="homepage-section2-question-label" >B: {optionB}</label>
                        </div>
                    </div>
                    <div className="row container-fluid">
                        <div className="col-6 px-0">
                            <label className="homepage-section2-question-label" >C: {optionC}</label>
                        </div>
                        <div className="col-6 px-0">
                            <label className="homepage-section2-question-label" >D: {optionD}</label>
                        </div>
                    </div>
                    </>
                    }
                    <br />
                    { formTitle !== "" ?
                    <>
                    <p className="homepage-section2-question-subheading2 text-center">{formTitle}</p>
                    
                    <center>
                    <a href={formLink} rel="noopener noreferrer" target="_blank">Click here!</a>
                    </center>
                    </> :
                    null 
                    }
                    
                </div>
            </div>
            <br />
            <br />

        </div>
        <div className="homepage-section3 container-fluid px-0">
            <div className="row container-fluid">
                <div className="col-12 pt-lg-0 pt-4">
                    <h1 className="hompage-section3-heading pl-3">Our Offerings</h1><br />
                    <p className="hompage-section3-subheading1 pl-4">We all wear several hats. <br /><span className="hompage-section3-subheading2">Choose the capacity in which you are visiting us:</span></p> 
                </div>
            </div>
            <div className="row container-fluid homepage-section3-padding pr-lg-0 pr-none mt-3 homepage-section3-cards">
                <div className="col-lg-4 col-sm-12 mt-lg-5 mt-3">
                    <div className="homepage-section3-card">
                        <img src={C1} className="c1-img" alt="C1" />
                        <center>
                            <h4 className="homepage-section3-card-heading pt-1">{card1head}</h4>
                        </center>
                        <p className="homepage-section3-card-points pt-1 pl-4 pr-4"><ReactMarkdown remarkPlugins={[gfm]}>{card1desc}</ReactMarkdown></p>
                    </div>
                    <div className="homepage-section3-cardbottom text-center"><p className="homepage-section3-cardbottomtext pt-3">Become a growth ally now!</p></div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-5">
                    <div className="homepage-section3-card">
                        <img src={C2} className="c2-img" alt="C2" />
                        <center>
                            <h4 className="homepage-section3-card-heading">{card2head}</h4>
                        </center>
                        <p className="homepage-section3-card-points pt-1 pl-4 pr-4"><ReactMarkdown remarkPlugins={[gfm]}>{card2desc}</ReactMarkdown></p>
                    </div>
                    <div className="homepage-section3-cardbottom text-center"><p className="homepage-section3-cardbottomtext pt-3">Become a growth ally now!</p></div>
                </div>
                <div className="col-lg-4 col-sm-12 mt-5">
                    <div className="homepage-section3-card">
                        <img src={C3} className="c3-img" alt="C3" />
                        <center>
                            <h4 className="homepage-section3-card-heading">{card3head}</h4>
                        </center>
                        <p className="homepage-section3-card-points pt-1 pl-4 pr-4"><ReactMarkdown remarkPlugins={[gfm]}>{card3desc}</ReactMarkdown></p>
                    </div>
                    <div className="homepage-section3-cardbottom text-center"><p className="homepage-section3-cardbottomtext pt-3">Become a growth ally now!</p></div>
                </div>
            </div>
            <div className="row container-fluid pl-5 pr-lg-5 pr-none mt-5 homepage-section3-end justify-content-center">
                <div className="col-lg-4 col-sm-12 homepage-section3-endbutton">
                <Link to="/products" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}><p className="homepage-section3-endbuttontext text-center pt-2">Read more about our products</p></Link>
                </div>

            </div> 
            <br />
        <br />
        <br />
        </div>
       
        <div className="homepage-section4 container-fluid px-0">
        <div className="homepage-section4-row text-center d-lg-none d-md-none d-block">&#128945; &#128945; &#128945;</div>
        <br />
        <div className="row container-fluid homepage-section4-row pl-5">

            <div className="col-lg-5 col-sm-12 pl-lg-5 pl-none pb-lg-0 pb-4">
                <p className="homepage-section4-text1">"Our team at Trucup found CIELead Untapped analysis report highly useful. After having gone through many psychometric tests in my professional career, I thought I had a good understanding of my unconscious bias. However, Untapped brought a lot of internalized opinions to the surface. The tools provided by CIELead helped us design a better communication strategy to reach out to diverse customer segments."</p>
                <p className="homepage-section4-text2">Alakshi Tomar <br /><span className="homepage-section4-text3">Cofounder, TruCup</span></p>
                <Carousel1 breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}>
                { 
                clients.map((c)=>(
                    <div className="homepage-logo-slides text-center">
                            <img src={BASE_URL + c.Image.url} alt="logo-img" height="70%" />
                    </div>
                ))}
                </Carousel1>
                
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