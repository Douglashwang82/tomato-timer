import React from 'react'

type Event = {
    name:string,
    time:string,
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
            return(
                <li className="step li-div" key={key}>
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