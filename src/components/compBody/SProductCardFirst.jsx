import React from 'react';
import FirstProduct from '../../img/fixed/fix7.jpeg'

function SProductCardFirst() {
    return (

        <div className='productCartFirst'>

            <div className='SProductCardFirst'>

                <div className="imageFirst d-flex justify-content-center">
                    <img src={FirstProduct} alt="" />
                </div>
            <div className="productTextFirst">
                <p>Try our bestsellers! </p>
                <p>Strawberry / Oreo /Creme </p> 
                <p>$ 6.5</p>
            </div>
                
            </div>
            

        </div>
    );
}

export default SProductCardFirst;