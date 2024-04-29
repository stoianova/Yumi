import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ImageSlider.css';
// import './OpinionSubmit.css';
import ClientPic1 from '../../img/clientsPics/rev4.png';
import ClientPic2 from '../../img/clientsPics/rev6.png';
import ClientPic3 from '../../img/clientsPics/rev2.png';
import ClientPic4 from '../../img/clientsPics/rev1.png';
import ClientPic5 from '../../img/clientsPics/rev3.png';
import ClientPic6 from '../../img/clientsPics/rev5.png';


const ImageSlider = ({images}) => {
    let pictures = [
        ClientPic1,
        ClientPic2,
        ClientPic3,
        ClientPic4,
        ClientPic5,
        ClientPic6
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <div className="slick-prev">Previous</div>,
        nextArrow: <div className="slick-next">Next</div>,
    };

    return (
        <div className='reviewDivs'>
            {/* <div className="reviewsText">
                Share the pictures of your Bubble Tea and get the dicrount for the next order 15%
            </div> */}

            <div className='image-slider'>
                
                <Slider {...settings}>
                    {pictures.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Slider>

                {/* <div className="reviewsSmallDescription">
                    Photos from out guests
                </div>

                <div className="writeReview">
                You may write yout opinion here
                <input type="text" name="opinion" id="opinion" />
                <button className='opinionSubmit' type="submit">Submit</button>
                </div> */}

            </div>
        </div>
    )
}


export default ImageSlider;
