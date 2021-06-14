import React from "react"
import Header from "./../components/Header"
import Nav from "./../components/Nav"
import IndividualBlog from "./../components/IndividualBlog"
import Newsletter from "./../components/Newsletter"
import Footer from "./../components/Footer"

function ProductsPage(){
    return(
        <>
        <Header />
        <Nav />
        <IndividualBlog />
        <Newsletter />
        <Footer />
        </>

    );
}

export default ProductsPage;