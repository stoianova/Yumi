import React from 'react';
import BackgroundImage from './BackgroundImage'
import SProductCardFirst from './SProductCardFirst'
import SProductCardSecond from './SProductCardSecond';
import SProductCardThird from './SProductCardThird';
import SProductCardForth from './SProductCardForth';
import ImageSlider from './ImageSlider';
import Location from './Location';



function Section(props) {
    return (
        <>
            <div className="wrapperFirst d-grid">
                <BackgroundImage />
                <SProductCardFirst />
                <SProductCardSecond/>
                <SProductCardThird/>
                <SProductCardForth/>

            </div>

            <div className="wrapperSecond">
                <ImageSlider/>

                <Location />
            </div>
        </>
    );
}

export default Section;