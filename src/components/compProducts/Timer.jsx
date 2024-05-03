import React, { useEffect, useState } from 'react';
import "./Timer.css"

function Timer() {
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

    const stop =() => {
        clearInterval(timer);
        // return <h2> Courier will be with you very soon! Thank you for waiting </h2>
    }

    const restart = () => {
        setSeconds(0);
        setMinutes(0);
        // useEffect === false;
        // return <p>Out courier will be with you very soon!</p>
    }

    // let check = document.querySelector('.timer').hasAttribute('hidden')

    // if(check != true){
    //     setMinutes (10)
    //     setSeconds (59)
    // }

    return (
        <div className='timer' hidden>
            <div className="container">
                <div className="timer_container">
                    <h2>Thank you for the order!</h2>
                    <h1>Our courier will arrive in:</h1>
                    <h1>
                        {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' +seconds : seconds}
                    </h1>
                    {/* <button onClick={stop}>Stop</button>
                    <button onClick={restart}>restart</button> */}
                </div>
            </div>
        </div>
    );

}

export default Timer;