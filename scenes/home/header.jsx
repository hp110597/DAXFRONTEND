import ImageBackground from "components/image";
import React, { useMemo } from "react";
import Keyframe, { Keyframes } from "scenes/img";
import styles from "scenes/img/styles";


export default function header() {

  // const imgStyle = useMemo(()=>{
  //   return {...styles.animate}
  // },[])

  const imgFade = useMemo(()=>{
    return <Keyframes name="oscillate" from={{ opacity: 0.9 }} to={{ opacity: 0.2 }} />
  },[])

  return (
    <>
      {/* <div className="header" >
      <div className="flex justify-between items-center" style={{ backgroundColor: "#1E1E1E" }}>
        <div className="logo">
          <img className="ml-7 my-3" src="/images/logo.png" alt="..." />
        </div>
        <div className="navbar">
          <a href="#" className="mx-7 text-white">
            Production collection
          </a>
          <a href="#" className="mx-7 text-white">
            About artist
          </a>
          <a href="#" className="mx-7 text-white">
            About brand
          </a>
          <a href="#" className="mx-7 text-white">
            Contact us
          </a>
        </div>
      </div>
      <div className="introduce">
      <iframe
        style={{width:'100vw'}}
        height={500}
        src="https://www.youtube.com/embed/HePO4DWDDq8"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
    </div> */}
    
      <div className="header">
      <div>
      <ImageBackground
        // style = {imgStyle}
        src="/images/logo.png"
        alt="..."
        width="200"
        height="200"
        className="transition fade duration-150 ease-in-out "
        keyframes={<Keyframes name="fade" from={{ opacity: 0.9 }} to={{ opacity: 0.2 }} />}
      />
       
      </div>

      </div>
    </>
  );
}
