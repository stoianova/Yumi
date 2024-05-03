import React from 'react';
// import Products from '../compProducts/Products.jsx';
// import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Card = ({item, handleClick}) => {

    const buttonAddProducts = <FontAwesomeIcon icon={faBasketShopping} />

        const {name, localname, price, imagePath} = item;
    return (
        <div className='card'>
            
            <div className="top">
                <h2 className='name'> {name} </h2>
                <h2 className='localname'> {localname} </h2>
                <h3 className='price'> $ {price} </h3>
            </div>

            <div className="bottom">
                <img className='cardImg' src={imagePath.join('')} alt="imageMenu" />
            </div>

            <div className="buttonAddProducts" >
                <div onClick={()=>handleClick(item)}>{buttonAddProducts}</div>
            </div>

        </div>
)

}






// function Card(props, handleClick) {

//     const buttonAddProducts = <FontAwesomeIcon icon={faBasketShopping} />


//     return (

//         <div className='card'>
            
//             <div className="top">
//                 <h2 className='name'> {props.name} </h2>
//                 <h2 className='localname'> {props.localname} </h2>
//                 <h3 className='price'> {props.price} </h3>
//             </div>

//             <div className="bottom">
//                 <img className='image' src={props.image} alt="imageMenu" />
//             </div>

//             <div className="buttonAddProducts" onClick={()=>handleClick()} >
//                 {buttonAddProducts}
//             </div>
//         </div>
//     );
// }

export default Card;