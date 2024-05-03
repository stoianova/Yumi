import React, {useState} from 'react';
import './Cart.css'
import './OrderTypeForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassWater, faCircle } from '@fortawesome/free-solid-svg-icons'



const OrderTypeForm = ({setDelivery, setAway}) => {

    const glassIcon = <FontAwesomeIcon icon={faGlassWater} style={{color: "#99afd6",}} />
    const bubblesIcon = <FontAwesomeIcon icon={faCircle} bounce style={{color: "#a4b6d6",}} />

    return (
        <>
            <div className='deliveryType'>

                <div className="innerRighrSide">
                <p>Choose your delivery type</p>
                <button onClick={() => setAway(false)}>Take away from Yumi Cafe</button>
                <button onClick={() => setDelivery(false)} >Delivery with Yumi courier</button>
                </div>
            </div>

            <div className='bubbleIcon'>
                {bubblesIcon}{bubblesIcon}{bubblesIcon}{bubblesIcon}{bubblesIcon}{bubblesIcon}{bubblesIcon}
                {glassIcon}
            </div>
            
        </>
    );
}

export default OrderTypeForm;