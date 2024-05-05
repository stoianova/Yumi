import React from 'react';
import FirstProduct from '../../img/fixed/fix7.jpeg'
import SecondProduct from '../../img/fixed/fix5.jpeg';
import ThirdProduct from '../../img/fixed/fix2.jpeg'
import ForthProduct from '../../img/fixed/fix1.jpeg';
import '../CSS/Body.css'
import '../CSS/WelcomeImageDiv.css'


function SProductCardFirst() {
    return (
        <div className='allProdCards'>
        <div className='productCartFirst'>

            {/* <div className='SProductCardFirst'> */}
                <div className="imageFirst d-flex justify-content-center">
                    <img src={FirstProduct} alt="" />
                </div>
            <div className="productTextFirst">
                <p>Try our bestsellers! </p>
                <p>Strawberry / Oreo /Creme </p> 
                <p>$ 6.5</p>
            </div>
            </div>
        {/* </div> */}
        
        <div className='ProductCardSecond'>

            <div className="imageSecond ">
                <img src={SecondProduct} alt="" />
            </div>
            <div className="productTextSecond">
                <p>Special release for specials </p>
                <p>Milk collection </p>
                <p>$ 5</p>
            </div>
        </div>

        <div className='ProductCardThird'>
            <div className="imageThird ">
                    <img src={ThirdProduct} alt="" />
            </div>
            <div className="productTextThird">
                <p>For CHEESY lovers</p>
                <p>Lychee / Dragon Fruit / Mozzarella foam </p>
                <p>$ 7</p>
            </div>
            
        </div>
        
        <div className='ProductCardForth'>
            
            <div className="imageForth ">
                <img src={ForthProduct} alt="" />
            </div>
            <div className="productTextForth">
               <p> Yumi Fresh selection 2024 </p> 
               <p> Cold drinks </p>
               <p>$ 5</p> 
            </div>


        </div>

        
        
        
        </div>
    );
}

export default SProductCardFirst;