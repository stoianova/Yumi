import React from 'react';
import '../CSS/Body.css'

function Timer({minutes, seconds}) {

    return (
        <div className='timer'>
            <div className="container">
                <div className="timer_container">
                    <h2>Thank you for the order!</h2>
                    <h1 className='timerH1'>Our courier will arrive in:</h1>
                    <h1 className='timerH1time'>
                        {minutes < 10 ? '0' + minutes : minutes}
                        : {seconds < 10 ? '0' +seconds : seconds}
                    </h1>
                </div>
            </div>
        </div>
    );

}

export default Timer;