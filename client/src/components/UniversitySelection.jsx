import React from 'react';

const UniversitySelection = ({ universities, selectedUniversity, handleUniversityChange, handleNext }) => {
  return (
    <div className='university'>
      <h2>Select your University</h2>
      <p>Choose your university to unlock tailored information about the courses and opportunities it offers. Start personalizing your career guidance experience today.</p>
      <select value={selectedUniversity} onChange={handleUniversityChange}>
        <option value="">Select Your University</option>
        {universities.map((uni, index) => (
          <option key={index} value={uni.name}>
            {uni.name}
          </option>
        ))}
      </select>
      <button className='next' onClick={handleNext} disabled={!selectedUniversity}>Go to Next</button>
      <button className='back'>Back</button>
    </div>
  );
};

export default UniversitySelection;
