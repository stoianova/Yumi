import React from 'react';
import '../CSS/Body.css'

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
        setSeconds(59);
        setMinutes(10);
        return <p>Out courier will be with you very soon!</p>
    }

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