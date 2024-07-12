import React, { useState } from 'react';
import "./UnderGraduates.css";

import { fields } from '../../data/FieldsData';
import FieldSelection from '../../components/FieldSelection';
import RecomendedProfiles from '../../components/RecomendedProfiles';




function ProfileMaintenance() {
  const [selectedField, setSelectedField] = useState('');
  const [step, setStep] = useState(0);



  const handleFieldChange = (e) => {
    setSelectedField(e.target.value);

  };



  const handleBack = () => {
    if (step === 1) {
      setSelectedField('');
      setStep(0);
    }
  };



  return (
    <div className="page">
      <div className="container">
        {step === 0 && (
          <FieldSelection
            fields={fields}
            selectedField={selectedField}
            handleFieldChange={handleFieldChange}
            handleNext={() => setStep(1)}
          />
        )}




        {step === 1 && selectedField && (
          <RecomendedProfiles
            handleBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}

export default ProfileMaintenance;
