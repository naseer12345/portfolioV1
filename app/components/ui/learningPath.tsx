import React from 'react';

function LearningPath() {
  return (
    <div className='mt-20' >
      
    <h1 className='font-bold text-xl text-white mb-5 mt-5'>Certifications & Online Courses</h1>
    <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 text-white"> <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/share/101qYw3@ObDYFloc4u7PliKRibA8DEY4Upv9fWLGbeIeFiMA6__0VzQ6TlsGJ12ShK189ejGnw==/">The Complete Web Development Bootcamp <i>by Angela Yu (Udemy)</i> </a> </h3>

       
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 text-white"> CS50: Introduction to Computer Science  <i>(Harvard University)</i> </h3>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 text-white"> <a target="_blank" rel="noopener noreferrer" href="https://www.udemy.com/share/101XJA3@WGIegRwJLKYomYjTEqmTNBjF7AtQJHsAlpewRQPvDIvqVP2zh1FBn-UAlPJkfxncgw==/">C++ Programming  <i>by Abdul Bari (Udemy)</i> </a> </h3>
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className="text-lg font-semibold text-gray-900 text-white"> <a target="_blank" rel="noopener noreferrer" href="https://neetcode.io/courses/design-patterns/1">System Design and Object-Oriented Design Patterns <i>from NeetCode.io</i> </a> </h3>
      </li>
      
    </ol>
    </div>
  );
}

export default LearningPath;
