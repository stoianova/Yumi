import React, { useEffect, useState } from 'react';
import '../compProducts/ProductsSection.css';
// import listProducts from './Products.jsx';
import Card from '../compProducts/Card';
import '../CSS/Body.css'


const ProductsSection = ({handleClick}) => {

    const [showPosts, setShowPosts] = useState();
    const myurl = 'https://coffeemarket-775b0b283547.herokuapp.com/main/';

    async function pullJson() {
        const response = await fetch(myurl)
        const responseData = await response.json()
        console.log(responseData)
        let displayData = responseData.map(function(item) {
            return(
                <Card item={item} key={item.id} handleClick={handleClick}/>
            )
        })
        console.log(responseData)
        setShowPosts(displayData)
    }
    useEffect(() => {
        pullJson()
    }, [])

    return (

        <section>
            <div id="linkToProducts">
                {
                    showPosts
                }
            {/* {
                 listProducts.map((item)=>(
                    <Card item={item} key={item.id} handleClick={handleClick}/>
                ))
            } */}
        </div> </section>
    )
}

        <>

        <div id="linkProducts">
        <div className="productsSection">
            

        </div>
        </div>
        
        </>

export default ProductsSection;