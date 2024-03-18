import React from 'react';

function Timeline() {
  return (
    <div className='mt-20' >
      <h1 className='font-bold text-xl text-white mb-5'>Professional work experience</h1>
    <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2022 - July 2022</time>
        <h3 className="text-lg font-semibold text-gray-900 text-white">Software Developer Intern - <i> <a href="https://www.linkedin.com/feed/update/urn:li:activity:7113444413569122305?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7113444413569122305%2C7114915780009279489%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287114915780009279489%2Curn%3Ali%3Aactivity%3A7113444413569122305%29">Comma</a> , now <a href="https://www.weavr.io/">Weaver.io</a> </i></h3>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">•	Worked with HTML, CSS, and learned backend development concepts.</p>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">•	Developed an interest in web development technologies.</p>

      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2022 - May 2023</time>
        <h3 className="text-lg font-semibold text-gray-900 text-white">Web Developer (Contract)- <i>Ahmad Shah LTD (Family Business) </i></h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">•	Designed and developed a static website.</p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">•	Managed social media presence and marketing initiatives.</p>
      </li>
      <li className="ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2023 - Present</time>
        <h3 className="text-lg font-semibold text-gray-900 text-white">.NET Developer - <i><a href="https://www.focus4people.com/">Focus4People</a></i>  </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">•	Built an automatic email sender using Mailbee and ASP.NET C++, facilitating weekly email campaigns to over 10,000 recipients.</p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">•	Developed a custom AI using H2O.ai's open-source GPT tool, improving customer satisfaction through intelligent PDF data analysis.</p>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">•	Created a script for routine deletion of old backup data, optimizing storage and system performance.</p>

      </li>
    </ol>
    <h1 className='font-bold text-xl text-white mb-5 mt-5'>Education</h1>
    <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Current, Expected graduation 2026</time>
        <h3 className="text-lg font-semibold text-gray-900 text-white">BSc (Honours) Computing and IT (Software) @ open university</h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">•	Relevant Coursework: Data Structures and Algorithms, Object-Oriented Programming, Software Engineering, Database Systems, Computer Networks</p>

       
      </li>
      <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2023</time>
        <h3 className="text-lg font-semibold text-gray-900 text-white">GCSEs @ Ifield Community College </h3>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">English(g5), Maths(g7), Computer Science(g7)</p>
      </li>
      
    </ol>
    </div>
  );
}

export default Timeline;
