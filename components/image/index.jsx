import Image from "next/image";
import React, { memo, useCallback, useMemo } from "react";

const ImageBackground = (props) => {
  const { startX, endX, startY, endY, startOpacity, endOpacity, duration, delay, onClickBtn } = props;
  const handleOnClick = () => {
    if (!onClickBtn) return;
    onClickBtn();
  }
  const STYLE = useMemo(() => {
    let _startX = "0%";
    let _endX = "0%";
    let _startY = "0%";
    let _endY = "0%";
    let _startOpacity = "0";
    let _endOpacity = "1";
    let _duration = '1s';
    let _delay = '0s';
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
    if (startOpacity) {
      _startOpacity = startOpacity;
    }
    if (endOpacity) {
      _endOpacity = endOpacity;
    }
    if (duration) {
      _duration = duration;
    }
    if (delay) {
      _delay = delay;
    }

    return {
      "--startX": _startX,
      "--endX": _endX,
      "--startY": _startY,
      "--endY": _endY,
      "--startOpacity": _startOpacity,
      "--endOpacity": _endOpacity,
      "--duration": _duration,
      "--delay": _delay,
    };
  }, [startX, endX, startY, endY, startOpacity, endOpacity, duration, delay]);

  return (
    <div className={`animate-imageFadeIn inline-block ${props.className}`} style={STYLE} onClick={handleOnClick}>
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
