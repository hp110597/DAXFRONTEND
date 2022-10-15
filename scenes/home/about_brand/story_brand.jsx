import { memo } from "react";
import ImageBackground from "components/image";
import Text from "components/text";

const StoryBrand = (props) => {
  return (
    <div
      className="h-full bg-[#000000] absolute top-0 left-0 overflow-hidden z-20"
      style={props.stylePC}
    >
      <div className="w-screen h-full relative">
        <div className="md:grid md:grid-cols-[600px_auto] xl:container lg:gap-y-[40px] md:gap-y-[60px] mt-[45px]">
          {/*item-grid-1 */}
          <div className="flex items-center justify-center gap-x-6">
            <ImageBackground
              endY="0%"
              startY="-50%"
              src="/images/Dax_Original.png"
              alt="Logo Brand"
              className="md:w-[200px] md:h-[100px] w-[100px] h-[50px]"
            />
            <Text
              animateStart="50%"
              animateEnd="0%"
              className="font-avertaBold md:text-[48px] text-[#FDF8E2] text-[30px]"
              text="FOR US"
            />
          </div>
          {/*item-grid-2 */}
          <ImageBackground
            src="/images/bunch_1.png"
            alt="bunch 1"
            className="lg:col-start-1 lg:col-end-2 lg:w-[480px] lg:h-[100px] lg:block lg:row-start-2
            lg:row-end-3 md:row-start-3 md:row-end-4 md:col-start-1 md:col-end-3 md:w-[600px] md:h-[125px] md:mx-auto"
          />
          {/*item-grid-3*/}
          <div className="font-avertaBold text-[#FDF8E2] flex flex-col justify-between [word-spacing:5px] [line-height:40px] tracking-widest col-start-1 col-end-2 xl:text-[36px] xl:mr-0 lg:mr-[40px] lg:items-end md:items-start md:text-[24px] md:row-start-2 md:row-end-3 lg:col-start-2 lg:col-end-3 ml-8 lg:ml-0 md:mt-0 mt-10">
            <Text
              animateStart="50%"
              animateEnd="0%"
              text="Everything will be digital"
              className="opacity-0 tracking-widest"
            />
            <Text
              animateStart="50%"
              animateEnd="0%"
              text="Even the things that won't."
              className="opacity-0 tracking-widest"
              delay="0.2s"
            />
          </div>
        </div>
        <div className="xl:container absolute bottom-48 md:right-12 tracking-wide text-right text-white flex flex-col items-end xl:right-56 xl:bottom-32 lg:bottom-36 md:bottom-40 right-5">
          <Text
            animateStart="100%"
            animateEnd="0%"
            text="This is long story about dax, This is long story about dax, This is long story about dax, This is long story about"
            className="opacity-0 [line-height:35px] xl:text-[20px] lg:text-[18px] md:text-[12px] md:block hidden"
            delay="0.2s"
          />
          <Text
            animateStart="100%"
            animateEnd="0%"
            text="dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story"
            className="opacity-0 [line-height:35px] xl:text-[20px] lg:text-[18px] md:text-[12px] md:block hidden"
            delay="0.4s"
          />
          <Text
            animateStart="100%"
            animateEnd="0%"
            text="about dax, This is long story about dax, This is long story about dax."
            className="opacity-0 [line-height:35px] xl:text-[20px] lg:text-[18px] md:text-[12x] md:block hidden"
            delay="0.6s"
          />
          <Text
            animateStart="100%"
            animateEnd="0%"
            text="This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax."
            className="opacity-0 [line-height:35px] xl:text-[20px] lg:text-[18px] md:text-[12x] text-[12px] md:hidden"
            delay="0.6s"
          />
        </div>
        <ImageBackground
          src="/images/star_one_1.png"
          alt="star one 1"
          className="absolute top-[60px] left-[570px] -z-1 w-[32px] h-[54px]"
          duration="2s"
          startX="-200%"
          startY="-100%"
        />
        <ImageBackground
          src="/images/candy_1.png"
          alt="candy 1"
          className="absolute md:top-[60px] md:left-[80px] -z-1 w-[300px] h-[175px] -top-[45px] left-0"
          duration="2s"
          endOpacity="0.5"
        />
        <ImageBackground
          src="/images/logo_blue.png"
          alt="logo blue"
          className="absolute -z-1 w-[32px] h-[32px] xl:left-3/4 xl:top-[30px] lg:top-1/2 lg:left-1/2 md:top-[500px] md:left-2/3 top-1/3 left-1/3"
          duration="2s"
        />
        <ImageBackground
          src="/images/lamp.png"
          alt="lamp"
          className="absolute md:top-[-45px] md:right-[58px] -z-1 w-[100px] h-[91px] -top-[45px] -right-4"
          duration="2s"
          startX="-100%"
        />
        <ImageBackground
          src="/images/star_1.png"
          alt="star 1"
          className="absolute md:top-[10px] md:right-[8px] -z-1 w-[50px] h-[93px] opacity-0 top-1/3 right-9"
          duration="2s"
          startY="-40%"
        />
        <ImageBackground
          src="/images/coin_3.png"
          alt="coin 3"
          className="absolute top-[235px] right-[139px] -z-1 w-[24px] h-[24px]"
          duration="2s"
        />
        <ImageBackground
          src="/images/logo_light.png"
          alt="logo light"
          className="absolute xl:left-36 lg:bottom-[100px] md:bottom-[100px] md:left-40 -z-1 w-[32px] h-[32px] bottom-32 left-10"
          duration="2s"
        />
        <ImageBackground
          src="/images/coin_2.png"
          alt="Coin 2"
          className="absolute bottom-24 left-1/2 -z-1 w-[32px] h-[32px]"
          duration="2s"
        />
        <ImageBackground
          src="/images/pumpkin_1.png"
          alt="Pumbkin 1"
          className="absolute bottom-10 -right-8 -z-1 w-[100px] h-[108px]"
          startX="100%"
        />
      </div>
    </div>
  );
};

export default memo(StoryBrand);
