import React from 'react';

function Timeline() {
  return (
    <div className='mt-20' >
      <h1 className='font-bold text-xl text-white mb-5'>Professional work experience</h1>
    <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">.NET developer @ focus4people</h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">some stupid stuff in here...</p>
       
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Web developer @ ahmad shah LTD</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">some stupid stuff in here too...</p>
      </li>
      <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Inter @ Comma </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">some stupid stuff in here aswell.</p>
      </li>
    </ol>
    <h1 className='font-bold text-xl text-white mb-5 mt-5'>Education</h1>
    <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Current</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">BSc (Honours) Computing and IT (Software) @ open university</h3>
    
       
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">GCSEs @ Ifield community college </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">English(g6), Maths(g7), Computer Science(g7)</p>
      </li>
      
    </ol>
    </div>
  );
}

export default Timeline;
