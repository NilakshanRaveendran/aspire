import React from 'react';
import './Home.css';
import main from "../assets/main.png"
import Journey from './Journey';
import Faq from './Faq';

const Home = () => {
  return (
    <>
    <div className="home">
        <div className="home-container1">
            <h1>No More <name>Confusioin,</name><br />just Personalized Paths</h1>
            <h3>
                Discover your future with us. We provide personalized career guidance for students and undergraduates, ensuring clear and confident steps towards a bright career.
            </h3>
            <button className="button1">Students</button>
            <button className="button2">Undergraduates</button>
            <br />
            <button className="button3">Profile Maintenance</button>
        </div>
        <div className="home-container2">
          <img src={main} alt="image" />
        </div>
    </div>

    <Journey />
    <Faq />
    </>
  )
}

export default Home;