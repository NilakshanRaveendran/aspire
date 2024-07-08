import React from 'react';

const CourseSelection = ({ courses, selectedCourse, handleCourseChange, handleNext, handleBack }) => {
  return (
    <div className='course'>
      <h2>Select your Course of Study</h2>
      <p>Choose your course to access detailed insights into the curriculum, essential skills, and potential career paths. Discover how your course can shape your academic journey and future career opportunities.</p>
      <select value={selectedCourse} onChange={handleCourseChange}>
        <option value="">Select Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course.name}>
            {course.name}
          </option>
        ))}
      </select>
      <button className='next' onClick={handleNext} disabled={!selectedCourse}>Go to Next</button>
      <button className='back' onClick={handleBack}>Back</button>
    </div>
  );
};

export default CourseSelection;
