import { useState } from 'react';
import './App.css';
import MinReq from './Components/minRequirements';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MinReq/>
    </>
  )
}

export default App;
