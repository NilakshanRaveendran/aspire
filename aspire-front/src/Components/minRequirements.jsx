import React from 'react';
import './minRequirements.css';
import CourseInfo from './courseInfoReq';
import coursecode from '/Images/coursecode.jpg';
import Intake from '/Images/intake.png';
import University from '/Images/University.jpg';
import degree from '/Images/Degree.jpg';
import Years from '/Images/Years.jpg';


function minRequirements(){
    return(
        <>
        <div className='requirement-page'>
        <div className='requirement-page-content'>
        <div className='requirement-page-contentd'>
            <div className='coursedetail-container'>
                <h2>Information Technology and Management</h2>
                
                <div className='course-flex-1'>
                    <div className='flex01'><CourseInfo iconimg ={coursecode} label="CourseCode" value="091"/></div>
                    <div className='flex02'><CourseInfo iconimg ={Intake} label="Intake" value="127 Students"/></div>
                    <div className='flex03'><CourseInfo iconimg ={University} label="University" value="University of Moratuwa"/></div> 
                </div>

                <div className='course-flex-2'>
                    <div className='flex04'><CourseInfo iconimg ={degree} label="Degree Program" value="B.Sc Honors in Information Technology & Management"/></div>
                    <div className='flex05'><CourseInfo iconimg ={Years} label="Years" value="4 years"/></div>
                </div> 
            </div>

            <div className='requirements-container'>
                <h2>Minimum Eligible Requirements</h2>
                
                    <div className='subjects-container'>
                        <div className='subjects-container-content'>
                            <h3>Advanced level Examination</h3>
                            <p>At least a ‘C’ grade in two of the following subjects</p>

                        <div className='sub-list'> 
                            <div className='sub-list-1'>
                                <div className='sub-01'>Higher Mathematics</div>
                                <div className='sub-02'>Mathematics</div>
                                <div className='sub-03'>Chemistry</div>
                                <div className='sub-04'>Geography</div>
                            </div>

                            <div className='sub-list-2'>
                                <div className='sub-05'>Physics</div>
                                <div className='sub-06'>Business Statistics</div>
                                <div className='sub-07'>Logic & Scientific Method</div>
                                <div className='sub-08'>Economics</div>
                            </div>
                            
                            <div className='sub-list-3'>
                                <div className='sub-09'>Information & Communication Technology</div>
                                <div className='sub-10'>Combined Mathematics</div>
                            </div>

                            <div className='sub-list-4'>
                                <div className='sub-11'>Accounting</div>
                            </div>
                        </div>

                        </div>
                    </div>   
                

                    <div className='ol-result'>
                        <div className='ol-result-content'>
                            <h3>Ordinary level Examination</h3>
                            <p>At least a ‘C’ grade in the following subjects</p>
                                <div className='reults-req'>
                                    <div className='result-01'>English</div>
                                    <div className='result-02'>Mathematics</div>
                                </div>
                        </div>
                    </div>
            </div>
            

            <div className='addon-requirement-container'>
                <h2>Additional Requirement</h2>
                <p>Pass the Aptitude Test conducted by the University of Moratuwa</p>
            </div>

            <div className='stream-combinations-container'>
                <h2>General Streams for This Course</h2>
                <p>Choose from the following streams that include the required subjects</p>

                    <div className='streams'>
                    
                        <div className='stream01'>
                        <div className='streams-content'>
                            <h3>Biological Science Stream</h3>
                            <div className='sub01'>
                                <div className='str-sub-01'>Physics</div>
                                <div className='str-sub-02'>Chemistry</div>
                            </div>
                        </div>
                        </div>

                        <div className='stream02'>
                        <div className='streams-content'>
                            <h3>Physical Science Stream</h3>
                            <div className='sub02'>
                                <div className='str-sub-04'>Physics</div>
                                <div className='str-sub-05'>Chemistry</div>
                                <div className='str-sub-06'>Combined Mathematics</div>
                            </div>
                        </div>
                        </div>

                        <div className='stream03'>
                        <div className='streams-content'>
                            <h3>Commerce Stream</h3>
                            <div className='sub03'>
                                <div className='str-sub-07'>Economics</div>
                                <div className='str-sub-08'>Accounting</div>
                                <div className='str-sub-09'>Information & Communication Technology</div>
                            </div>
                        </div>
                        </div>

                        <div className='stream04'>
                        <div className='streams-content'>
                            <h3>Non-stream</h3>
                            <div className='sub04'>
                                <div className='str-sub-10'>Physics</div>
                                <div className='str-sub-11'>Information & Communication Technology</div>
                                <div className='str-sub-12'>Combined Mathematics</div>
                            </div>  
                            <h4>Any combination of the subjects listed above</h4> 
                        </div> 
                        </div>
                    
                    </div>
            </div>

            <div className='note-container'>
                <h2>Important Note</h2>
                <p> 
                    This course admits students based on their Z-score, regardless of their stream. Plan your
                    A-level subjects wisely and choose those that align with your interests and goals. Your
                    admission will be determined by your Z-score, not your stream, so focus on excelling 
                    in your chosen subjects. 
                </p>
            </div>

            
                <button className='back-button-'>Back</button>
           
            
        </div>
        </div>
        </div>
        </>
    )
}

export default minRequirements;