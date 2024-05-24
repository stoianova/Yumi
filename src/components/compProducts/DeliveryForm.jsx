import React, {useContext} from 'react';
import './DeliveryForm.css';
import { Basket } from '../../App'



function DeliveryForm({setDelivery, setCart, setTimerDown}) {

    const basket = useContext(Basket);

    function firstFun(){
        let name = document.querySelector ('#name');
        let number = document.querySelector ('#number');
        let street = document.querySelector ('#street');
        let build = document.querySelector ('#build');
        let apart = document.querySelector ('#apart');
        let comments = document.querySelector ('#comments');


        if(number.value.length === 12 && name.value.length >=1 && street.value.length >=1 && build.value.length >=1 && apart.value.length >=1 && comments.value.length >=1 ){
            submitButton.removeAttribute('disabled')
        }
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


            fetch('https://coffeemarket-775b0b283547.herokuapp.com/main/order/delivery', {
                method: 'POST',
                mode: 'cors',
                credentials: 'omit',
                body: JSON.stringify(
                    {
                        nameNew: "Иван Иванов",
                        numberNew: "380967986930",
                        streetNew: "Ленина",
                        buildNew: "12",
                        apartNew: "34",
                        commentsNew: "Позвоните по прибытию"
                    }
                ),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
                 .then((response) => response.json())
                 .then((data) => {
                    console.log(data);
                 })
                 .catch((err) => {
                    console.log(err.message);
                 });


            let timer = document.querySelector('.timer')
            timer.removeAttribute('hidden')


            setTimeout(function another(){
                setCart([])
                setMinutes(29)
                setSeconds(59)
                let inputs = document.querySelectorAll('input')
                for( let some of inputs){
                    some.value = ''
                }
            }, 0)   }

    return (
        <div className="takeAwayForm">
        
            <form action='' className='delTypeForm' onChange={firstFun} onSubmit={secondFun}>
                    <div className="orderText"> Your details for DELIVERY  </div>

                <div className="innerFormDiv">
                <div className='orderForm'>

 
                <label htmlFor="name">Type your name *</label>
                <input type="text" name="name" id="name"/> 

                <label htmlFor="number">Enter your phone number *</label>
                <input type="number" name="number" id="number"/> 

                <label htmlFor="street">Street *</label>
                <input type="text" name="street" id="street"/> 

                <label htmlFor="build">Building number *</label>
                <input type="text" name="build" id="build"/> 

                <label htmlFor="apart">Apartment number *</label>
                <input type="number" name="apart" id="apart"/> 

                <label htmlFor="comments">Comments: *</label>
                <input type="text" name="comments" id="comments" defaultValue={"Have a good day!"}/> 
                
                </div>
            </div>

                <div className="takeBtns">

                    <div className="btnBack" onClick={() => setDelivery(true)} >Back</div>
                    <button type="submit" id="submitButton" disabled>Send</button>
                </div>

            </form>

            </div>
    );
}

export default DeliveryForm;