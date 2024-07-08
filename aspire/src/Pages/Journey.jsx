import React from 'react'
import './Journey.css'
import image1 from "../assets/Licence.png"
import image2 from "../assets/Job Seeker.png"
import image3 from "../assets/Ratings.png"

const Journey = () => {
  return (
    <div className="journey">
      <h1>Empowering Your Journey</h1>
      <div className="journey-flex">
      <div className="journey-container1">
            <div className="top">
              <img src={image1} alt="" />
              <p>Comprehensive Course Database</p>
            </div>
            <div className="content">
              <p>
              Access detailed information on various courses available for A-level students and undergraduates in Sri Lanka. Our database includes minimum entry requirements, curriculum details, and insights into course offerings from different institutions.
              </p>
            </div>
        </div>
        <div className="journey-container1">
          <div className="top">
                <img src={image2} alt="" />
                <p>Personalized Career Guidance</p>
              </div>
              <div className="content">
                <p>
                Get personalized career guidance based on your interests and strengths. Whether you're a student exploring future career paths or an undergraduate, we provide recommendations and resources to help you achieve your desired occupation.
                </p>
              </div>
        </div>
        <div className="journey-container1">
          <div className="top">
                <img src={image3} alt="" />
                <p>Job Market Insights and Trends</p>
              </div>
              <div className="content">
                <p>
                Stay updated on Sri Lanka's job market trends and opportunities. Discover in-demand industries, emerging sectors, and skill requirements to succeed in your career. Our platform offers valuable insights to guide your education and career decisions.
                </p>
              </div>
        </div>
      </div>
    </div>
  )
}

export default Journey;