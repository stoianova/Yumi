import React, { useEffect, useState } from 'react';
import "./Timer.css"

function Timer() {
    const [seconds, setSeconds] = useState(59);
    const [minutes, setMinutes] = useState(29);
    // const [timerDown, setTimerDown] = useState(false)


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
    }

    return (
        <div className='timer'>
            <div className="container">
                <div className="timer_container">
                    <h1>Our courier will arrive in:</h1>
                    <h1>
                        {minutes < 10 ? '0' + minutes : minutes} : {seconds < 10 ? '0' +seconds : seconds}
                    </h1>
                    <button onClick={stop}>Stop</button>
                </div>
            </div>
        </div>
    );
}

export default Timer;