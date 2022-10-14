import React, { memo } from "react";

const Video = (props) => {
  return (
    <div
      className={`rounded-[20px] overflow-hidden z-10  relative ${props.className}`}
    >
      <video
        className=" opacity-100 xl:w-[60vw] md:w-[70vw] sm:w-[80vw] w-[90vw]  "
        src={props.src}
        // autoPlay
        // objectFit="contain"
        loop
        muted
      ></video>
    </div>
  );
};

export default memo(Video);
