import React from 'react';
import BackgroungImage from '../../img/fixed/fix3.jpeg'
import '../CSS/WelcomeImageDiv.css'
import '../CSS/Body.css'


function WelcomeImageDiv() {
    return (
        <div className='welcomeImageDiv'>
            <img className="backImg" id='backImg' src={BackgroungImage} alt="" />

            <div className="welcomeDiv">

                <div className="welcome container">
                    Yumi Bubble Tea Cafe
                </div>

                <div className="welcomeText container">
                    At Yumi, we're passionate about crafting the perfect bubble tea experience. From our wide selection of refreshing flavors to our cozy and inviting atmosphere, we're here to delight your taste buds and brighten your day.
                </div>

            </div>

            <div className='menuDiv'>
                <p className='menusecond'>Explore our menu of mouthwatering bubble tea creations, including classic favorites and innovative specialty drinks.</p>
                <a href="#linkToProducts">
                    <button className='menufirst'>Menu</button>
                </a>            
            </div>



        
        </div>
    );
}

export default WelcomeImageDiv;