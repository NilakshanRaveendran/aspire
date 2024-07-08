import './studentFieldSelect.css';
import SearchIcon from '../../public/Images/Search.svg';

function studentFieldSelect() {

  const handleClick = () => {
      console.log('Okey!');
  };


    return (
      <>
      <div className='studentFieldSelect'>
        <div className='content-box-1'>
                <h2>Select your Field</h2>
                <p>Choose your desired field, and we will guide you with available university courses, 
                   entry requirements, and the past five years' entry level Z-scores.</p>

               <div className='search-bar-container'>
                    <input type='text' placeholder='Search your field'/>
                    <img src={SearchIcon} alt="search" />
               </div>

               <div className='button-container1'>
                    <button onClick={handleClick} className='go-to-next'>Go To next</button>
               </div>
            
               <div className='button-container2'>
                    <button onClick={handleClick} className='back'>Back</button>
               </div>

        </div>
        </div>
      </>
    )
  }
  
  export default studentFieldSelect;
