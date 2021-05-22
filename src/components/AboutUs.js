import React from "react";
import OurVission from "../assets/img/ourvission.jpg"
import OurMission from "../assets/img/ourmission.jpg"
import TeamMember from "../assets/img/TeamMember.jpg"
import Media from "../assets/img/Media.jpg"
import Carousel from "react-elastic-carousel"


function AboutUs(){
    const breakPoints = [
        { width: 1, itemsToShow: 1,itemsToScroll: 1 },
        { width: 550, itemsToShow: 2,itemsToScroll: 2 },
        { width: 768, itemsToShow: 2,itemsToScroll: 2 },
        { width: 1200, itemsToShow: 2,itemsToScroll: 2},
      ];

    const breakPoints1 = [
        { width: 1, itemsToShow: 1,itemsToScroll: 1 },
        { width: 550, itemsToShow: 1,itemsToScroll: 1 },
        { width: 768, itemsToShow: 1 ,itemsToScroll: 1},
        { width: 1200, itemsToShow: 1,itemsToScroll: 1},
      ];

      const breakPoints2 = [
        { width: 1, itemsToShow: 1,itemsToScroll: 1 },
        { width: 550, itemsToShow: 4,itemsToScroll: 4 },
        { width: 768, itemsToShow: 4,itemsToScroll: 4 },
        { width: 1200, itemsToShow: 4,itemsToScroll: 4 },
      ];
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt"
                </p>
            </div>
            </div>
            <div className="row about-section3 container-fluid justify-content-center pb-5 pt-5">
                <div className="col-lg-3 col-sm-12 mt-auto mb-auto">
                    <img className="rounded-circle" src={OurVission} alt="our-vision" style={{width: "100%", height: "100%"}}/>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5 className="text-center" style={{color: '#860000'}}>Our Vision</h5>
                    <p className="about-section3-text text-justify">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in consectetur adipiscing elit, sed do."    
                    </p>
                </div>
                <div className="col-lg-3 col-sm-12 mt-auto mb-auto">
                    <img className="rounded-circle" src={OurMission} alt="our-mission" style={{width: "100%", height: "100%"}}/>
                </div>
                <div className="col-lg-3 col-sm-12">
                    <h5 className="text-center" style={{color: '#860000'}}>Our Mission</h5>
                    <p className="about-section3-text text-justify">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in consectetur adipiscing elit, sed do."    
                    </p>
                </div>
            </div>
           <div className="about-section4 container-fluid pt-5 pb-5">
           <h1 className="about-section4-heading text-center">The Team</h1>
           <br />
                <Carousel breakPoints={breakPoints}>
                    <div className="team-card text-center">
                        <img src={TeamMember} className="rounded-circle team-card-photo" alt="teammember" />
                        <h6 className="mt-5 team-card-heading">Name, Designation</h6>
                        <p className="team-card-desc pl-3 pr-3 text-justify mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in consectetur adipiscing elit, sed do.</p>
                    </div>
                    <div className="team-card text-center">
                        <img src={TeamMember} className="rounded-circle team-card-photo" alt="teammember" />
                        <h6 className="mt-5 team-card-heading">Name, Designation</h6>
                        <p className="team-card-desc pl-3 pr-3 text-justify mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in consectetur adipiscing elit, sed do.</p>
                    </div>
                    <div className="team-card text-center">
                        <img src={TeamMember} className="rounded-circle team-card-photo" alt="teammember" />
                        <h6 className="mt-5 team-card-heading">Name, Designation</h6>
                        <p className="team-card-desc pl-3 pr-3 text-justify mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in consectetur adipiscing elit, sed do.</p>
                    </div>
                    <div className="team-card text-center">
                        <img src={TeamMember} className="rounded-circle team-card-photo" alt="teammember" />
                        <h6 className="mt-5 team-card-heading">Name, Designation</h6>
                        <p className="team-card-desc pl-3 pr-3 text-justify mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in consectetur adipiscing elit, sed do.</p>
                    </div>
                </Carousel>
            </div>
            <div className="about-section5 container-fluid pt-5 pb-5">
            <h1 className="about-section5-heading text-center">We stand on the shoulders of the giants!</h1>
            <br />
            <br />
                <Carousel breakPoints={breakPoints1}>
                    <div className="row giants-card justify-content-center">
                        <div className="col-lg-8 col-sm-12">
                            <h5 className="mt-1 giants-card-heading text-center text-lg-left">Name, Designation</h5>
                            <p className="giants-card-desc text-justify mt-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in consectetur adipiscing elit, sed do."</p>
                        </div>
                    </div>
                    <div className="row giants-card justify-content-center">
                        <div className="col-lg-8 col-sm-12">
                            <h5 className="mt-1 giants-card-heading text-center text-lg-left">Name, Designation</h5>
                            <p className="giants-card-desc text-justify mt-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in consectetur adipiscing elit, sed do."</p>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="about-section6 container-fluid pt-5 pb-5">
            <h1 className="about-section6-heading text-center">A powerful ambition with efforts of many!</h1>
            <br />
            <br />
                <Carousel breakPoints={breakPoints1}>
                    <div className="row giants-card">
                        <div className="col-lg-4 col-sm-12 text-center">
                            <img src={TeamMember} className="rounded-circle giants-card-photo" alt="giants" />
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <h5 className="mt-1 giants-card-heading text-center text-lg-left">Name, Designation</h5>
                            <p className="about-section6-desc text-justify mt-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in consectetur adipiscing elit, sed do."</p>
                        </div>
                    </div>
                    <div className="row giants-card">
                        <div className="col-lg-4 col-sm-12 text-center">
                            <img src={TeamMember} className="rounded-circle giants-card-photo" alt="giants" />
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <h5 className="mt-1 giants-card-heading text-center text-lg-left">Name, Designation</h5>
                            <p className="about-section6-desc text-justify mt-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in consectetur adipiscing elit, sed do."</p>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="about-section7 container-fluid pt-5 pb-5">
            <h1 className="about-section7-heading text-center">Media Insertions</h1>
           <br />
           <br />
                <Carousel breakPoints={breakPoints2}>
                    <div className="media-card pl-3 pr-3">
                        <img src={Media} className="media-card-photo" alt="media" />
                        <h6 className="mt-5 media-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h6>
                        <button className="mt-3 media-card-button btn btn-light">View More</button>
                    </div>
                    <div className="media-card pl-3 pr-3">
                        <img src={Media} className="media-card-photo" alt="media" />
                        <h6 className="mt-5 media-card-desc">Lorem ipsu dolor sit amet, consectetur adipiscing elit, sed do</h6>
                        <button className="mt-3 media-card-button btn btn-light">View More</button>
                    </div>
                    <div className="media-card pl-3 pr-3">
                        <img src={Media} className="media-card-photo" alt="media" />
                        <h6 className="mt-5 media-card-desc">Lorem ipum dolor sit amet, consectetur adipiscing elit, sed do</h6>
                        <button className="mt-3 media-card-button btn btn-light">View More</button>
                    </div>
                    <div className="media-card pl-3 pr-3">
                        <img src={Media} className="media-card-photo" alt="media" />
                        <h6 className="mt-5 media-card-desc">Lorem ipsum dolo sit amet, consectetur adipiscing elit, sed do</h6>
                        <button className="mt-3 media-card-button btn btn-light">View More</button>
                    </div>
                    <div className="media-card pl-3 pr-3">
                        <img src={Media} className="media-card-photo" alt="media" />
                        <h6 className="mt-5 media-card-desc">Lorem ipsum dolor st amet, consectetur adipiscing elit, sed do</h6>
                        <button className="mt-3 media-card-button btn btn-light">View More</button>
                    </div>
                    <div className="media-card pl-3 pr-3">
                        <img src={Media} className="media-card-photo" alt="media" />
                        <h6 className="mt-5 media-card-desc">Lorem ipsum dolr sit amet, consectetur adipiscing elit, sed do</h6>
                        <button className="mt-3 media-card-button btn btn-light">View More</button>
                    </div>
                    <div className="media-card pl-3 pr-3">
                        <img src={Media} className="media-card-photo" alt="media" />
                        <h6 className="mt-5 media-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h6>
                        <button className="mt-3 media-card-button btn btn-light">View More</button>
                    </div>
                    <div className="media-card pl-3 pr-3">
                        <img src={Media} className="media-card-photo" alt="media" />
                        <h6 className="mt-5 media-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h6>
                        <button className="mt-3 media-card-button btn btn-light">View More</button>
                    </div>
                    <div className="media-card pl-3 pr-3">
                        <img src={Media} className="media-card-photo" alt="media" />
                        <h6 className="mt-5 media-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</h6>
                        <button className="mt-3 media-card-button btn btn-light">View More</button>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}


export default AboutUs;