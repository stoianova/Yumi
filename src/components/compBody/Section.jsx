import React from 'react';
import BackgroundImage from './BackgroundImage'
import SProductCardFirst from './SProductCardFirst'
import ImageSlider from './ImageSlider';
import Location from './Location';
import '../CSS/Body.css'
import '../CSS/BackgroundImage.css'



function Section() {
    return (
        <>
            <BackgroundImage />
            <SProductCardFirst />

        <div className="wrapperSecond">
            <ImageSlider/>
            <Location />
        </div>
        </>
    );
}

export default Section;