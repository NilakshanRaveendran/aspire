import './courseList.css';
import SearchIcon from '/Images/Search.svg';
import LinkedIn from'/Images/LinkedIn.svg';
import Facebook from '/Images/Facebook.svg';
import website from '/Images/Website.svg';
import UOM from '/Images/UOM.png';

function courseList(){
    return(
        <>
            <div className='courselist-page'>
                <div className='courselist-container'>
                    <div className='course-content-box'>
                        <h2>Explore Available Courses</h2>
                        <p>Discover the range of courses offered by universities in your desired field. Get insights into program 
                        details and entry requirements to make informed decisions about your academic journey.</p>
                    </div>

                    <div className='search-bar-container2'>
                        <input type='text' placeholder='Search for a course'/>
                        <img src={SearchIcon} alt="search" />
                    </div>

                    <div className='courelist-1'>
                        <div className='course'>
                            <div className='logo'>
                                <img src={UOM} alt="university-logo" />
                            </div>

                            <div className='course-details'>
                                <h2>Business Science</h2>
                                <h3>University of Moratuwa - Faculty of Business</h3>

                                <div className='paragraph'>
                                    <p><img src={LinkedIn} alt="linked-logo" /><a href="">View LinkedIn</a></p>
                                    <p><img src={Facebook} alt="fb-logo" /><a href="">View LinkedIn</a></p>
                                    <p><img src={website} alt="website" /><a href="">View LinkedIn</a></p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='courelist-1'>
                        <div className='course'>
                            <div className='logo'>
                                <img src={UOM} alt="university-logo" />
                            </div>

                            <div className='course-details'>
                                <h2>Business Science</h2>
                                <h3>University of Moratuwa - Faculty of Business</h3>

                                <div className='paragraph'>
                                    <p><img src={LinkedIn} alt="linked-logo" /><a href="">View LinkedIn</a></p>
                                    <p><img src={Facebook} alt="fb-logo" /><a href="">View LinkedIn</a></p>
                                    <p><img src={website} alt="website" /><a href="">View LinkedIn</a></p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='courelist-1'>
                        <div className='course'>
                            <div className='logo'>
                                <img src={UOM} alt="university-logo" />
                            </div>

                            <div className='course-details'>
                                <h2>Business Science</h2>
                                <h3>University of Moratuwa - Faculty of Business</h3>

                                <div className='paragraph'>
                                    <p><img src={LinkedIn} alt="linked-logo" /><a href="">View LinkedIn</a></p>
                                    <p><img src={Facebook} alt="fb-logo" /><a href="">View LinkedIn</a></p>
                                    <p><img src={website} alt="website" /><a href="">View LinkedIn</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                    
                    <div className='courelist-1'>
                        <div className='course'>
                            <div className='logo'>
                                <img src={UOM} alt="university-logo" />
                            </div>

                            <div className='course-details'>
                                <h2>Business Science</h2>
                                <h3>University of Moratuwa - Faculty of Business</h3>

                                <div className='paragraph'>
                                    <p><img src={LinkedIn} alt="linked-logo" /><a href="">View LinkedIn</a></p>
                                    <p><img src={Facebook} alt="fb-logo" /><a href="">View LinkedIn</a></p>
                                    <p><img src={website} alt="website" /><a href="">View LinkedIn</a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                        <button className="back-button">Back</button>
                </div>
            </div>

        </>
    )
}

export default courseList;