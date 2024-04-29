import React from 'react';
import '../compProducts/ProductsSection.css';
import listProducts from './Products.jsx';
import Card from '../compProducts/Card';
// import {myObj} from './Fetch/MyFetch.jsx'


const ProductsSection = ({handleClick}) => {

    return (

        <section>
            <div id="linkToProducts">
            {
                /* myObj */ listProducts.map((item)=>(
                    <Card item={item} key={item.id} handleClick={handleClick}/>
                ))
            }
        </div> </section>
    )
}

        <>

        <div id="linkProducts">
        <div className="productsSection">
            
            <div className="titleMenu container">
            CREAMY MILK TEA MADE WITH CAKE FLAVOURED CREME.
            </div>

                <div className="product container"> </div>

            <div className="titleMenu">
            REFRESHING TEA MADE WITH A FULL CUP OF <br /> REAL FRUIT, NEVER TOO SWEET WITH NORMAL <br /> SUGAR LEVEL
            </div>

                <div className="product container"> </div>

            <div className="titleMenu">
            THE CLASSIC MILK TEA WITH IN-DEPTH TASTE
            </div>

                <div className="product container"> </div>


            <div className="titleMenu">
            SPRINGY AND LOW CALORIES, OUR TRUPIOCA JELLY MAKES THE DRINKS <br /> NEXT LEVEL DELICIOUS
            </div>

                <div className="product container"> </div>


        </div>
        </div>
        
        </>

export default ProductsSection;