import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'


const whatsappIcon = <FontAwesomeIcon icon={faWhatsapp} />
const instagram = <FontAwesomeIcon icon={faInstagram} />

function Footer(props) {
    return (
        <>
        <div className='footer'>
            <div className="wrapperFooter container">

                <div className="brandicons container d-flex justify-content-between">
                    {whatsappIcon}
                    {instagram}
                </div>
                <p className='footerText container'>
                    © 2024 YUMI BUBBLE TEA CAFE. ALL RIGHTS RESERVED.
                </p>

            </div>
        </div>
        </>
    );
}

export default Footer;
