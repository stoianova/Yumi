import React, { useState, useContext, createContext } from 'react';
import './TakeAwayForm.css'
import './DeliveryForm.css';
import { Basket } from '../../App'


<<<<<<< HEAD
function TakeAwayForm({setAway, setCart, setSeconds, setMinutes, setTimerDown}) {
=======
function TakeAwayForm({setAway, setCart, cart,  setTimerDown}) {
>>>>>>> c0da81378ff06679d0ab43159755065cf1132f35

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
                    console.log(data)
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });


            setTimeout(function another(){
                setCart([]);
                let inputs = document.querySelectorAll('input')
                setCart([])
                setMinutes(29)
                setSeconds(59)
                setTimerDown(true)
                for( let some of inputs){
                    some.value = ''
                }
            }, 0)
    }
let date = new Date()
let time = `${date.getHours()}:${date.getMinutes()}`

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

<<<<<<< HEAD
                    <label htmlFor="time">Time to be ready at:</label>
                    <p className='smallText'>Let us know when you need your order: *</p>
                    <input type="time" id="time" defaultValue={time}/> 
=======
                    <label htmlFor="time">Time to be ready at: *</label>
                    <p className='smallText'>Let us know when you need your order:</p>
                    <input type="time" id="time"/> 
>>>>>>> c0da81378ff06679d0ab43159755065cf1132f35

                    <label htmlFor="comments">Comments: *</label>
                    <input type="text" id="comments"  defaultValue={"Have a good day!"} /> 

                    </div>
            </div>

            <div className="takeBtns">
                <div className="btnBack" onClick={() => setAway(true)} >Back</div>
                <button type="submit" id="submitButton" disabled>Send</button>
            </div>    

            </form>
        </div>
    );

    };

export default TakeAwayForm;