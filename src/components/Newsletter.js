import React from "react";

function Newsletter() {
    return(
        <div>
            <div className="newsletter container-fluid px-0 pt-4 pb-3">
                <div className="row container-fluid pl-5 justify-content-center">
                    <div className="col-lg-5 col-sm-12 col-xs-12">
                        <p className="newsletter-text1">Stay updated every week</p>
                        <p className="newsletter-text2">Get exclusive interviews, opinions and workplace <br />insights straight to your inbox. It's completely free !</p>
                    </div>
                    <div className="col-lg-5 col-sm-12 col-xs-12">
                        <div className="row pt-2">
                            <div className="col-lg-8 col-sm-12 col-xs-12 pt-2">
                                <input type="email" class="newsletter-input form-control" id="exampleInputEmail1" placeholder="Enter your email here" />
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12 pt-2 text-lg-left text-center">
                                <button className="newsletter-button">Sign me up!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;