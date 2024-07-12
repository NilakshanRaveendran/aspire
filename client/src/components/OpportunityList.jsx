import React from 'react';
import LinkedIn from "../assets/icons/LinkedIn.png";
import Website from "../assets/icons/Website.png";

const OpportunityList = ({ opportunities, showHighOpportunities, showMediumOpportunities, showLowOpportunities, handleToggleHigh, handleToggleMedium, handleToggleLow, handleBack }) => {
  return (
    <div className='opportunities'>
      <h2>Explore Career Opportunities</h2>
      <p>Discover career paths at high, medium, and low-level companies, and learn the skills needed to succeed in each. Understand the job market trends and opportunities available in your field of study.</p>
      <div className='level'>
        <h3 className='h3' onClick={handleToggleHigh} style={{ cursor: 'pointer' }}>High-Level Companies
          <span className="toggle-arrow">
            {showHighOpportunities ? '▲' : '▼'}
          </span>
        </h3>
        <p className='p'>Explore top-tier companies with competitive salaries, advanced technology, and prestigious projects. Learn the high-demand skills needed to succeed in these leading firms.</p>
        {showHighOpportunities && (
          <ul>
            {opportunities.high.map((opportunity, index) => (
              <li key={index}>
                <img className="img" src={opportunity.image} alt={opportunity.company} />
                <div className="opp-details">
                  <div className="company">
                    <h2>{opportunity.name}</h2>
                    <p>{opportunity.company}</p>
                    <p>{opportunity.address}</p>
                  </div>
                  <div className="social-media">
                    <div className="linkedin">
                      <img className='img' src={LinkedIn} alt="LinkedIn"/>
                      <p><a href={opportunity.linkedin} target="_blank" rel="noopener noreferrer">View LinkedIn</a></p>
                    </div>
                    <div className="website">
                      <img className='img' src={Website} alt="Website"/>
                      <p><a href={opportunity.webpage} target="_blank" rel="noopener noreferrer">View Website</a></p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='level'>
        <h3 className='h3' onClick={handleToggleMedium} style={{ cursor: 'pointer' }}>Medium-Level Companies
          <span className="toggle-arrow">
            {showMediumOpportunities ? '▲' : '▼'}
          </span>
        </h3>
        <p className='p'>Discover career paths at mid-sized companies offering innovation and stability. Understand the skills and experiences valued by these firms to advance in a dynamic environment.</p>
        {showMediumOpportunities && (
          <ul>
            {opportunities.medium.map((opportunity, index) => (
              <li key={index}>
                <img className="img" src={opportunity.image} alt={opportunity.company} />
                <div className="opp-details">
                  <div className="company">
                    <h2>{opportunity.name}</h2>
                    <p>{opportunity.company}</p>
                    <p>{opportunity.address}</p>
                  </div>
                  <div className="social-media">
                    <div className="linkedin">
                      <img className='img' src={LinkedIn} alt="LinkedIn"/>
                      <p><a href={opportunity.linkedin} target="_blank" rel="noopener noreferrer">View LinkedIn</a></p>
                    </div>
                    <div className="website">
                      <img className='img' src={Website} alt="Website"/>
                      <p><a href={opportunity.webpage} target="_blank" rel="noopener noreferrer">View Website</a></p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='level'>
        <h3 className='h3' onClick={handleToggleLow} style={{ cursor: 'pointer' }}>Emerging Companies
          <span className="toggle-arrow">
            {showLowOpportunities ? '▲' : '▼'}
          </span>
        </h3>
        <p className='p'>Find opportunities at smaller companies to gain hands-on experience and grow rapidly. Learn about the versatile skills needed to thrive and contribute significantly.</p>
        {showLowOpportunities && (
          <ul>
            {opportunities.low.map((opportunity, index) => (
              <li key={index}>
                <img className='img' src={opportunity.image} alt={opportunity.company} />
                <div className="opp-details">
                  <div className="company">
                    <h2>{opportunity.name}</h2>
                    <p>{opportunity.company}</p>
                    <p>{opportunity.address}</p>
                  </div>
                  <div className="social-media">
                    <div className="linkedin">
                      <img className='img' src={LinkedIn} alt="LinkedIn"/>
                      <p><a href={opportunity.linkedin} target="_blank" rel="noopener noreferrer">View LinkedIn</a></p>
                    </div>
                    <div className="website">
                      <img className='img' src={Website} alt="Website"/>
                      <p><a href={opportunity.webpage} target="_blank" rel="noopener noreferrer">View Website</a></p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className='back' onClick={handleBack}>Back</button>
    </div>
  );
};

export default OpportunityList;