import ImageBackground from "components/image";
import React, { useMemo } from "react";

export default function header() {
  return (
    <div className="header  bg-black ">
      {/* <span className="text-white">123455</span> */}

      <ImageBackground
        style={{
          "--startX": "-100%",
          "--endX": "0%",
          "--startY": "-80%",
          "--endY": "-30%",
        }}
        src="/images/pray.png"
        alt="..."
        width="300"
        height="300"
        className="animate-imageFadeIn relative top-0 left-0 "
      />
      <ImageBackground
        style={{
          "--startX": "-100%",
          "--endX": "-20%",
          "--startY": "0%",
          "--endY": "0%",
        }}
        src="/images/mask.png"
        alt="..."
        width="300"
        height="300"
        className="animate-imageFadeIn absolute top-0 left-0  "
      />
   
    </div>
  );
}
