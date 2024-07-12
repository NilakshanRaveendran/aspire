import { useState } from 'react'
import './App.css'
import UnderGraduates from './Pages/undergraduates/UnderGraduates';
import ProfileMaintenance from './Pages/undergraduates/ProfileMaintenance';

function App() {

  return (
    <>
      <div className="app">
        {/* <h2>aspire.</h2> */}
        <UnderGraduates />
        <ProfileMaintenance/>

      </div>

    </>
  )
}

export default App;
