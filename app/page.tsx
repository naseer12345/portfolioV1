"use client";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { SparklesCore } from "./components/ui/sparkles";
import Video from "./components/ui/video";
import Timeline from "./components/ui/workExperienceTimeLine";
import { Meteors } from "./components/ui/meteors";
import { ContactSection } from "./components/ui/conttactPage";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import ProjectCard from "./components/projectCard";
import foodpic from './components/ui/foodpick.png';
import theOdinProject from './components/ui/top.png';
import LearningPath from "./components/ui/learningPath";

const words = `Driven by code, fueled by purpose: My mission for human betterment as a software engineer. `;

const wordsForTypeWrite = [
  {
    text: "Write",
  },
  {
    text: "awesome",
  },
  {
    text: "code",
  },
  {
    text: "with",
  },
  {
    text: "Naseer.",
    className: "text-blue-500 text-blue-500",
  },
];



export default function Home() {
  return (
    
    <div className="bg-black flex flex-col items-center" >
 
    <div className=" w-full rounded-md  relative flex flex-col items-center align-center justify-start  ">

   {/* div for sparkling effect */}
    <div className="h-[40rem] w-[100%] flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Naseer Khan
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <TextGenerateEffect words={words} />
    </div>
    {/* the end of sparkling effect  */}

      
    <Video />
    <Timeline />
     
    {/* div for showing projects */}
    <div className=" mt-20 flex flex-col   gap-10    ">
    {/* project 1 */}
      <div className=" relative">
        <div className="absolute  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 gap-4 px-4 py-8  overflow-hidden rounded-2xl flex flex-row  flex-wrap justify-center max-w-[65rem] ml-10 mr-10 ">
      <div className=" flex flex-col justify-center">
      
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50  max-w-[10rem]">
           inspiration
          
          </h1>
 
          <p className="font-normal text-base text-slate-300 mb-4 relative z-50 max-w-[30rem]">
            In my hometown, I witnessed a situation where some people struggled with hunger while others had surplus food that often went to waste. Wealthy individuals were hesitant to donate their extra food to strangers, leading to a disconnect between those in need and those with resources.
            
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 max-w-[30rem] ">
           What i learned
          
          </h1>
 
          <p className="font-normal text-base text-slate-300 mb-4 relative z-50 max-w-[30rem]">
           During the development of FoodPick, I gained hands-on experience with deployment processes, including database deployment and working with various deployment environments. Additionally, I learned to leverage React's useContext hook for state management.
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 max-w-[30rem]">
           Takeaway
          
          </h1>
 
          <p className="font-normal text-base text-slate-300 mb-4 relative z-50 max-w-[30rem]">
            One key takeaway from this project was the importance of patience when deploying applications. Initially, when I deployed the server to Firebase Functions, I immediately began testing the API, leading to disappointment when it didn't work right away. However, after allowing time for the changes to propagate, the API functioned as expected the next day.
          </p>
 
          <Meteors number={30} />
          </div>
          <ProjectCard projectName="foodPick" projectPic={foodpic} isLiveDemoAvailabe={true} description="A web application that facilitates food donation and pickup, built with React, JavaScript, Tailwind CSS, MongoDB, Firebase (Authentication, Hosting, Functions), and Express.js" githubLink="https://github.com/naseer12345/foodPickup" demoLink="https://foodpick-291fe.web.app/find_donations"/>
    
          
        </div>
        
        
      </div>
      {/* end of project 1 */}
      {/* project 2 */}
      <div className=" relative     ">
        <div className="absolute  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 gap-4 px-4 py-8  overflow-hidden rounded-2xl flex flex-row  flex-wrap justify-center max-w-[65rem] ml-10 mr-10 ">
      <div className=" flex flex-col justify-center">
    
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50  max-w-[10rem]">
           inspiration
          
          </h1>
 
          <p className="font-normal text-base text-slate-300 mb-4 relative z-50 max-w-[30rem]">
            I always had the ambition to build great things and code something amazing. However, although I had a strong understanding of coding languages, I lacked proficiency in HTML, CSS, styling, React, and other related technologies. I would often jump straight into building big projects without first solidifying the foundational knowledge. I knew the foundations, but there were gaps that needed to be filled, and I needed to put the pieces together.
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 max-w-[30rem] ">
           What i learned
          
          </h1>
 
          <p className="font-normal text-base text-slate-300 mb-4 relative z-50 max-w-[30rem]">
           During my journey with The Odin Project, I learned a wide range of skills and concepts. I gained expertise in manipulating the DOM using vanilla JavaScript, mastering styling techniques, and implementing responsive design principles. Additionally, I acquired knowledge of various frameworks and libraries, including React, and their respective workflows.
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 max-w-[30rem]">
           Takeaway
          
          </h1>
 
          <p className="font-normal text-base text-slate-300 mb-4 relative z-50 max-w-[30rem]">
            The key takeaway from this experience was the realization that I shouldn't rush into building complex projects without first establishing a strong foundational knowledge. Instead of letting the foundations slip, I needed to ensure that I had a solid grasp of the underlying concepts and technologies before attempting to build something ambitious. By taking the time to learn the fundamentals thoroughly, I would be better equipped to understand how different frameworks and technologies work, ultimately enabling me to develop more robust and efficient applications.
          </p>
 
          <Meteors number={30} />
          </div>
          <ProjectCard projectName="The Odin Project" isLiveDemoAvailabe={false} projectPic={theOdinProject} githubLink="https://github.com/naseer12345/theOdinProject" description="Completed The Odin Project curriculum, contributing to various open-source projects and demonstrating proficiency in web development. "/>
    
          
        </div>
        
        
      </div>
    {/* end of project 2 */}
    <div className=" relative     ">
        <div className="absolute  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 gap-4 px-4 py-8  overflow-hidden rounded-2xl flex flex-row  flex-wrap justify-center max-w-[65rem] ml-10 mr-10 ">
      <div className=" flex flex-col justify-center">
    
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50  max-w-[15rem]">
           Extra mini projects
          
          </h1>
           <p className="font-normal text-base text-slate-300 mb-4 relative z-50 max-w-[30rem]">
            I dont know what to write so Ill just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Wont ChatGPT the shit out of this.
            lor
          </p>
          <Meteors number={30} />
          </div>         
        </div>      
      </div>
    </div>

  
    </div>
              
     
     
    <div className="flex flex-col items-center justify-center mt-20 ">
     
     <div className=" py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center">
      <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
        Technical Skills
      </h2>
    </div>
    <div className="mt-10">
      <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
        <div>
          <dt className="font-bold text-xl text-white">
            Programming Languages
          </dt>
          <dd className="mt-2 text-slate-300">
            C++, JavaScript, HTML, CSS
          </dd>
        </div>
        <div>
          <dt className="font-bold text-xl text-white">
            Frameworks/Libraries
          </dt>
          <dd className="mt-2 text-slate-300">
            React, React Native, Node.js, Express.js, ASP.NET, Tailwind CSS, Socket.IO, Next.js, Framer Motion
          </dd>
        </div>
        <div>
          <dt className="font-bold text-xl text-white">
            Databases
          </dt>
          <dd className="mt-2 text-slate-300">
            MongoDB, MySQL, Firebase
          </dd>
        </div>
        <div>
          <dt className="font-bold text-xl text-white">
            Tools &amp; Technologies
          </dt>
          <dd className="mt-2 text-slate-300">
            Git, GitHub, Firebase (Hosting, Functions, Authentication), Twilio, Mailbee, H2O.ai, Docker, Vite, ESLint, Prettier, Postman, REST Client, CI/CD
          </dd>
        </div>
        <div>
          <dt className="font-bold text-xl text-white">
            Concepts
          </dt>
          <dd className="mt-2 text-slate-300">
            RESTful APIs, Agile/Scrum, Object-Oriented Programming, Responsive Web Design, System Design, Design Patterns
          </dd>
        </div>
      </dl>
    </div>
  </div>
</div>
      </div>   
    
    
    
    {/* type writer effect  */}
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 text-neutral-100 text-xs sm:text-base  ">
        The road for great humanity through code starts from here
      </p>
      <TypewriterEffectSmooth words={wordsForTypeWrite} />
    
    </div>
    <LearningPath />

     <ContactSection />
    </div>
  );
}
