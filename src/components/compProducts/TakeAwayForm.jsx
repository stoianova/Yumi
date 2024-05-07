import React, { useState, useContext, createContext } from 'react';
import './TakeAwayForm.css'
import './DeliveryForm.css';
// import {validName, validNumber} from './RegEx';
import Cart from './Cart';
// import {myObj} from './Fetch/MyFetch';
import Timer from './Timer'
import App, { Basket } from '../../App'


function TakeAwayForm({setAway, cart,  setTimerDown}) {

    const basket = useContext(Basket);

    function firstFun(){
        let name = document.querySelector ('#name');
        let number = document.querySelector ('#number');
        let time = document.querySelector ('#time');
        let comments = document.querySelector ('#comments');


        if(number.value.length >=1 && name.value.length >=1 && time.value.length >=1 && comments.value.length >=1){
            submitButton.removeAttribute('disabled')
        }
        else{
            submitButton.setAttribute('disabled', true)
        }   }
 
        function secondFun(e){
            e.preventDefault()
            let name = document.querySelector ('#name');
            let number = document.querySelector ('#number');
            let time = document.querySelector ('#time');
            let comments = document.querySelector ('#comments');

            let myObj = {
                nameNew: '',
                numberNew: '',
                timeNew: '',
                commentsNew: ''
            }
            myObj.nameNew = name.value
            myObj.numberNew = number.value
            myObj.timeNew = time.value
            myObj.commentsNew = comments.value

            fetch('https://coffeemarket-775b0b283547.herokuapp.com/main/order/takeAway', {
                method: 'POST',
                mode: 'cors',
                credentials: 'omit',
                body: JSON.stringify(
                    {
                        nameNew: 'Иван Иванов',
                        numberNew: '380967986930',
                        timeNew: '14:00',
                        commentsNew: 'Без острых специй, пожалуйста'
                    }
                ),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                    // console.log(cart);
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });

            let timer = document.querySelector('.timer')
            timer.removeAttribute('hidden')


            setTimeout(function another(){

                let inputs = document.querySelectorAll('input')
                for( let some of inputs){
                    some.value = ''
                }
            }, 0)
    }

    return (
        <div className="takeAwayForm">
            <form action='' className='delTypeForm' onChange={firstFun} onSubmit={secondFun} >
                    <div className="orderText"> Your details for TAKE AWAY </div>

                <div className="innerFormDiv">
                    <div className='orderForm'>

                    <label htmlFor="name">Type your name *</label>
                    <input type="text" id="name" />

                    <label htmlFor="number">Enter your phone number *</label>
                    <input type="tel" id="number" /> 

                    <label htmlFor="time">Time to be ready at:</label>
                    <p className='smallText'>We performing your order as soon as possible <br />
                    However you can let us know if you need your order on specific time</p>
                    <input type="time" id="time"/> 

                    <label htmlFor="comments">Comments:</label>
                    <input type="text" id="comments"/> 

                    </div>
            </div>

            <div className="takeBtns">
                <div className="btnBack" onClick={() => setAway(true)} >Back</div>
                <input type="submit" id="submitButton" value="Send" disabled/> 
                {/* <button onClick={() => setTimerDown(true)}>button</button> */}
            </div>    

            </form>
        </div>
    );

    };

export default TakeAwayForm;