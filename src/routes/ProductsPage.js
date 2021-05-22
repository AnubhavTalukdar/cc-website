import React from "react"
import Header from "./../components/Header"
import Nav from "./../components/Nav"
import Products from "./../components/Products"
import Newsletter from "./../components/Newsletter"
import Footer from "./../components/Footer"

function ProductsPage(){
    return(
        <>
        <Header />
        <Nav />
        <Products />
        <Newsletter />
        <Footer />
        </>

    );
}

export default ProductsPage;