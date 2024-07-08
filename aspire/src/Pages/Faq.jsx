import React from 'react'
import './Faq.css'

const Faq = () => {
  return (
    <div className="faq">
        <div className="faq-contain">
                <h3>Frequently Asked Questions</h3>
                <br />
                <h4>Find answers to common questions and concerns.</h4>
                <br />
        </div>
        <hr/>
        <div className="faq-contain1">
            <h5>How does it work?</h5>
            <p>
            The platform offers course details, career guidance, job trends, skill development, and industry connections for 
            school students, Undergraduate and educators.
            </p>

            <hr/>

            <h5>Is it free?</h5>
            <p>
            Yes, the platform is free, providing valuable educational and career resources at no cost to students.
            </p>
            <hr/>

            <h5>How can students access personalised career advice on the platform?</h5>
            <p>
            Students can access personalized career advice through interactive tools, assessments, and consultations with 
            career counselors available on the platform.
            </p>
            <hr/>
        </div>

        <div className="faq-contain">
                <h3>Still have questions?</h3>
                <br />
                <h4>Contact our support team for further assistance</h4>
                <br />
                <button className="button">Contact</button>
        </div>
        
        
    </div>
  )
}

export default Faq;