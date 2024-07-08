import React, { useState } from 'react';
import "./UnderGraduates.css";
import { universities, opportunities } from '../../data/UnderGraduatesData'; 
import UniversitySelection from '../../components/UniversitySelection';
import CourseSelection from '../../components/CourseSelection';
import SkillSelection from '../../components/SkillSelection';
import OpportunityList from '../../components/OpportunityList';

function UnderGraduates() {
  const [selectedUniversity, setSelectedUniversity] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [step, setStep] = useState(0);
  const [skillSearch, setSkillSearch] = useState('');
  const [showHighOpportunities, setShowHighOpportunities] = useState(false);
  const [showMediumOpportunities, setShowMediumOpportunities] = useState(false);
  const [showLowOpportunities, setShowLowOpportunities] = useState(false);

  const handleUniversityChange = (e) => {
    setSelectedUniversity(e.target.value); 
    setSelectedCourse('');
    setSelectedSkill('');
  };

  const handleCourseChange = (e) => {
    const courseName = e.target.value;
    setSelectedCourse(courseName);
    setSelectedSkill('');
  };

  const handleSkillSelection = (skill) => {
    if (selectedSkill === skill.name) {
      setSelectedSkill(''); 
    } else {
      setSelectedSkill(skill.name);
    }
  };

  const handleSkillSearch = (e) => {
    setSkillSearch(e.target.value);
  };

  const filteredSkills = universities
    .find(uni => uni.name === selectedUniversity)
    ?.courses.find(course => course.name === selectedCourse)
    ?.skills.filter(skill =>
      skill.name.toLowerCase().includes(skillSearch.toLowerCase())
    );

  const handleBack = () => {
    if (step === 1) {
      setSelectedCourse('');
      setSelectedSkill('');
      setStep(0); 
    } else if (step === 2) {
      setSelectedSkill('');
      setStep(1);
    } else if (step === 3) {
      setStep(2); 
    }
  };

  const handleToggleHigh = () => {
    setShowHighOpportunities(!showHighOpportunities);
    setShowMediumOpportunities(false);
    setShowLowOpportunities(false);
  };

  const handleToggleMedium = () => {
    setShowMediumOpportunities(!showMediumOpportunities);
    setShowHighOpportunities(false);
    setShowLowOpportunities(false);
  };

  const handleToggleLow = () => {
    setShowLowOpportunities(!showLowOpportunities);
    setShowHighOpportunities(false);
    setShowMediumOpportunities(false);
  };

  return (
    <div className="page">
      <div className="container">
        {step === 0 && (
          <UniversitySelection 
            universities={universities} 
            selectedUniversity={selectedUniversity}
            handleUniversityChange={handleUniversityChange}
            handleNext={() => setStep(1)}
          />
        )}

        {step === 1 && selectedUniversity && (
          <CourseSelection 
            courses={universities.find(uni => uni.name === selectedUniversity)?.courses} 
            selectedCourse={selectedCourse}
            handleCourseChange={handleCourseChange}
            handleNext={() => setStep(2)}
            handleBack={handleBack}
          />
        )}

        {step === 2 && selectedCourse && (
          <SkillSelection 
            skills={filteredSkills} 
            selectedSkill={selectedSkill}
            handleSkillSelection={handleSkillSelection}
            skillSearch={skillSearch}
            handleSkillSearch={handleSkillSearch}
            handleNext={() => setStep(3)}
            handleBack={handleBack}
          />
        )}

        {step === 3 && selectedSkill && (
          <OpportunityList 
            opportunities={opportunities[selectedSkill]} 
            showHighOpportunities={showHighOpportunities}
            showMediumOpportunities={showMediumOpportunities}
            showLowOpportunities={showLowOpportunities}
            handleToggleHigh={handleToggleHigh}
            handleToggleMedium={handleToggleMedium}
            handleToggleLow={handleToggleLow}
            handleBack={handleBack}
          />
        )}
      </div>
    </div>
  );
}

export default UnderGraduates;
