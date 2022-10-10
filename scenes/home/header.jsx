import ImageBackground from "components/image";
import Video from "components/video";
import React, { useMemo } from "react";

export default function header() {
  return (
    <div className="header pb-[40px] bg-black relative ">
    <div className="main flex flex-col justify-around items-center">
      <ImageBackground
        startY="-80%"
        src="/images/DAX Original.png"
        alt="..."
        className="animate-imageShowUp w-[512px] h-[200px]"
      />
    <Video className='mb-[80px] '  src="video/DAX.mp4" />

    </div>

      <ImageBackground
        startX="-100%"
        startY="-80%"
        endY="-45%"
        src="/images/pray.png"
        alt="..."
        className="animate-imageShowUp w-[200px] h-[250px] absolute top-10 left-0"
      />
      <ImageBackground
        startX="-100%"
        endX="-25%"
        src="/images/mask.png"
        alt="..."
        className="animate-imageShowUp w-[300px] h-[240px] absolute top-[155px] left-0"
      />
      <ImageBackground
        startX="-100%"
        endX="-20%"
        src="/images/candy 1.png"
        alt="..."
        className="animate-imageShowUp w-[300px] h-[174px] absolute bottom-0 left-0"
      />
      <ImageBackground
        startX="100%"
        startY="-80%"
        endY="5%"
        src="/images/sun.png"
        alt="..."
        className="animate-imageShowUp w-[306px] h-[340px] absolute top-0 right-0"
      />
      <ImageBackground
        startX="100%"
        endX="-100%"
        src="/images/bubbles 1.png"
        alt="..."
        className="animate-imageShowUp w-[170px] h-[320px] absolute bottom-0 right-0"
      />
    </div>
  );
}
