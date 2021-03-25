import React from 'react'
import highlightImage from "../Media/Group513.png"
import "../Styles/Highlights.css"

function Highlights() {
    return (
        <div className="highlights-container">
            <div className="highlights-rows">
                <div className="highlights-row-l">
                    <h2>Keep in touch with your Loved ones</h2>
                    <p>Roleit doesn’t just get you the best video editing feature but keeps you contacted with your network as well. You can chat with your friends & followers, quickly share any kind of media and let them know what you are thinking about.</p>
                </div>
                <div className="highlights-row-image">
                    <img src={highlightImage}/>
                </div>
            </div>
            <div className="highlights-rows">
            <div className="highlights-row-image">
                    <img src={highlightImage}/>
                </div>
                <div className="highlights-row-l">
                    <h2>Keep in touch with your Loved ones</h2>
                    <p>Roleit doesn’t just get you the best video editing feature but keeps you contacted with your network as well. You can chat with your friends & followers, quickly share any kind of media and let them know what you are thinking about.</p>
                </div>
                
            </div>
            <div className="highlights-rows">
                <div className="highlights-row-l">
                    <h2>Keep in touch with your Loved ones</h2>
                    <p>Roleit doesn’t just get you the best video editing feature but keeps you contacted with your network as well. You can chat with your friends & followers, quickly share any kind of media and let them know what you are thinking about.</p>
                </div>
                <div className="highlights-row-image">
                    <img src={highlightImage}/>
                </div>
            </div>
        </div>
    )
}

export default Highlights
