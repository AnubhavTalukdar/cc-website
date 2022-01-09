import React , {useEffect, useState} from "react";
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { BASE_URL } from "../config/url";
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(17.5),
    fontFamily: "OpenSans",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.38,
    letterSpacing: "normal",
    textAlign: "left",
    color: "#707070"
  },
  answer: {
    fontSize: theme.typography.pxToRem(17.5),
    fontFamily: "OpenSans",
    fontWeight: "normal",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: 1.38,
    letterSpacing: "normal",
    textAlign: "left",
  },
  
}));


function FAQ(){

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [faqCategories, setFaqCategories] = useState([])
  const [faq, setFaq] = useState([])

  useEffect(() => { 
    window.scroll(0,0)
    axios.get(`${BASE_URL}/faq-categories`)
    .then(response => {
        setFaqCategories(response.data)
    })
    
    axios.get(`${BASE_URL}/faqs`)
    .then(response => {
        setFaq(response.data)
    })

    
}, [])



    return(
        <>
        <div>
        <section className="container-fluid pt-5 pb-5 pl-5 faq-section1">
            <div className="col-12">
              <span className="faq-section1-text">Hello, <br/>how can we <span style={{color: '#860000'}}>help</span> you ?</span>
            </div>

        </section>
        <div className="col-12 pt-5 pb-5">
        <Tab.Container id="left-tabs-example" defaultActiveKey="Company Overview">
        <Row className="justify-content-center">
          <Col lg={2} md={3}>
            <Nav variant="pills" className="flex-column">
              {
                faqCategories.map((f) => (
                  <Nav.Item>
                    <Nav.Link className="tab-link" eventKey={f.FAQ_Category}>{f.FAQ_Category}</Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Col>
          <Col lg={8} md={9}>
            <Tab.Content>
              {
                faqCategories.map((f) => (
                  <Tab.Pane eventKey={f.FAQ_Category}>
                      {
                        faq.map((q) => (
                         <>
                         {q.faq_category.FAQ_Category === f.FAQ_Category ?
                         <>
                         <Accordion expanded={expanded === 'panel'+q.id} onChange={handleChange('panel'+q.id)}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                          >
                            <Typography className={classes.heading}>{q.Question}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography color="textSecondary" className={classes.answer}>
                              {q.Answer}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>

                         </>
                         : 
                         null}
                         </>
                        ))
                      }
                  </Tab.Pane>
                ))
              }
              
            </Tab.Content>
          </Col>
        </Row>
        </Tab.Container>
        </div>
        <section className="container-fluid pr-0 pt-2 pb-5 pl-0 pl-lg-5 faq-section2">
            <div className="col-12 text-center text-lg-left">
              <span className="faq-section2-text">Did not find your answer? </span>
            </div>
            
            <div className="col-12 text-center text-lg-left">
              <span className="faq-section2-text"><a href="/contactus/#contactUsForm" style={{color: '#860000'}}>Send us</a>  your question!</span>
            </div>
            <div className="col-12 text-center text-lg-left">
              <span className="faq-section2-lasttext">We are always happy to help!</span>
            </div>


        </section>
        </div>
        </>
    )
}

export default FAQ;