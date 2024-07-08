import React from 'react';

const SkillSelection = ({ skills, selectedSkill, handleSkillSelection, skillSearch, handleSkillSearch, handleNext, handleBack }) => {
  return (
    <div className='skills'>
      <h2>Here are Your Skills</h2>
      <p>Discover the key skills you'll develop through your chosen course at your selected university. Understand how your education prepares you for the job market and future career opportunities.</p>
      <input
        type="text"
        placeholder="Add More Skills"
        value={skillSearch}
        onChange={handleSkillSearch}
      />
      <ul>
        {skills?.map((skill, index) => (
          <li
            key={index}
            onClick={() => handleSkillSelection(skill)}
            className={selectedSkill === skill.name ? 'selected' : ''}
          >
            <div className="dir">
              <img src={skill.image} alt={skill.name} />
              <h2>{skill.name}</h2>
            </div>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
      <button className='next' onClick={handleNext} disabled={!selectedSkill}>Go to Next</button>
      <button className='back' onClick={handleBack}>Back</button>
    </div>
  );
};

export default SkillSelection;
