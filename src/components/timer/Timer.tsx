import React, { useEffect, useState } from 'react'
import bluebg from "../../static/imgs/blue.png";
import redbg from "../../static/imgs/red.png";
import yellowbg from "../../static/imgs/yellow.png";
import greenbg from "../../static/imgs/green.png";
import purplebg from "../../static/imgs/purple.png";
import lightbluebg from "../../static/imgs/lightblue.png";
// types
type Props = {
    handleEvents: any,
}
type timeOutType = number | undefined;
type timerType = "working" | "shortBreak" | "longBreak";

// helper functions
function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
}

// data sections
const INITIAL_MINUTES = "25";
const INITIAL_SECONDS = "00";
const INITIAL_COUNTS = 2;
const INITIAL_MINUTES_SHORT_BREAK = "05";
const INITIAL_SECONDS_SHORT_BREAK = "00";
const INITIAL_COUNTS_SHORT_BREAK = 300;

const INITIAL_MINUTES_LONG_BREAK = "10";
const INITIAL_SECONDS_LONG_BREAK = "00";
const INITIAL_COUNT_LONG_BREAK = 600;

const DEFAULT_EVENT = "DEFAULT";

const Timer = (props: Props) => {
    const [count, setCount] = useState(INITIAL_COUNTS);
    const [minutes, setMinutes] = useState(INITIAL_MINUTES);
    const [seconds, setSeconds] = useState(INITIAL_SECONDS);
    const [isActive, setIsActive] = useState(false);
    const [timertype, setTimerType] = useState<timerType>("working");
    const [myTimeOutId, setMyTimeOutId] = useState<timeOutType>(undefined);
    const [currEvent, setCurrEvent] = useState("");
    const [startTime, setStartTime] = useState<Date>(new Date);
    const [endTime, setEndTime] = useState<Date>(new Date);



    // functions
    const timePause = () => setIsActive(false);

    const updateTime = () => {
        if (count > 0) {
            const newCount = count - 1;
            const newMinutes = padTo2Digits(Math.floor(newCount / 60));
            const newSeconds = padTo2Digits(Math.floor(newCount % 60));
            setCount(newCount);
            setMinutes(newMinutes);
            setSeconds(newSeconds);
        } else {
            // reach 00:00
            const setEndTime = new Date();
            const timeString = startTime.getHours() + ":" + startTime.getMinutes() + " - " + endTime.getHours() + ":" + endTime.getMinutes();
            console.log(startTime.getHours() + ":" + startTime.getMinutes(), endTime.getHours() + ":" + endTime.getMinutes())
            setIsActive(false);
            props.handleEvents([{
                name: currEvent,
                time: timeString,
            }])
        }
    }

    const timeStart = () => {
        const currentTime = new Date();
        updateTime();
        setIsActive(true);
        setStartTime(currentTime);
    };
    const resetState = () => {
        if (myTimeOutId) clearTimeout(myTimeOutId);
        setIsActive(false);
        setMyTimeOutId(undefined);

        switch (timertype) {
            case "shortBreak": {
                setCount(INITIAL_COUNTS_SHORT_BREAK);
                setMinutes(INITIAL_MINUTES_SHORT_BREAK);
                setSeconds(INITIAL_SECONDS_SHORT_BREAK);
                break;
            }
            case "longBreak": {
                setCount(INITIAL_COUNT_LONG_BREAK);
                setMinutes(INITIAL_MINUTES_LONG_BREAK);
                setSeconds(INITIAL_SECONDS_LONG_BREAK);
                break;
            }
            case "working": {
                setCount(INITIAL_COUNTS);
                setMinutes(INITIAL_MINUTES);
                setSeconds(INITIAL_SECONDS);
                break;
            }
            default: {
                throw "Wrong Timer Type";
            }
        }
    }

    const setShortBreak = () => {
        if (myTimeOutId) clearTimeout(myTimeOutId);
        setIsActive(false);
        setMyTimeOutId(undefined);
        setCount(INITIAL_COUNTS_SHORT_BREAK);
        setMinutes(INITIAL_MINUTES_SHORT_BREAK);
        setSeconds(INITIAL_SECONDS_SHORT_BREAK);
        setTimerType("shortBreak");
    }

    const setLongBreak = () => {
        if (myTimeOutId) clearTimeout(myTimeOutId);
        setIsActive(false);
        setMyTimeOutId(undefined);
        setCount(INITIAL_COUNT_LONG_BREAK);
        setMinutes(INITIAL_MINUTES_LONG_BREAK);
        setSeconds(INITIAL_SECONDS_LONG_BREAK);
        setTimerType("longBreak");
    }

    const setWorking = () => {
        if (myTimeOutId) clearTimeout(myTimeOutId);
        setIsActive(false);
        setMyTimeOutId(undefined);
        setCount(INITIAL_COUNTS);
        setMinutes(INITIAL_MINUTES);
        setSeconds(INITIAL_SECONDS);
        setTimerType("working");
    }

    // hooks
    useEffect(() => {
        if (isActive) {
            const newId: timeOutType = setTimeout(updateTime, 1000)
            setMyTimeOutId(newId)
        } else {
            // pause action
            clearTimeout(myTimeOutId);
            setMyTimeOutId(undefined);
        }
    }, [count, isActive])


    return (
        <>
        <div className="text-input">
            <input type="text" placeholder="Type here..." className="input input-ghost w-full  input-lg input-customize" onChange={(e) => setCurrEvent(e.target.value)} value={currEvent}/>
        </div>
            <h1 className="text-center text-timer">{`${minutes}:${seconds}`}</h1>
            <div className='timer-btn'>
                <button className="btn btn-lg  btn-outline bg-cover btn-customize bg-no-repeat bg-center" style={{ backgroundImage: `url(${redbg})`, backgroundSize:"30% 80%" }} onClick={() => timeStart()}><span></span>Start</button>
                <button className="btn btn-lg  btn-outline bg-cover btn-customize bg-no-repeat bg-center" style={{ backgroundImage: `url(${bluebg})`,backgroundSize:"30% 80%" }} onClick={() => timePause()}>Pause </button>
                <button className="btn btn-lg btn-outline bg-cover btn-customize bg-no-repeat bg-center" style={{ backgroundImage: `url(${yellowbg})`,backgroundSize:"30% 80%"}} onClick={() => resetState()}>Reset </button>
                <button className="btn btn-lg btn-outline bg-cover btn-customize bg-no-repeat bg-center" style={{ backgroundImage: `url(${lightbluebg})`,backgroundSize:"30% 80%" }} onClick={() => setWorking()}>Working </button>
                <button className="btn btn-lg btn-outline bg-cover btn-customize bg-no-repeat bg-center" style={{ backgroundImage: `url(${purplebg})`,backgroundSize:"30% 80%" }} onClick={() => setShortBreak()}>Short Break</button>
                <button className="btn btn-lg  btn-outline bg-cover btn-customize bg-no-repeat bg-center" style={{ backgroundImage: `url(${greenbg})`,backgroundSize:"30% 80%" }} onClick={() => setLongBreak()}>Long Break</button>
            </div>
        </>
    )
}

export default Timer