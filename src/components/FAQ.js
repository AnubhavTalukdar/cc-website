import React , {useEffect} from "react";
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

  useEffect(() => { 
    window.scroll(0,0)

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
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="justify-content-center">
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link className="tab-link" eventKey="first">Company Overview</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-link" eventKey="second">Products and Services</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-link" eventKey="third">Pricing and Plans</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-link" eventKey="fourth">Policies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="tab-link" eventKey="fifth">Work</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div className={classes.root}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>What is conscious culture and how do you work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>How are you different from other companies?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>Who do you work with?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>Why should I spend time or money on diversity and inclusion?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>Are you an HR firm?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <div className={classes.root}>
              <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>What other services do you offer?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>Does diversity only mean gender, sexuality, etc?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>How long before I start seeing the results?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>In our industry, mostly men apply and stay. How are you relevant to us?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>I have an innovative idea. How can we work together?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>


              </div>
              
              </Tab.Pane>
              <Tab.Pane eventKey="third">
              <div className={classes.root}>
              <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>What are the different pricing and plans?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}> How can I get a discount?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>What payment methods are accepted?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography className={classes.heading}>Do you accept international credit cards?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              </div>
              
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
              <div className={classes.root}>
              <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                <Typography className={classes.heading}>What’s your billing policy?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                <Typography className={classes.heading}>What’s your cancellation policy?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                <Typography className={classes.heading}>Is there a refund policy?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                <Typography className={classes.heading}>What are the terms of service/use?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                <Typography className={classes.heading}>How do you handle my data?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                <Typography className={classes.heading}>What’s your privacy policy with respect to external links?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                <Typography className={classes.heading}>Will you notify me when the privacy policy changes?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </div>
              
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">

              <div className={classes.root}>
              <Accordion expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                <Typography className={classes.heading}>Are there any internships available?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                <Typography className={classes.heading}>Are there any volunteering opportunities?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                <Typography className={classes.heading}>Where do I apply to become an employee?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="textSecondary" className={classes.answer}>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                    vitae egestas augue. Duis vel est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              </div>
              
              </Tab.Pane>
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