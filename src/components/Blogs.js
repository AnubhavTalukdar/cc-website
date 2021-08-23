import React, {useState, useEffect} from "react";
import atw from "../assets/img/atw.png"
import { BASE_URL } from "../config/url";
import axios from "axios"
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
var arraySort = require('array-sort');


function Blogs(){

    var [blogs, setBlogs] = useState([])
    var [filteredBlogs, setFilteredBlogs] = useState([])
    var [last, setLast] = useState([])
    const [categories, setCategories] = useState([])
    const [aroundTheWebs, setAroundTheWebs] = useState([])
    const [visible, setVisible] = useState(5)
    const [length, setLength] = useState(0)
    const [visible1, setVisible1] = useState(5)
    const [length1, setLength1] = useState(0)
    const [filter, setFilter] = useState("All")
    const [sort, setSort] = useState("Newest")
    

    useEffect(() => { 
        window.scroll(0,0)
        axios.get(`${BASE_URL}/blogs`)
        .then(response => {
            var b = arraySort(response.data, "id").reverse()
            setBlogs(arraySort(response.data, "id").reverse())
            setLast(b.slice(0,1))
            setFilteredBlogs(arraySort(response.data, "id").reverse())
            setLength(response.data.length)
        })

        axios.get(`${BASE_URL}/around-the-webs`)
        .then(response => {
            setAroundTheWebs(response.data)
            setLength1(response.data.length)
        })

        axios.get(`${BASE_URL}/categories`)
        .then(response => {
            setCategories(response.data)
        })

    }, [])

    const loadMore = (e) => {
        setVisible((prevValue) => prevValue + 3)
    }

    const loadMore1 = (e) => {
        setVisible1((prevValue) => prevValue + 3)
    }

    const changeFilter = (e) => {
        var s = e.target.value
        setFilter(s)
        var b = []
        b = blogs.filter(function(blog){
            return blog.category.name === s
        })
        setFilteredBlogs(b)
        
    }

    const changeSort = (e) => {
        setSort(e.target.value)
        if(e.target.value === "Oldest"){
            setBlogs(arraySort(blogs, "id"))
            setFilteredBlogs(arraySort(filteredBlogs, "id"))
        }
        else if(e.target.value === "Newest"){
            setBlogs(arraySort(blogs, "id").reverse())
            setFilteredBlogs(arraySort(filteredBlogs, "id").reverse())
        }
    }

    return(
        <>
        <div className="row container-fluid justify-content-center pt-4 pb-lg-4 pb-3">
            <div className="col-lg-10 col-sm-12 pl-4">
                
                { last.map((b)=>(
                    <div className="row container-fluid px-0 pl-5">
                    <div className="col-lg-8 col-sm-12">
                    <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}><img className="highlight-img" src={BASE_URL + b.Placeholder_Image.url} alt="highlight-img" /></a>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <span className="highlight-category">{b.category.name} • </span>
                    <span className="highlight-date">{b.Date_of_Publishing}</span><br />
                    <span className="highlight-read"><em>{b.Reading_Time} mins read</em></span><br />
                    <p className="highlight-heading"> <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}>{b.Title} </a></p>
                    <p className="highlight-summary">{b.Summary}</p>
                    <p className="highlight-author">{b.Author} <br /><span className="highlight-designation">{b.Author_Designation}</span></p>
                </div>
                </div>
                ))}
            </div>
        </div>
        <div className="row pl-lg-5 pl-md-5 pr-lg-5 pl-3 pr-0 container-fluid">
            <div className="col-lg-7 col-sm-12 pl-lg-5 pl-none">
                <div className="row">
                    <h1 className="our-blogs-heading1 pl-5">Our Blogs</h1>
        
                    <div className="row mt-3 pl-5 pb-3">
                        <div className="col-lg-4 col-sm-none">

                        </div>
                        <div className="col-lg-4 col-sm-6 mt-4">
                            <InputLabel id="filter">Filter By Category</InputLabel>
                            <Select
                            labelId="filter"
                            id="filter"
                            fullWidth
                            onChange={changeFilter}
                            value={filter}
                            >
                            <MenuItem value="All">All</MenuItem>
                            { categories.map((c) => (
                                <MenuItem value={c.name}>{c.name}</MenuItem>
                            ))}
                            
                            </Select>
                        </div>
                        
                        <div className="col-lg-4 col-sm-6 mt-4">
                            <InputLabel id="sort">Sort By</InputLabel>
                            <Select
                            labelId="sort"
                            id="sort"
                            fullWidth
                            value={sort}
                            onChange={changeSort}
                            >
                            <MenuItem value="Newest">Newest First</MenuItem>
                            <MenuItem value="Oldest">Oldest First</MenuItem>
                            
                            
                            </Select>
                        </div>
                    </div>
                    { filter === "All" ?
                    <>
                    { 
                    blogs.slice(0,visible).map((b) =>(
                        
                        <div className="row pl-5 pb-3">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}>  <img className="blog-img" src={BASE_URL + b.Placeholder_Image.formats.thumbnail.url} alt=""/> </a>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <span className="blog-category">{b.category.name} • </span>
                                <span className="blog-date">{b.Date_of_Publishing}</span><br />
                                <span className="blog-read"><em>{b.Reading_Time} mins read</em></span><br />
                                <p className="blog-heading"> <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}>{b.Title} </a></p>
                                <p className="blog-summary">{b.Summary} </p>
                                <p className="blog-author">{b.Author}<br /><span className="highlight-designation">{b.Author_Designation}</span></p>
                            </div>
                        </div>
                    ))
                    
                    }
                    </> : 
                    <>
                    { 
                    filteredBlogs.slice(0,visible).map((b) =>(
                        
                        <div className="row pl-5 pb-3">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}>  <img className="blog-img" src={BASE_URL + b.Placeholder_Image.formats.thumbnail.url} alt=""/> </a>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <span className="blog-category">{b.category.name} • </span>
                                <span className="blog-date">{b.Date_of_Publishing}</span><br />
                                <span className="blog-read"><em>{b.Reading_Time} mins read</em></span><br />
                                <p className="blog-heading"> <a href={'blog/'+b.id} style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}>{b.Title} </a></p>
                                <p className="blog-summary">{b.Summary} </p>
                                <p className="blog-author">{b.Author}<br /><span className="highlight-designation">{b.Author_Designation}</span></p>
                            </div>
                        </div>
                    ))
                    
                    }
                    </>
                    }
                    
           
                </div>
                <br />
                <center>
                    <button type="button" class="load-more-button" onClick={loadMore} style={{display : visible >= length || length <= 5 ? "none": "block"}}>Load More</button>
                </center>
                <br />
            </div>
            <div className="col-lg-5 col-sm-12 pl-5">
                <div className="row">
                <h2 className="our-blogs-heading2-small pl-lg-5 pl-none">THIS WEEK</h2>
                <h2 className="our-blogs-heading2 pl-lg-5 pl-none">Around the web</h2>
                <h2 className="our-blogs-heading2-last pl-lg-5 pl-none pb-lg-4 pb-3">A curated list of articles from around the web, that drew our attention this week.*</h2>
                { aroundTheWebs.slice(0,visible1).map((a)=>(
                     <div className="row pl-lg-5 pl-none pb-3">
                     <div className="col-7">
                         <p className="atw-heading"><a href={a.Article_Link} target="_blank" rel="noopener noreferrer" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}>{a.Title} </a></p>
                         <p className="atw-summary">{a.Description}</p>
                         <p className="atw-medium">{a.Website_Name}<br /><span className="atw-dnr">{a.Date} | {a.Reading_Time} mins</span></p>
                     </div>
                     <div className="col-5 text-center">
                     <a href={a.Article_Link} target="_blank" rel="noopener noreferrer" style={{textDecoration : "none", textUnderline : "none", color : "inherit"}}><img src={atw} alt="" width="90%"/></a>
                     </div>
                 </div>
                ))
                }
                <br />
                <center>
                    <button type="button" class="load-more-button mr-lg-none mr-md-3 mr-3 mb-4" onClick={loadMore1} style={{display : visible1 >= length1 || length1 <= 5 ? "none": "block"}}>Load More</button>
                </center>
                
                <a href="/" style={{textDecoration : "none"}}>
                <div className="row first-card mb-3">
                    <p className="first-card-heading pt-4">Have something to share? <br />Get in touch! <p className="first-card-summary pt-3">We would love to hear your story. </p></p>
                    
                </div>
                </a>
                <a href="/" style={{textDecoration : "none"}}>
                <div className="row second-card mb-4">
                    <p className="second-card-heading pt-4">Sign up!<p className="second-card-summary pt-3">For our blogs</p></p>
                    
                </div>
                </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Blogs;