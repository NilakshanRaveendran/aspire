import { useState } from 'react';
import './App.css';
import Recommendation from './Pages/recommendation';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Recommendation/>
    </>
  )
}

export default App;
