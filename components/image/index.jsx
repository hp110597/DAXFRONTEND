import Image from "next/image";
import React, { memo } from "react";

const ImageBackground = (props) => {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      objectFit="contain"
      className="animate-imageOpacity"



    />
  );
};

export default memo(ImageBackground);

