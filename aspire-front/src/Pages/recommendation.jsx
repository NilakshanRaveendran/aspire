import './recommendation.css';
import WebsiteLink from '../Components/websiteLink';
import HackerRank from '../../public/Images/hackerrank.png';
import Udemy from '../../public/Images/udemy.png';
import Coursera from '../../public/Images/coursera.png';
import Leetcode from '../../public/Images/leet.png';
import Geeks from '../../public/Images/geeks.png';
import Likedin from '../../public/Images/linkedin.png';
import w3 from '../../public/Images/w3schools.png';
import khan from '../../public/Images/khan.png';
import codewar from '../../public/Images/codewars.png';
import Sololearn from '../../public/Images/sololearn.png';
import UOm from '../../public/Images/UOM-.png';
import freecodecamp from '../../public/Images/freecode.png';


function recommendation(){
    return(
        <>
        <div className="recom-page">
            <div className="recom-content">
                <h2>Recommended <span className='gradient-h2'>Websites</span> to<br></br>
                develop your skills</h2>
                <div className="recom-content-box">
                    <div className="recom-content-box-01">
                        <div className="list-01"><WebsiteLink logoimg={HackerRank} name="HackerRank" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                        <div className="list-02"><WebsiteLink logoimg={Udemy} name="Udemy" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                        <div className="list-03"><WebsiteLink logoimg={Coursera} name="Coursera" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                    </div>

                    <div className="recom-content-box-02">
                        <div className="list-01"><WebsiteLink logoimg={Leetcode} name="LeetCode" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                        <div className="list-02"><WebsiteLink logoimg={Geeks} name="GeeksforGeeks" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                        <div className="list-03"><WebsiteLink logoimg={Likedin} name="LinkedIn" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                    </div>

                    <div className="recom-content-box-03">
                        <div className="list-01"><WebsiteLink logoimg={w3} name="w3schools" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                        <div className="list-02"><WebsiteLink logoimg={khan} name="khan academy" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                        <div className="list-03"><WebsiteLink logoimg={codewar} name="codewars" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                    </div>

                    <div className="recom-content-box-04">
                        <div className="list-01"><WebsiteLink logoimg={Sololearn} name="sololearn" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                        <div className="list-02"><WebsiteLink logoimg={UOm} name="UOM" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                        <div className="list-03"><WebsiteLink logoimg={freecodecamp} name="freecodecamp" descr="Contrary to popular belief,
                        Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text"></WebsiteLink></div>
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        
        
        
        </>
    )
};

export default recommendation;