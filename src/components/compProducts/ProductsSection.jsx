import React, { useEffect, useState } from 'react';
import '../compProducts/ProductsSection.css';
// import listProducts from './Products.jsx';
import Card from '../compProducts/Card';
// import myObj from './Fetch/MyFetch.jsx'
// import { myMenu } from './Fetch/MyFetch';
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

    // function pullJson(){
    //     fetch(myurl)
    //         .then(response => response.json())
    //         .then(responseData => {
    //             // displayData =   УБРАТЬ
    //             responseData.map((item)=>{
    //                 return ( <Card item={item} key={item.id} handleClick={handleClick}/>)
    //             })
    //             // setShowPosts(displayData); УБРАТЬ
    //             // console.log(responseData); УБРАТЬ
    //         })
    // }

    // useEffect(()=> {
    //     pullJson() 
    // }, [])


    // https://coffeemarket-775b0b283547.herokuapp.com/main/
    // https://swapi.dev/api/planets/1/

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