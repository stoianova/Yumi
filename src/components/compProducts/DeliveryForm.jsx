import React, {useContext} from 'react';
import './DeliveryForm.css';
// import {myObj} from './Fetch/MyFetch';
import {validName, validNumber, validStreet, validBuildNum, validApart} from './RegEx';
import Cart from './Cart';
import App, { Basket } from '../../App'
import Timer from './Timer'


function DeliveryForm({setDelivery, cart, setTimerDown}) {

    const basket = useContext(Basket);

    function firstFun(){
        let name = document.querySelector ('#name');
        let number = document.querySelector ('#number');
        let street = document.querySelector ('#street');
        let build = document.querySelector ('#build');
        let apart = document.querySelector ('#apart');


        if(validNumber.test(number.value) && validName.test(name.value) && validStreet.test(street.value) && validBuildNum.test(build.value) && validApart.test(apart.value)){
            submitButton.removeAttribute('disabled')
        }
        // else if(validName.test(name)){
        //     myAlert.innerHTML = '<p>Your name is invalid</p>';
        // }
        // else if(validNumber.test(number)){
        //     myAlert.innerHTML = '<p>Your number should starts from 0*********</p>';
        // }        
        // else if(validStreet.test(street)){
        //     myAlert.innerHTML = '<p>Your street should contain letters only</p>';
        // }        
        // else if(validBuildNum.test(build)){
        //     myAlert.innerHTML = '<p>Your building number should contain digits only</p>';
        // }
        // else if(validApart.test(apart)){
        //     myAlert.innerHTML = '<p>Your apartment should contain digits only</p>';
        // }
        else{
            submitButton.setAttribute('disabled', true)
        }   
    }


        function secondFun(e){
            e.preventDefault()
            let name = document.querySelector ('#name');
            let number = document.querySelector ('#number');
            let street = document.querySelector ('#street');
            let build = document.querySelector ('#build');
            let apart = document.querySelector ('#apart');
            let comments = document.querySelector ('#comments');

            let myObj = {
                nameNew: '',
                numberNew: '',
                streetNew: '',
                buildNew: '',
                apartNew: '',
                commentsNew: ''
            }

            myObj.nameNew = name.value
            myObj.numberNew = number.value
            myObj.streetNew = street.value
            myObj.buildNew = build.value
            myObj.apartNew = apart.value
            myObj.commentsNew = comments.value

            // let newArr = [cart.push(myObj)]
            // console.log(cart); // выводит в консоль массив товаров в корзине
            // console.log(newArr);
            // localStorage.setItem('.order', JSON.stringify(myObj)); это убираю и пишу ниже:

            fetch('https://coffeemarket-775b0b283547.herokuapp.com/main/order/delivery', { 
                method: 'POST', 
                headers: { 'Content-Type': 'application/json' }, 
                body: JSON.stringify(cart) 
            }) 
            .then(response => response.json()) 
            .then(data => console.log(data)) 
            .catch(error => console.error(error));

            // let jsonCart = JSON.stringify(cart)
            // localStorage.setItem('.orderDel', JSON.stringify(jsonCart)); //выводит массив с двумя объектами: данные клиента, корзину
            // console.log(jsonCart);

            let timer = document.querySelector('.timer')
            timer.removeAttribute('hidden')


            setTimeout(function another(){
                let inputs = document.querySelectorAll('input')
                for( let some of inputs){
                    some.value = ''
                }
            }, 0)   }

    return (
        <div className="takeAwayForm">
            <form action='' onChange={firstFun} onSubmit={secondFun}>
                    <div className="orderText"> Your details for DELIVERY </div>

                {/* <div className='biggerDelForm'> */}
                <div className="innerFormDiv">
                <div className='orderForm'>

 
                <label htmlFor="name">Type your name</label>
                <input type="text" name="name" id="name"/> 

                <label htmlFor="number">Enter your phone number</label>
                <input type="number" name="number" id="number"/> 

                <label htmlFor="street">Street</label>
                <input type="text" name="street" id="street"/> 

                <label htmlFor="build">Building number</label>
                <input type="text" name="build" id="build"/> 

                <label htmlFor="apart">Apartment number</label>
                <input type="number" name="apart" id="apart"/> 

                <label htmlFor="comments">Comments:</label>
                <input type="text" name="comments" id="comments"/> 
                
                </div>
            </div>

                <div className="takeBtns">

                    <div className="btnBack" onClick={() => setDelivery(true)} >Back</div>
                    <input type="submit" id="submitButton" value="Send" disabled /> 
                    
                    <button onClick={() => setTimerDown(true)}>button</button>
                </div>

            </form>

            </div>
    );
}

export default DeliveryForm;