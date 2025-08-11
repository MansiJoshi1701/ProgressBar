import { useEffect, useState } from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

function App() {
 
  const [value , setValue] = useState(25);

  useEffect(() => {
    
    setInterval(() => {
      setValue(value+1);
    },1000);
    
  },[value])

  return (
    <div className='app'>

      <span>Progress Bar</span>
      <ProgressBar value={value} />

    </div>
  );
}

export default App
