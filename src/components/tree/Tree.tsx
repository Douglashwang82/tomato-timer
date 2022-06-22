import React from 'react'

type Event = {
    name:string,
    time:string,
    type:string,
}

type Props = {
    events: Event[],
}

const Tree = (props: Props) => {
    return (
        <>
        <div className="steps-div">
        <ul className="steps steps-vertical steps-customize">
        {props.events.map((event, key) =>{
            let className = "";
            switch(event.type) {
                case "working":{
                    className = "step step-primary li-div";
                    break;
                }
                case "shortBreak":{
                    className = "step li-div isBreak";
                    break;
                }
                case "longBreak":{
                    className = "step li-div isBreak";
                    break;
                }
                default:{
                    className = "step";
                    break;
                }
            }
            return(
                <li className={className} key={key}>
                <div>
                <p>{event.name}</p>
                <label>{event.time}</label>
                </div>
            </li>
            )
        })}
        </ul>
        </div>
        </>
    )
}

export default Tree