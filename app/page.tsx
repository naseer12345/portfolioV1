"use client";
import Image from "next/image";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { CardBody, CardContainer, CardItem  } from "./components/ui/3d-card";
import myimg from './test.jpg';
import { SparklesCore } from "./components/ui/sparkles";
import Video from "./components/ui/video";
import Timeline from "./components/ui/workExperienceTimeLine";
import { Meteors } from "./components/ui/meteors";
import { ContactSection } from "./components/ui/conttactPage";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import { TypewriterEffectSmooth } from "./components/ui/typewriter-effect";
import ProjectCard from "./components/projectCard";

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
    
    <div className="bg-black" >
 
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
      {/* div for listing the front and back end techs */}
      <div className=" flex flex-col justify-center">
      <div className="flex  items-center space-x-8 mt-0 max-w-[30rem] ">
        <div className=" text-white " >
          <h1>Fron-end</h1>
          <ul>
            <li>-Coffee</li>
            <li>-Tea</li>
            <li>-Coca Cola</li>
          </ul>
        </div>
        <div className=" text-white "  >
          <h1>Back-end</h1>
          <ul>
            <li>-Coffee</li>
            <li>-Tea</li>
            <li>-Coca Cola</li>
            
          </ul>
        </div>
        
      </div>
      {/* end of listing the front and back end techs */}
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50  max-w-[10rem]">
           inspiration
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 max-w-[30rem]">
            I dont know what to write so Ill just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Wont ChatGPT the shit out of this.
            lor
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 max-w-[30rem] ">
           What i learned
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 max-w-[30rem]">
            I dont know what to write so Ill just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Wont ChatGPT the shit out of this.
            lor
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 max-w-[30rem]">
           Takeaway
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 max-w-[30rem]">
            I dont know what to write so Ill just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Wont ChatGPT the shit out of this.
            lor
          </p>
 
          <Meteors number={30} />
          </div>
          <ProjectCard />
    
          
        </div>
        
        
      </div>
      {/* end of project 1 */}
      {/* project 2 */}
      <div className=" relative     ">
        <div className="absolute  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-900 border border-gray-800 gap-4 px-4 py-8  overflow-hidden rounded-2xl flex flex-row  flex-wrap justify-center max-w-[65rem] ml-10 mr-10 ">
      {/* div for listing the front and back end techs */}
      <div className=" flex flex-col justify-center">
      <div className="flex  items-center space-x-8 mt-0 max-w-[30rem]">
        <div className=" text-white ">
          <h1>Fron-end</h1>
          <ul>
            <li>-Coffee</li>
            <li>-Tea</li>
            <li>-Coca Cola</li>
          </ul>
        </div>
        <div className=" text-white " >
          <h1>Back-end</h1>
          <ul>
            <li>-Coffee</li>
            <li>-Tea</li>
            <li>-Coca Cola</li>
            
          </ul>
        </div>
        
      </div>
      {/* end of listing the front and back end techs */}
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50  max-w-[10rem]">
           inspiration
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 max-w-[30rem]">
            I dont know what to write so Ill just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Wont ChatGPT the shit out of this.
            lor
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 max-w-[30rem] ">
           What i learned
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 max-w-[30rem]">
            I dont know what to write so Ill just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Wont ChatGPT the shit out of this.
            lor
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 max-w-[30rem]">
           Takeaway
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 max-w-[30rem]">
            I dont know what to write so Ill just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Wont ChatGPT the shit out of this.
            lor
          </p>
 
          <Meteors number={30} />
          </div>
          <ProjectCard />
    
          
        </div>
        
        
      </div>
    {/* end of project 2 */}
    </div>

  
    </div>
              
     
     
     <div className="flex flex-col items-center justify-center mt-20 ">
     <h1 className="font-bold text-xl text-white mb-5">Skills</h1>
     <div className="flex flex-row items-center justify-center mb-10 w-full ">
      {/* <AnimatedTooltip items={people} /> */}
    </div>      
      </div>   
    
    
    
    {/* type writer effect  */}
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 text-neutral-200 text-xs sm:text-base  ">
        The road for great humanity through code starts from here
      </p>
      <TypewriterEffectSmooth words={wordsForTypeWrite} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
       
      </div>
    </div>
    
     <ContactSection />
    </div>
  );
}
