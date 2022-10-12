import React, { memo } from "react";

const Video = (props) => {
  return (
    <div
      className={`rounded-[20px] overflow-hidden z-10 relative ${props.className}`}
    >
      <video
        className=" opacity-100 md:w-[60vw] w-[90vw] "
        src={props.src}
        // autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default memo(Video);
