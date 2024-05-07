import React from 'react';
import logo from '../../img/clientsPics/logo.gif'
import '../compHeader/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Body from '../compBody/Section'
// import Login from '../FormsBackEnd/Login'
import '../CSS/Body.css';
import NewHeader from './NewHeader'


const Header = ({size, setShow}) => {

    const buttonAddHeader = <FontAwesomeIcon icon={faBasketShopping} />

    return (
        <>
            <header>


            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <img className="logoNewHead" src={logo} onClick={()=>setShow(true)} alt />
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link"  href="#backImg">Home</a>
                    <a className="nav-link" href="#linkToProducts">Menu</a>
                    <a className="nav-link" href="#location">Find us</a>
                </div>
                </div>   

                <button className="buttonAddHeader" onClick={()=>setShow(false)}>
                <div> {buttonAddHeader} </div>
                <span className='countCartHead'>{size}</span>
                </button>

            </div>
            </nav>


            </header>
            {/* <NewHeader /> */}
            <Body />
        </>
    );
}




export default Header;