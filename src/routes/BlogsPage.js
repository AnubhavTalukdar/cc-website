import React from "react"
import Header from "./../components/Header"
import Nav from "./../components/Nav"
import Blogs from "./../components/Blogs"
import Newsletter from "./../components/Newsletter"
import Footer from "./../components/Footer"

function BlogsPage(){
    return(
        <>
        <Header />
        <Nav />
        <Blogs />
        <Newsletter />
        <Footer />
        </>

    );
}

export default BlogsPage;