import React from 'react';
// import './Location.css'
import ImageLocation from '../../img/location.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../CSS/Body.css'
// import '../CSS/BackgroundImage.css'


const locationIcon = <FontAwesomeIcon icon={faLocationDot} beat style={{color: "#a06e89",}} />

function Location() {
    return (
        <div id='location'>
            <p>Location</p>

            <div className="locMain">
            <div className="locImage">
                <div className="imagggge">
                    {locationIcon}
                    <img src={ImageLocation} alt="" /></div>
            </div>

            <div className="locDiv">

            <p>Find the nearest Yumi Bubble Tea Cafe location and plan your visit. Whether you're in the mood for a quick pick-me-up or a leisurely afternoon treat, we're conveniently located to serve you. <br /></p>
                
            <p> Tirana, Rr Ibragima Rugova 156 <br /></p>
            <p>Opening hours: <br /></p>
            <p>Monday - Sunday <br /></p>
            <p>11:00 - 23:00</p>
            </div>
            </div>

        </div>

    );
}

export default Location;