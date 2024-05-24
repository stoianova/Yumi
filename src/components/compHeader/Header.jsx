import React from 'react';
import logo from '../../img/clientsPics/logo.gif'
import '../compHeader/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import Body from '../compBody/Section'
import '../CSS/Body.css';
<<<<<<< HEAD

=======
>>>>>>> c0da81378ff06679d0ab43159755065cf1132f35


const Header = ({size, setShow}) => {

    const buttonAddHeader = <FontAwesomeIcon icon={faBasketShopping} />

    return (
        <>
            <header>


            <nav className="navbar navbar-expand-lg">
<<<<<<< HEAD
            <div className="container-fluid" >
                <img className="logoNewHead" src={logo} onClick={()=>setShow(false)}/>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" onClick={()=>setShow(false)}>
=======
            <div className="container-fluid">
                <img className="logoNewHead" src={logo} onClick={()=>setShow(true)} />
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
>>>>>>> c0da81378ff06679d0ab43159755065cf1132f35
                <div className="navbar-nav">
                    <a className="nav-link"  href="#backImg">Home</a>
                    <a className="nav-link" href="#linkToProducts" >Menu</a>
                    <a className="nav-link" href="#location">Find us</a>
                </div>
                </div>   

                <button className="buttonAddHeader" onClick={()=>setShow(true)}>
                <div>{buttonAddHeader} </div>
                <span className='countCartHead'>{size}</span>
                </button>

            </div>
            </nav>


            </header>
            <Body />
        </>
    );
}




export default Header;