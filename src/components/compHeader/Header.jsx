import React from 'react';
import logo from '../../img/clientsPics/logo.gif'
import '../compHeader/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Body from '../compBody/Section'


const Header = ({size, setShow}) => {

    const buttonAddHeader = <FontAwesomeIcon icon={faBasketShopping} />

    return (
        <>
            <header>

                <div className="headerContentWrapper container d-flex justify-content-around ">

                    <div className="logo" onClick={()=>setShow(true)}>
                        <img src={logo} alt="logo" />
                    </div>

                    <ul>
                        <a href="#backImg"><li>Home </li> </a>
                        <a href='#linkToProducts'> <li>Menu</li> </a>
                        <a href='#location'> <li>Find us</li> </a>
                    </ul>

                    <div className="headerRight">

                        <button className="buttonAddHeader" onClick={()=>setShow(false)}>

                            <div> {buttonAddHeader} </div>
                            <span>{size}</span>

                        </button>
                        </div>
                        


                </div>

            </header>
            <Body />
        </>
    );
}




export default Header;