import ImageBackground from "components/image";
import Video from "components/video";
import React, { useMemo } from "react";

export default function header(props) {
  return (
    <div className={`header ${props.className} flex flex-col justify-around pb-[10px] bg-black relative h-screen snap-start `}>
      <div className="main flex flex-col justify-around items-center">
        <ImageBackground
          startY="-80%"
          src="/images/DAX Original.png"
          alt="..."
          className="animate-imageShowUp xl:mb-[70px] lg:mb-[60px] md:mb-[30px] xl:w-[512px] xl:h-[200px] lg:w-[460px] lg:h-[200px] md:w-[450px] md:h-[210px] w-[330px] h-[255px]"
        />
        <Video className=' lg:mb-[35px] md:mb-[20px] mb-[10px] ' src="video/DAX.mp4" />

      </div>

      <ImageBackground
        startX="-100%"
        startY="-80%"
        endY="-45%"
        src="/images/pray-header.png"
        alt="..."
        className="animate-imageShowUp xl:w-[200px] xl:h-[250px] lg:w-[265px] lg:h-[410px] md:w-[330px] md:h-[260px] w-[0px] h-[0px] absolute lg:top-10 md:top-20 top-20 left-0"
      />
      <ImageBackground
        startX="-100%"
        endX="-25%"
        src="/images/mask-header.png"
        alt="..."
        className="animate-imageShowUp xl:w-[300px] xl:h-[240px] lg:w-[420px] lg:h-[380px] md:w-[270px] md:h-[235px] w-[285px] h-[265px] absolute xl:top-[170px] lg:top-[80px] md:top-[250px] top-[15px] left-0"
      />
      <ImageBackground
        startX="-100%"
        endX="-20%"
        src="/images/candy 1.png"
        alt="..."
        className="animate-imageShowUp xl:w-[300px] xl:h-[174px] lg:w-[350px] lg:h-[240px] md:w-[280px] md:h-[200px] w-[190px] h-[250px] absolute xl:bottom-[60px] lg:bottom-[20px]  bottom-[0px] left-0"
      />
      <ImageBackground
        startX="100%"
        startY="-80%"
        endY="5%"
        src="/images/sun.png"
        alt="..."
        className="animate-imageShowUp 2xl:w-[306px] 2xl:h-[350px] xl:w-[230px] xl:h-[300px] lg:w-[300px] lg:h-[300px] md:w-[350px] md:h-[340px] w-[175px] h-[270px] absolute top-0 right-0 "
      />
      <ImageBackground
        startX="100%"
        endX="-60%"
        src="/images/bubbles 1-header.png"
        alt="..."
        className="animate-imageShowUp 2xl:w-[170px] 2xl:h-[320px] xl:w-[120px] xl:h-[320px] lg:w-[240px] lg:h-[280px] md:w-[150px] md:h-[170px] w-[80px] h-[160px] absolute xl:bottom-[50px] bottom-[80px] lg:right-[-150px] md:right-[-100px] right-[-20px]  "
      />
    </div>
  );
}
