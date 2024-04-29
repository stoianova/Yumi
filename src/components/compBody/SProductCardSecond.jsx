import React from 'react';
import SecondProduct from '../../img/fixed/fix5.jpeg';

function SProductCardSecond(props) {
    return (
        <div className='SProductCardSecond'>

            <div className="imageSecond ">
                <img src={SecondProduct} alt="" />
            </div>
            <div className="productTextSecond">
                <p>Special release for specials </p>
                <p>Milk collection </p>
                <p>$ 5</p>
            </div>
            
        </div>
    );
}

export default SProductCardSecond;