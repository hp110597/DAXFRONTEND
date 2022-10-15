import Text from "components/text";
import { memo, useMemo } from "react";

const ProductInfor = ({ infor, prevProductActive }) => {
  const PAGEINFOR = useMemo(() => {
    return infor.map((item, index) => {
      return (
        <Text
          key={index}
          animateStart={`${prevProductActive ? "0%" : "1000%"}`}
          animateEnd={`${prevProductActive ? "-1000%" : "0%"}`}
          className={`3xl:text-[30px] 2xl:text-[26px] xl:text-[22px] md:text-[16px] text-[10px] text-justify [line-height:40px] 2xl:[line-height:50px] opacity-0 ${
            prevProductActive ? "animate-textAnimateFadeOut" : ""
          }`}
          text={item}
          duration="1.2s"
          delay={index / 10 + "s"}
        />
      );
    });
  }, [prevProductActive]);
  return <div className="w-full flex-shrink-0">{PAGEINFOR}</div>;
};

export default memo(ProductInfor);
