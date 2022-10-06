import Image from "next/image";
import React, { memo } from "react";
import { Keyframes } from "scenes/img";




const ImageBackground = (props) => {
  
const animateImage=(props)=>{
  return  <Keyframes name={props.name} from={props.startState}  to={props.endState}/>
   
}
  return (
    <div>
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      objectFit="contain"
      className={props.className}
      style={props.style}
      keyframes={animateImage}
    />
    </div>
  );
};

export default memo(ImageBackground);

