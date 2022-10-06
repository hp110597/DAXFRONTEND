import Image from "next/image";
import React, { memo, useMemo } from "react";

const ImageBackground = (props) => {
  const { startX, endX, startY, endY } = props;

  const STYLE = useMemo(() => {
    let _startX = "0%";
    let _endX = "0%";
    let _startY = "0%";
    let _endY = "0%";

    if (startX) {
      _startX = startX;
    }
    if (endX) {
      _endX = endX;
    }
    if (startY) {
      _startY = startY;
    }
    if (endY) {
      _endY = endY;
    }

    return {
      "--startX": _startX,
      "--endX": _endX,
      "--startY": _startY,
      "--endY": _endY,
    };
  }, [startX, endX, startY, endY]);

  return (
    <div className={`inline-block ${props.className}`} style={STYLE}>
      <Image
        src={props.src}
        alt={props.alt}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default memo(ImageBackground);
