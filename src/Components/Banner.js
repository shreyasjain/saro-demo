import React, { useEffect } from 'react'
import "../Styles/Banner.css"
import MainForm from "./MainForm"

function Banner() {

    useEffect(()=>{
        document.getElementById("form-container").style.display="none";
    },[1])

    const handleDownload = (e)=>{
        e.preventDefault();
        document.getElementById("form-container").style.display="block";
    }

    return (
        <div>
        <div className="banner-container">
            <h3>Become the next internet sensation.</h3>
            <button onClick={e=>handleDownload(e)}>Download Now</button>
        </div>
        <div className="mainform"> 
        <MainForm/>
        </div>
        </div>
    )
}

export default Banner
