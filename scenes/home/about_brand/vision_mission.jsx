import { memo } from "react";
import ImageBackground from "components/image";
import Text from "components/text";
const VisionMission = () => {
  return (
    <div className={`h-full w-screen bg-[#000000] absolute top-0 right-0 z-10 overflow-hidden`}>
      <div className="md:grid md:grid-cols-[600px_auto] xl:container xl:gap-y-[50px] md:gap-y-[40px] mt-[45px]">
        {/*item-grid-1 */}
        <div className="flex items-center justify-center gap-x-6">
          <ImageBackground
            endY='0%'
            startY='-50%'
            src='/images/Dax_Original.png'
            alt="Logo Brand"
            className="md:w-[200px] md:h-[100px] w-[100px] h-[50px]"
          />
          <Text
            animateStart='50%'
            animateEnd='0%'
            className='font-avertaBold md:text-[48px] text-[#FDF8E2] text-[30px]'
            text='FOR US'
          />
        </div>
        {/*item-grid-2 */}
        <div className="col-start-1 col-end-2 text-white md:mt-0 mt-10">
          <Text
            animateStart='50%'
            animateEnd='0%'
            delay='0.5s'
            className='font-avertaBold md:ml-20 ml-5 md:text-[40px] text-[30px] opacity-0'
            text='Vision'
          />
          <Text
            animateStart='50%'
            animateEnd='0%'
            delay='0.8s'
            className='md:text-center ml-10 md:text-[19px] text-xs [line-height:35px] opacity-0'
            text='This is dax mission, This is dax mission, This is dax mission, This'
          />
          <Text
            animateStart='50%'
            animateEnd='0%'
            delay='1.1s'
            className='md:text-center ml-10 md:text-xl text-xs [line-height:35px] opacity-0'
            text='is dax mission, This is dax mission, This is dax mission.'
          />

        </div>
      </div>
      <div className="absolute w-full flex justify-end xl:bottom-20 lg:bottom-24 md:bottom-28 bottom-24">
        <div className=" text-white flex flex-col items-end">
          <Text
            animateStart='50%'
            animateEnd='0%'
            delay='0.5s'
            className='font-avertaBold md:text-[40px] text-[30px] md:mr-16 mr-5 opacity-0'
            text='Mission'
          />
          <Text
            animateStart='50%'
            animateEnd='0%'
            delay='0.8s'
            className='text-right md:mr-10 md:text-xl text-xs mr-5 [line-height:35px] opacity-0'
            text='This is dax mission, This is dax mission, This is dax mission, This'
          />
          <Text
            animateStart='50%'
            animateEnd='0%'
            delay='1.1s'
            className='text-right md:mr-10 md:text-xl text-xs mr-5 [line-height:35px] opacity-0'
            text='is dax mission, This is dax mission, This is dax mission.'
          />
        </div>
      </div>

      <ImageBackground
        src='/images/candy_1.png'
        alt="candy 1"
        className="absolute md:top-[105px] md:left-[80px] -z-1 w-[300px] h-[175px] top-0 left-0"
        duration='2s'
        endOpacity="0.5"
      />
      <ImageBackground
        src='/images/bunch_1.png'
        alt="bunch 1"
        className="absolute top-[13px] right-[28px] -z-1 xl:w-[600px] xl:h-[125px] lg:w-[400px] lg:h-[80px] lg:block hidden"
        duration='2s'
      />
      <ImageBackground
        src='/images/star_one_1.png'
        alt="star one 1"
        className="absolute left-[570px] -z-1 w-[32px] h-[54px] lg:top-[105px] md:top-[100px]"
        duration='2s'
        startX='-200%'
        startY='-100%'
      />
      <ImageBackground
        src='/images/lamp.png'
        alt="lamp"
        className="absolute xl:top-1/2 lg:left-1/2 lg:top-[350px] md:left-1/3 md:top-1/2 -z-1 w-[100px] h-[91px] top-1/2 left-1/3"
        duration='2s'
        startX='-100%'
        startY='100%'
        endY='-50%'
      />
      <ImageBackground
        src='/images/star_1.png'
        alt="star 1"
        className="absolute xl:top-1/2 lg:left-1/2 lg:top-[350px] md:left-1/3 md:top-1/2 -z-1 w-[50px] h-[93px] opacity-0 top-1/2 left-1/3"
        duration='2s'
        startX='-20%'
        startY='-20%'
        endX='200%'
      />
      <ImageBackground
        src='/images/logo_blue.png'
        alt="logo blue"
        className="absolute xl:top-[365px] lg:right-[340px] lg:top-[200px] md:right-[240px] md:top-[400px] -z-1 w-[32px] h-[32px] top-2/3 right-2/3"
        duration='2s'
      />
      <ImageBackground
        src='/images/coin_3.png'
        alt="coin 3"
        className="absolute top-[280px] right-[140px] -z-1 w-[24px] h-[24px] md:block hidden"
        duration='2s'
      />
      <ImageBackground
        src='/images/pray.png'
        alt="pray"
        className="absolute top-1/2 right-[-100px] -z-1 w-[240px] h-[280px]"
        duration='2s'
        startX='100%'
        endY='-50%'
        endOpacity='0.5'
      />
      <ImageBackground
        src='/images/mask.png'
        alt="mask"
        className="absolute -bottom-[10px] -left-[15px] -z-1 md:w-[240px] md:h-[192px] w-[144px] h-[117px]"
        duration='2s'
        startX='-100%'
        startY='100%'
      />
      <ImageBackground
        src='/images/logo_light.png'
        alt="logo light"
        className="absolute -z-1 w-[32px] h-[32px] xl:left-[410px] lg:left-[210px] lg:bottom-[140px] md:left-[210px] md:bottom-[240px] bottom-1/2 left-10"
        duration='2s'
      />
      <ImageBackground
        src='/images/pumpkin_2.png'
        alt="pumpkin 2"
        className="absolute bottom-[0] -z-1 md:w-[100px] md:h-[108px] w-[80px] h-[86px] lg:left-[500px] md:left-1/2 left-80"
        duration='2s'
        startY='50%'
      />
      <ImageBackground
        src='/images/coin_2.png'
        alt="coin_2"
        className="absolute lg:bottom-[40px] lg:left-[842px] md:bottom-10 md:left-[700px] -z-1 w-[40px] h-[40px] md:block hidden"
        duration='2s'
      />
    </div>
  )
}

export default memo(VisionMission)