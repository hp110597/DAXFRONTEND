import ImageBackground from "components/image";
import React, { useMemo } from "react";

export default function header() {


  
  return (
    <div className="header bg-black relative">

      <ImageBackground
        startX='-100%'
        endY='-30%'
        startY='-80%'
        src="/images/pray.png"
        alt="..."
        
        className="animate-imageFadeIn w-[200px] h-[200px] "
      />
      <ImageBackground
        startX='-100%'
        endX='20%' 
        src="/images/mask.png"
        alt="..."
       
        className="animate-imageFadeIn w-[200px] h-[200px] absolute top-0 right-0 "
      />
   
    </div>
  );
}
