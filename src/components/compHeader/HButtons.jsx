import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'


function HButtons() {

    const buttonAddHeader = <FontAwesomeIcon icon={faBasketShopping} />

    return (
            <div className="headerRight">

                <button className='headerButtonBasket' type="button">
                    {buttonAddHeader}
                </button>
                <span></span>
                        
            </div>
    );
}

export default HButtons;