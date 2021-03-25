import React from 'react'
import footerImage from "../Media/Group4791.png"
import "../Styles/Footer.css"

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-row-1">
            <img src={footerImage}/>
            <img src={footerImage}/>
            <img src={footerImage}/>
            </div>
            <div className="footer-row-2">
                <span>Do it with roleit !</span>
            </div>
        </div>
    )
}

export default Footer
