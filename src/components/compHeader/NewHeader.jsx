import React from 'react';
import buttonAddHeader from './Header'
import logo from '../../img/clientsPics/logo.gif'
import '../CSS/Body.css';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Body from '../compBody/Section'



function NewHeader({size, setShow}) {
    const buttonAddHeader = <FontAwesomeIcon icon={faBasketShopping} />

    return (
        <header>
{/* <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <img className="logoNewHead" src={logo} alt />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Menu</a>
        <a className="nav-link" href="#">Find us</a>
      </div>
    </div>   

    <button className="buttonAddHeader" onClick={()=>setShow(false)}>
    <div> {buttonAddHeader} </div>
    <span className='countCartHead'>{size}</span>
    </button>

  </div>
</nav> */}

</header>
    );
}

export default NewHeader;