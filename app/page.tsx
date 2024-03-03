"use client";
import Image from "next/image";
import { BackgroundBeams } from "./components/ui/background-beams";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { CardBody, CardContainer, CardItem  } from "./components/ui/3d-card";
import myimg from './test.jpg';
import { SparklesCore } from "./components/ui/sparkles";
import Video from "./components/ui/video";
import Timeline from "./components/ui/workExperienceTimeLine";
import { Meteors } from "./components/ui/meteors";
import { ContactSection } from "./components/ui/conttactPage";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";

const words = `Driven by code, fueled by purpose: My mission for human betterment as a software engineer. `;
// dummy shit
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
    myimg
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
    myimg
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
    myimg
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
    myimg
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
    myimg
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
    myimg
  },
];
export default function Home() {
  return (
    
    <div >
     <BackgroundBeams />
     
     
 
    <div className=" w-full rounded-md  relative flex flex-col items-center justify-start mt-20 ">

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
    <div className=" mt-20 flex gap-10  max-w-[100%]  ">
    {/* project 1 */}
      <div className=" w-full  relative max-w-[32rem]   ">
        <div className="absolute  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-full blur-3xl" />
        
           
    
         
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        
         
        <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:max-w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Project 1
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
          What i have learned Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Tempore, veniam! Voluptatibus expedita reprehenderit enim iusto alias, veritatis 
             repellat eum, velit quos 
            ipsum, dignissimos quis perferendis vero cum corporis minima nulla!
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={myimg}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Github →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Live demo
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      {/* div for listing the front and back end techs */}
      <div className="flex justify-between items-center space-x-8 mt-0">
        <div>
          <h1>Fron-end</h1>
          <ul>
            <li>->Coffee</li>
            <li>->Tea</li>
            <li>->Coca Cola</li>
          </ul>
        </div>
        <div>
          <h1>Back-end</h1>
          <ul>
            <li>->Coffee</li>
            <li>->Tea</li>
            <li>->Coca Cola</li>
            
          </ul>
        </div>
        
      </div>
      {/* end of listing the front and back end techs */}
 
      
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 ">
           inspiration
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
            lor
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 ">
           What i learned
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
            lor
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 ">
           Takeaway
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
            lor
          </p>
 
          <Meteors number={30} />
   
    
          
        </div>
        
        
      </div>
      {/* end of project 1 */}
      {/* project 2 */}
      <div className=" w-full relative  max-w-[32rem]  ">
        <div className="absolute  inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.90] bg-red-500 rounded-full blur-3xl" />
        
           
    
         
        <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        
         
        <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:max-w-[30rem] h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white"
          >
            Project 1
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
          What i have learned Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Tempore, veniam! Voluptatibus expedita reprehenderit enim iusto alias, veritatis 
             repellat eum, velit quos 
            ipsum, dignissimos quis perferendis vero cum corporis minima nulla!
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src={myimg}
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Github →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Live demo
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>

      {/* div for listing the front and back end techs */}
      <div className="flex justify-between items-center space-x-8 mt-0">
        <div>
          <h1>Fron-end</h1>
          <ul>
            <li>->Coffee</li>
            <li>->Tea</li>
            <li>->Coca Cola</li>
          </ul>
        </div>
        <div>
          <h1>Back-end</h1>
          <ul>
            <li>->Coffee</li>
            <li>->Tea</li>
            <li>->Coca Cola</li>
            
          </ul>
        </div>
        
      </div>
      {/* end of listing the front and back end techs */}
 
      
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 ">
           inspiration
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
            lor
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 ">
           What i learned
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
            lor
          </p>
          <h1 className="font-bold text-xl text-white mb-4 relative mt-1 z-50 ">
           Takeaway
          
          </h1>
 
          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            I don&apos;t know what to write so I&apos;ll just paste something
            cool here. One more sentence because lorem ipsum is just
            unacceptable. Won&apos;t ChatGPT the shit out of this.
            lor
          </p>
 
          <Meteors number={30} />
   
    
          
        </div>
        
        
      </div>
    {/* end of project 2 */}
    </div>

  
    </div>
              
     
     
     <div className="flex flex-col items-center justify-center mt-20 ">
     <h1 className="font-bold text-xl text-white mb-5">Skills</h1>
     <div className="flex flex-row items-center justify-center mb-10 w-full ">
      <AnimatedTooltip items={people} />
    </div>      
      </div>   
    
    
    

    
     <ContactSection />
    </div>
  );
}
