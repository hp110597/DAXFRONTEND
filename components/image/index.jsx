import Image from "next/image";
import React, { memo } from "react";
import { Keyframes } from "scenes/img";




const ImageBackground = (props) => {
  

  return (
    <>
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      // layout='fill'
      objectFit="contain"
      className={props.className}
      style={props.style}
    />
    </>
    
  );
};

export default memo(ImageBackground);

