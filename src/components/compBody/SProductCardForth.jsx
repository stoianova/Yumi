import React from 'react';
import ForthProduct from '../../img/fixed/fix1.jpeg';

function SProductCardForth() {
    return (
        <div className='SProductCardForth'>
            
            <div className="imageForth ">
                <img src={ForthProduct} alt="" />
            </div>
            <div className="productTextForth">
               <p> Yumi Fresh selection 2024 </p> 
               <p> Cold drinks </p>
               <p>$ 5</p> 
            </div>


        </div>
    );
}

export default SProductCardForth;