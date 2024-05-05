import React from 'react';
// import Products from '../compProducts/Products.jsx';
// import './Card.css';
import '../CSS/Body.css'
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
                <img className='cardImg' src={imagePath} alt="imageMenu" />
            </div>

            <div className="buttonAddProducts" >
                <div onClick={()=>handleClick(item)}>{buttonAddProducts}</div>
            </div>

        </div>
)

}

export default Card;