import React, {useState, useEffect, createContext} from 'react';
import './App.css';
import Header from './components/compHeader/Header';
import ProductsSection from './components/compProducts/ProductsSection'
import Footer from './components/compFooter/Footer';
import Cart from './components/compProducts/Cart';
import Timer from './components/compProducts/Timer';
import TakeAwayForm from './components/compProducts/TakeAwayForm';

export const Basket = createContext();


const App = () => {

  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [timerDown, setTimerDown] = useState(false)

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
    });
    if (isPresent){
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item])

  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if( data.id === item.id)
        ind = index;
    });

    const tempArr = cart;
    tempArr[ind].amount += d;
    if (tempArr[ind].amount === 0 )
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }

  // function changeFromCartToTimer (){
  //   if(show===true){
  //     return <ProductsSection handleClick={handleClick}/>
  //   }
  //   else if (show === false) {
  //     return <Cart cart={cart} setCart={setCart} setShow={setShow} handleChange={handleChange} />
  //   }
  //   else if( show === undefined & timerDown === true){
  //     return <Timer setShow={setShow} setTimerDown={setTimerDown}/>
  //   }
  // }

  {
    timerDown ? <Timer setTimerDown={setTimerDown}/> : <div></div> 
  } 
     

  return (
    <Basket.Provider value={cart}>

      <Header size={cart.length} setShow={setShow}/>
      <h1>{`Hello ${cart}`}</h1>

      {
        show ? <ProductsSection handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} setShow={setShow} handleChange={handleChange} setTimerDown={setTimerDown}/>
      }
      {
        <Timer />
      }
      {/* {
        warning 'Item already added to your cart'
      } */}

      <Footer/>
    


    </Basket.Provider>
  )
 

}

export default App
