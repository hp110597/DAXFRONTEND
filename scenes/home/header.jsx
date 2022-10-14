import ImageBackground from "components/image";
import Video from "components/video";
import React, { useMemo } from "react";

export default function header(props) {
  return (
    <div className={`header ${props.className}  pb-[10px] bg-black relative `}>
      <div className="main flex flex-col justify-around items-center">
        <ImageBackground
          startY="-80%"
          src="/images/DAX Original.png"
          alt="..."
          className="animate-imageShowUp xl:mb-[70px] xl:w-[512px] xl:h-[200px] lg:w-[360px] lg:h-[150px] md:w-[260px] md:h-[110px] w-[130px] h-[55px]"
        />
        <Video className=' lg:mb-[35px] md:mb-[20px] mb-[10px] ' src="video/DAX.mp4" />

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
        className="animate-imageShowUp xl:w-[300px] xl:h-[240px] lg:w-[220px] lg:h-[180px] md:w-[170px] md:h-[135px] w-[85px] h-[65px] absolute xl:top-[170px] lg:top-[80px] md:top-[60px] top-[35px] left-0"
      />
      <ImageBackground
        startX="-100%"
        endX="-20%"
        src="/images/candy 1.png"
        alt="..."
        className="animate-imageShowUp xl:w-[300px] xl:h-[174px] lg:w-[250px] lg:h-[140px] md:w-[180px] md:h-[100px] w-[90px] h-[50px] absolute xl:bottom-[60px] lg:bottom-[20px]  bottom-[0px] left-0"
      />
      <ImageBackground
        startX="100%"
        startY="-80%"
        endY="5%"
        src="/images/sun.png"
        alt="..."
        className="animate-imageShowUp 2xl:w-[306px] 2xl:h-[350px] xl:w-[230px] xl:h-[300px] lg:w-[200px] lg:h-[200px] md:w-[150px] md:h-[140px] w-[75px] h-[70px] absolute top-0 right-0 "
      />
      <ImageBackground
        startX="100%"
        endX="-100%"
        src="/images/bubbles_1.png"
        alt="..."
        className="animate-imageShowUp 2xl:w-[170px] 2xl:h-[320px] xl:w-[120px] xl:h-[320px] lg:w-[140px] lg:h-[180px] md:w-[100px] md:h-[120px] w-[10px] h-[60px] absolute xl:bottom-[100px] bottom-[20px] right-0 "
      />
    </div>
  );
}
