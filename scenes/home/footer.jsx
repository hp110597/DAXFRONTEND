import React, { memo } from "react";
import TextButton from "@/components/TextButton";
import ButtonImage from "@/components/image_button";
import PrimaryButton from "@/components/primary_button";
import ImageBackground from "@/components/image";

const Footer = () => {
  return (
    <div className="relative bg-black w-full h-[20%] flex flex-col">
      <div className="basis-2/3 mt-[10px] flex flex-row">
        <div className="basis-1/2 sm:pl-[30px] pl-[20px] pt-[43px]">
          <PrimaryButton
            text={"Get in touch"}
            fontSize={"sm:text-[24px] text-[12px]"}
            height={"sm:py-[10px] py-[10px]"}
            width={"sm:px-[30px] px-[10px]"}
            border={"rounded-[30px]"}
            href={"https://www.facebook.com/longthanhplastic"}
          />
        </div>
        <div className=" basis-1/2 flex justify-end pr-[30px] pt-[30px]">
          <ButtonImage
            href="https://www.facebook.com/longthanhplastic"
            src="/images/DAX_Original.png"
            atl="Logo"
            width="100"
            height="40"
          />
        </div>
      </div>
      <div className="basis-1/6">
        <div className="flex justify-end sm:pr-[30px] pr-[10px]">
          <TextButton
            className="text-white lg:text-[16px] text-[12px] leading-[60px] font-normal cursor-pointer"
            text={"Chính sách bảo mật"}
            href={"https://www.facebook.com/longthanhplastic"}
          />
        </div>
      </div>
      <div className=" basis-1/6 flex flex-row">
        <div className="basis-1/3 sm:pl-[30px] pl-[10px] flex items-center">
          <TextButton
            className="text-white lg:text-[16px] text-[12px] md:leading-[60px] leading-[30px]  font-normal cursor-pointer"
            text={"285 CMT8, p10, Q.10, Tp.HCM, VietNam"}
            href={"https://www.facebook.com/longthanhplastic"}
          />
        </div>
        <div className="basis-1/3 flex items-center justify-center">
          <div className="basis-4/5 flex items-center justify-center sm:gap-x-[30px] gap-x-[10px] ">
            <div className="block">
              <ButtonImage
                href="https://www.facebook.com/longthanhplastic"
                src="/images/facebook.png"
                atl="Image FaceBook"
                width="30"
                height="30"
              />
            </div>
            <div>
              <ButtonImage
                href="https://www.facebook.com/longthanhplastic"
                src="/images/instagram.png"
                atl="Image FaceBook"
                width="30"
                height="30"
              />
            </div>
            <div className="flex items-center h-100">
              <TextButton
                className="text-white text-center lg:text-[16px] text-[12px]  sm:leading-[60px] leading-[10px] font-normal cursor-pointer"
                text={"Follow us"}
                href={"https://www.facebook.com/longthanhplastic"}
              />
            </div>
          </div>
        </div>
        <div className="basis-1/3 sm:pr-[30px] pr-[10px] flex justify-end">
          <TextButton
            className="text-white text-center lg:text-[16px] text-[12px] sm:leading-[60px] leading-[30px] font-normal cursor-pointer"
            text={"© 2022 DAX GROUP LTD."}
            href={"https://www.facebook.com/longthanhplastic"}
          />
        </div>
      </div>
      <ImageBackground
        src="/images/logo_blue.png"
        alt="..."
        className=" block w-[32px] h-[32px] absolute top-0 left-[59px]"
        endY="-50%"
      />
      <ImageBackground
        src="/images/coin_2.png"
        alt="..."
        className="animate-imageFadeIn sm:w-[40px] sm:h-[40.44px] w-[20px] h-[20.44px] absolute lg:top-[121px] lg:left-[405px] top-[20%] left-[40%] "
      />
      <ImageBackground
        src="/images/star_one_1.png"
        alt="..."
        className="animate-imageFadeIn sm:w-[32px] sm:h-[53.33px] w-[25px] h-[40px] absolute lg:top-[27px] lg:left-[682px] top-[10%] left-[55%]  "
      />
      <ImageBackground
        src="/images/logo_red.png"
        alt="..."
        className="animate-imageFadeIn sm:w-[32px] sm:h-[53.33px] w-[25px] h-[40px] absolute lg:top-[169px] lg:right-[372px] sm:top-[30%] sm:right-[30%] top-[40%] right-[50%] "
      />
    </div>
  );
};

export default memo(Footer);
