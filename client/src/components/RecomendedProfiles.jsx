import React from 'react';
import LinkedIn from "../assets/icons/Field/LinkedIn.png"
import Medium from "../assets/icons/Field/Medium.png"
import StackOverflow from "../assets/icons/Field/StackOverflow.png"

const RecomendedProfiles = ({ handleBack }) => {
    return (
        <div className='skills field'>
            <h2>Recomended Profiles</h2>
            <p>Based on your field, build and maintain these key profiles to showcase your skills, connect with industry professionals, and access new opportunities.</p>

            <input
                type="text"
                placeholder="Search"

            />
            <ul>
                <li>
                    <div className="dir">
                        <img src={LinkedIn} alt={LinkedIn} />
                        <div className='toggle'>
                            <h2 style={{ cursor: 'pointer' }}>LinkedIn</h2>
                            <span >
                                {'▼'}
                            </span>
                        </div>

                    </div>
                    <p className='p'>Build a professional network, highlight your career achievements, and keep your profile updated with your latest experience and skills.</p>

                </li>
                <li>
                    <div className="dir">
                        <img src={Medium} alt={Medium} />
                        <div className='toggle'>
                            <h2 style={{ cursor: 'pointer' }}>Medium</h2>
                            <span >
                                {'▼'}
                            </span>
                        </div>
                    </div>
                    <p className='p'>Share your knowledge and insights through well-written articles, engaging with readers and providing valuable content in your field.</p>

                </li>
                <li>
                    <div className="dir">
                        <img src={StackOverflow} alt={StackOverflow} />
                        <div className='toggle'>
                            <h2 style={{ cursor: 'pointer' }}>Stack Overflow</h2>
                            <span >
                                {'▼'}
                            </span>
                        </div>
                    </div>
                    <p className='p'>Build a professional network, highlight your career achievements, and keep your profile updated with your latest experience and skills.</p>

                </li>
            </ul>

            <button className='back' onClick={handleBack}>Back</button>
        </div>
    );
};

export default RecomendedProfiles;
