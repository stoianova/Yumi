import React from 'react';
import './Cart.css'
import './OrderTypeForm.css';



const OrderTypeForm = ({setDelivery, setAway}) => {

    return (
        <>
            <div className='deliveryType'>

                <div className="innerRighrSide">
                <p>Choose your delivery type</p>
                <button onClick={() => setAway(false)}>Take away from Yumi Cafe</button>
                <button onClick={() => setDelivery(false)} >Delivery with Yumi courier</button>
                </div>
            </div>
        </>
    );
}

export default OrderTypeForm;