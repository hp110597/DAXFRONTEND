import { useState, useRef, useEffect, useMemo, memo, useCallback } from "react";
import StoryBrand from "./story_brand";
import VisionMission from "./vision_mission";
import ImageBackground from "components/image";
import { useOnScreen } from "hooks/helper";

const AboutBrand = () => {
  const coordinateX = useRef();
  const onScreen = useOnScreen(coordinateX, "0.9");
  const [width, setWidth] = useState(0);
  const handleOnMouseMove = useCallback((e) => {
    const rect = coordinateX.current.getBoundingClientRect();
    if (e.type === "mousemove") {
      const widthPageOne = e.clientX - rect.left;
      setWidth(widthPageOne);
    }
    if (e.type === "touchmove") {
      const widthPageOne = e.touches[0].pageX - rect.left;
      setWidth(widthPageOne);
    }
  }, []);
  const stylePC = useMemo(() => {
    return { width: width };
  }, [width]);

  const styleMobile = useMemo(() => {
    return { left: width };
  }, [width]);

  return (
    <div
      className="h-[80%] relative overflow-hidden snap-start"
      ref={coordinateX}
      onMouseMove={handleOnMouseMove}
      onTouchMove={handleOnMouseMove}
    >
      <div className={`${onScreen ? "" : "hidden"}`}>
        <StoryBrand stylePC={stylePC} />
        <VisionMission />
        <ImageBackground
          src="/images/split.png"
          alt="Icon swipe"
          className="absolute w-[30px] h-[30px] top-1/2 z-30"
          endX="-50%"
          endY="-50%"
          duration="1s"
          LeftStyle={styleMobile}
        />
        <div
          className="h-full w-[1px] left-1/2 -translate-x-1/2 absolute z-30 bg-white"
          style={styleMobile}
        ></div>
      </div>
    </div>
  );
};

export default memo(AboutBrand);
