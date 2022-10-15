import { memo, useCallback, useMemo, useState } from "react";
import ButtonImage from "@/components/image_button";

const Pagination = (props) => {
  const { numberOfDot, className, onChangeIndexActive, dotActive } = props;

  const dots = useMemo(() => Array(numberOfDot).fill(0), [numberOfDot]);

  const dotItems = useCallback(() => {
    return dots.map((dotItem, index) => (
      <li
        key={index}
        onClick={onChangeIndexActive.bind(Pagination, index)}
        className="cursor-pointer"
      >
        <div className={`${index === dotActive ? "hidden" : ""}`}>
          <ButtonImage
            src="/images/dot.png"
            atl="Icons Close"
            width={40}
            height={10}
          />
        </div>
        <div
          className={`${
            index === dotActive ? "animate-dotActiveFadein" : "hidden"
          }`}
        >
          <ButtonImage
            src="/images/dot_active.png"
            atl="Icons Close"
            width={40}
            height={40}
          />
        </div>
      </li>
    ));
  }, [dotActive, numberOfDot]);
  return <ul className={`flex items-center ${className}`}>{dotItems()}</ul>;
};

export default memo(Pagination);
