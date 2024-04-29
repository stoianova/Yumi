import React from 'react';
import ThirdProduct from '../../img/fixed/fix2.jpeg'


function SProductCardThird(props) {
    return (
        <div className='SProductCardThird'>
            <div className="imageThird ">
                    <img src={ThirdProduct} alt="" />
            </div>

            <div className="productTextThird">
                <p>For CHEESY lovers</p>
                <p>Lychee / Dragon Fruit / Mozzarella foam </p>
                <p>$ 7</p>
            </div>
            
        </div>
    );
}

export default SProductCardThird;