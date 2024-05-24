import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientPic1 from '../../img/clientsPics/rev4.png';
import ClientPic2 from '../../img/clientsPics/rev6.png';
import ClientPic3 from '../../img/clientsPics/rev2.png';
import ClientPic4 from '../../img/clientsPics/rev1.png';
import ClientPic5 from '../../img/clientsPics/rev3.png';
import ClientPic6 from '../../img/clientsPics/rev5.png';
import '../CSS/Body.css'



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


            <div className='image-slider'>
                
                <Slider {...settings}>
                    {pictures.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Slide ${index}`} />
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}


export default ImageSlider;
