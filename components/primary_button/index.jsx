import React, { memo, useCallback, useMemo } from "react";
import ImageBackground from "@/components/image";
const PrimaryButton = (props) => {
  const handleOnClick = useCallback(() => {
    if (!props.onShowDialog) return;
    props.onShowDialog();
  }, []);
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={props.className}
      onClick={handleOnClick}
    >
      <span>{props.text}</span>

      {props.srcImage ? (
        <ImageBackground
          src={props.srcImage}
          alt="Prev Button"
          className="w-[50px] h-[50px] absolute top-1/2"
          startY="-50%"
          endY="-50%"
          startOpacity="1"
        />
      ) : (
        ""
      )}
    </a>
  );
};

export default memo(PrimaryButton);
