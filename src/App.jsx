import React, {useState, useEffect, createContext} from 'react';
import './App.css';
import Header from './components/compHeader/Header';
import ProductsSection from './components/compProducts/ProductsSection'
import Footer from './components/compHeader/Footer';
import Cart from './components/compProducts/Cart';
import Timer from './components/compProducts/Timer';
import TakeAwayForm from './components/compProducts/TakeAwayForm';

export const Basket = createContext();


const App = () => {

  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  
    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(30);
    const [timerDown, setTimerDown] = useState(false);


    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds-1)
            if(seconds===0){
                setMinutes(minutes-1)
                setSeconds(59);
            }
        },1000)
        return () => clearInterval(timer);
    })


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

  
     

  return (
    <Basket.Provider value={cart}>
      <div className='mediaDivFirst'>
      <Header size={cart.length} setShow={setShow}/>
<ProductsSection handleClick={handleClick} />
      {
        show && <Cart setSeconds={setSeconds}  setMinutes={setMinutes} cart={cart} 
        setCart={setCart} setShow={setShow} handleChange={handleChange} setTimerDown={setTimerDown}/>
      }
      </div>
      
      {
    timerDown && <Timer minutes={minutes} seconds={seconds}/>  
  } 

      <Footer/>
    
    </Basket.Provider>
  )
 

}

export default App
