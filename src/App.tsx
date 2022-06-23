import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar/NavBar'

import Timer from './components/timer/Timer'
import Tree from './components/tree/Tree'

type Event = {
  name:string,
  time:string,
  type:string,
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
      <NavBar />
      <div id="timer">
      <Timer handleEvents={handleEvents} />
      </div>
      <div id="divider" className="divider divider-custom">Records</div>
      <Tree events={events}/>
      <div>
</div>
    </div>
  )
}

export default App
