import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
 
  const [value , setValue] = useState(0);
  const [complete , setComplete] = useState(false);
  

  useEffect(() => {
    
    setInterval(() => {
      setValue((val) => val+1);
    },100);

    
  },[])

  return (
    <div className='app'>

      <span>Progress Bar</span>
      <ProgressBar value={value}  setComplete={setComplete}/>
      <span>{complete ? "Complete!" : "Loading..."}</span>

    </div>
  );
}

export default App
