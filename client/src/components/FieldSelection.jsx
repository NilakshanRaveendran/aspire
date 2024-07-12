import React from 'react';

const FieldSelection = ({ fields, selectedField, handleFieldChange, handleNext }) => {
  return (
    <div className='university'>
      <h2>Select your Field</h2>
      <p>Select your field to receive tailored advice for enhancing your profile and developing relevant skills, ensuring you attract the right opportunities.</p>
      <select value={selectedField} onChange={handleFieldChange}>
        <option value="">Select Your Field</option>
        {fields.map((field, index) => (
          <option key={index} value={field.name}>
            {field.name}
          </option>
        ))}
      </select>
      <button className='next' onClick={handleNext} disabled={!selectedField}>Go to Next</button>
      <button className='back'>Back</button>
    </div>
  );
};

export default FieldSelection;