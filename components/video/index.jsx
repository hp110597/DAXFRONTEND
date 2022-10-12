import React, { memo } from "react";

const Video = (props) => {
  return (
    <div
      className={`rounded-[20px] overflow-hidden relative ${props.className}`}
    >
      <video
        className="relative opacity-100"
        src={props.src}
        // autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default memo(Video);
