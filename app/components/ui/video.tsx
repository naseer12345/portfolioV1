import React from 'react';
import YouTube from 'react-youtube';
import { ButtonsCard } from './tailwindcss-buttons';

export default function Video() {
  const videoOptions = {
    height: '390',
    width: '640',
    playerVars: {

      // change the auto play to 1 so the video plays by it self when its loaded
      autoplay: 0,
    },
  };

  return (
    <div className="flex justify-center flex-col ">
    <div className="relative flex-grow-1" >
      <YouTube 
        videoId="dQw4w9WgXcQ" 
        opts={videoOptions} 
        className=" w-full h-full"
      />
      <ButtonsCard className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Contact now
      </ButtonsCard>
    </div>
    
  </div>

);
}

