import { useState } from 'react'
import './App.css'

import Timer from './components/timer/Timer'
import Tree from './components/tree/Tree'

type Event = {
  name:string,
  time:string,
}


function App() {
  const [events, setEvents] = useState<Event[]>([]);
  const handleEvents = (newEvent:Event) => {
    const newEvents = events.concat(newEvent)
    console.log(newEvent);
    setEvents(newEvents);
  }
  return (
    <div className="App">
      <Timer handleEvents={handleEvents} />
      <Tree events={events}/>
    </div>
  )
}

export default App
