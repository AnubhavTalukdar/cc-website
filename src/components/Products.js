import React from "react"
import products from "../assets/img/products.png"
import products2 from "../assets/img/Product2.png"
import PS1 from "../assets/img/ProductService1.jpg"
import PS2 from "../assets/img/ProductService2.jpg"
import Carousel from "react-elastic-carousel"
import Ashoka from "../assets/img/ashoka.png"
import Welham from "../assets/img/welham.png"
import Trucup from "../assets/img/trucup.png"
import Nipman from "../assets/img/nipman.png"
import TeamMember from "../assets/img/TeamMember.jpg"

function Products(){
    const breakPoints = [
        { width: 1, itemsToShow: 1,itemsToScroll: 1 },
        { width: 550, itemsToShow: 4,itemsToScroll: 4 },
        { width: 768, itemsToShow: 4,itemsToScroll: 4 },
        { width: 1400, itemsToShow: 4,itemsToScroll: 4 },
      ];

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
            <div className="products-section2 container-fluid pt-5 pb-5">
            <h1 className="products-section2-heading text-center">Facts</h1>
            <br />
                <div className="row pt-2 products-section2-row container-fluid">
                    <div className="col-12">
                        <p className="products-section2-text1 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt qui.
                        </p>
                    </div>
                </div>
                <div className="row products-section2-row container-fluid">
                    <div className="col-lg-9">
                        <p className="products-section2-text1 text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est, sunt in culpa qui officia deserunt mollit.   
                        </p>
                    </div>
                    <div className="col-lg-3">
                        <img src={products2} alt="products-clipart2" width="100%"/>
                    </div>
                </div>
            </div>
            <div className="products-section3 container-fluid pt-5 pb-5">
                <h1 className="products-section3-heading text-center">Our Offerings</h1>
                <br />
                <br />
                <div className="products-section3-row row container-fluid">
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-5">
                        <img className="rounded products-section3-img " src={PS1} alt="product-service1" width="100%"/>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-5">
                        <h1 className="products-section3-subheading">Heading 1</h1>
                        <p className="products-section3-desc mt-4 mt-lg-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
                        </p>
                        <button className="mt-4 mt-lg-5 btn btn-info">Free Consult</button>
                        <p className="products-section3-test mt-4 mt-lg-5">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam."
                        </p>
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-2">
                                <img className="rounded-circle" src={TeamMember} alt="teammember-testimonial" width="45px" height="45px"/>
                            </div>
                        <div className="col-lg-11 col-md-11 col-6">
                            <div className="row ml-1 mt-2 products-section3-name">Name</div>
                            <div className="row ml-1 products-section3-desg">Designation</div>
                        </div>
                        </div>
                        </div>
                </div>
                <div className="products-section3-row row container-fluid d-none d-lg-block">
                <svg style={{width: '100%', height: '100%'}}>
                    <line stroke-dasharray="4,4,4" r="1" x1="20%" y1="0" x2="80%" y2="100%"
                         style={{stroke : "#7b85a0", strokeWidth: "2"}}/>
                </svg>
                </div>
                <div className="products-section3-row row container-fluid">
                    <div className="mobile-products col-lg-6 col-sm-12 mt-lg-0 mt-5 d-lg-none  d-block">
                        <img className="rounded products-section3-img " src={PS2} alt="product-service2" width="100%"/>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-5">
                        <h1 className="products-section3-subheading">Heading 2</h1>
                        <p className="products-section3-desc mt-4 mt-lg-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.
                        </p>
                        <button className="mt-4 mt-lg-5 btn btn-info">Free Consult</button>
                        <p className="products-section3-test mt-4 mt-lg-5">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam."
                        </p>
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-2">
                                <img className="rounded-circle" src={TeamMember} alt="teammember-testimonial" width="45px" height="45px"/>
                            </div>
                        <div className="col-lg-11 col-md-11 col-6">
                            <div className="row ml-1 mt-2 products-section3-name">Name</div>
                            <div className="row ml-1 products-section3-desg">Designation</div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-lg-0 mt-5 d-lg-block d-none">
                        <img className="rounded products-section3-img " src={PS2} alt="product-service2" width="100%"/>
                    </div>
                </div>
            </div>
            <div className="products-section4 container-fluid pt-5 pb-5">
            <h1 className="products-section4-heading text-center">Our Clients</h1>
            <br />
            <br />
                <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000}>
                <div className="logo-slides-text"><img src={Ashoka} alt="logo-img" width="52px" height="61px"/></div>
                <div className="logo-slides"><img src={Welham} alt="logo-img" width="119px" height="61px"/></div>
                <div className="logo-slides"><img src={Trucup} alt="logo-img" width="96px" height="96px"/></div>
                <div className="logo-slides bg-dark"><img src={Nipman} alt="logo-img" width="61px" height="61px"/></div>
                </Carousel>
                
            

            </div>
        </>
    )
}

export default Products;