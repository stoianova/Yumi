import React, { useEffect, useState } from 'react';
import '../compProducts/ProductsSection.css';
import Card from '../compProducts/Card';
import '../CSS/Body.css'
import axios from "axios"


const ProductsSection = ({handleClick}) => {

    const [showPosts, setShowPosts] = useState([]);
    const myurl = 'https://coffeemarket-775b0b283547.herokuapp.com/main/';

 
    
    useEffect(() => {
       axios.get(myurl)
       .then((responce)=>{
        console.log(responce.data)
        setShowPosts(responce.data)
       })

    }, [])

    return (

        <section>
            <div id="linkToProducts">
                {
                    showPosts.map((item)=>(
                        <Card item={item} key={item.id} handleClick={handleClick} />
                    ))
                }
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