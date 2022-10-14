import Text from 'components/Text'
import React, { useRef } from 'react'
import ImageBackground from 'components/image'
import { useOnScreen } from 'hooks/helper';

const AboutArtist = () => {
    const ref = useRef();
    const onScreen = useOnScreen(ref, '0.9');
    return (
        <div
            ref={ref}
            className={`-z-20 relative flex w-full h-[100vh] bg-black`}>
            <div className={`relative z-10 flex-col w-full h-[545px] justify-items-center ${onScreen ? "" : 'hidden'}`}>
                <ImageBackground
                    startY='20%'
                    src="/images/con_cop_nghe_si_Khim_Dang.png"
                    alt="..."
                    className="animate-imageFadeIn xl:w-[222px] xl:h-[270px] sm:w-[148px] sm:h-[180px] w-[74px] h-[90px] absolute top-[27px] lg:left-[13%] md:left-[9%] left-[5%] block"
                />
                <Text
                    className='font-storyBook md:text-[48px] text-[24px] text-[#F7AD00] justify-center  mt-[48px] text-center sm:text-[30px] '
                    text='KHIM DANG'
                    duration='1s'
                    animateStart='100px'
                    animateEnd='0px'
                />
                <div className=' sm:mt-[50px]  mt-[60px] h-[106px] '>
                    <Text
                        className='font-avertaBold text-[11px] lg:text-[20px] md:text-[15px] sm:text-[12.5px] leading-[40px] text-[#F7AD00] sm:pl-[32%] pl-[2%]'
                        text='We believe that a greater user experience is intuitive. It speaks to you'
                        duration='1.2s'
                        animateStart='100px'
                        animateEnd='0px'
                    />
                    <Text
                        className='font-avertaBold text-[11px] lg:text-[20px] md:text-[15px] sm:text-[12.5px] leading-[40px] text-[#F7AD00] sm:pl-[32%] pl-[2%]'
                        text='heart, not your brain and it provides answers instead of areating questions.'
                        duration='1.4s'
                        animateStart='100px'
                        animateEnd='0px'
                        delay='0.1s'
                    />
                </div>
                <div className='md:mt-[100px] sm:mt-[45px] mt-[120px] h-[161px]'>
                    <Text
                        className='font-avertaBold text-[11px] lg:text-[20px] md:text-[15px] sm:text-[12.5px]   leading-[40px] text-[#F7AD00] sm:pl-[20%] pl-[5%] '
                        text='We do brand strategies, brand identities, digital degisn, web and app'
                        duration='1s'
                        animateStart='200px'
                        animateEnd='0px'
                    />
                    <Text
                        className='font-avertaBold text-[11px] lg:text-[20px] md:text-[15px] sm:text-[12.5px]   leading-[40px] text-[#F7AD00] sm:pl-[20%] pl-[5%]'
                        text='development, copywriting, ux writing, branded environments, packaging'
                        duration='1.1s'
                        animateStart='200px'
                        animateEnd='0px'
                        delay='0.1s'
                    />
                    <Text
                        className='font-avertaBold text-[11px] lg:text-[20px] md:text-[15px] sm:text-[12.5px]  leading-[40px] text-[#F7AD00] sm:pl-[20%] pl-[5%]'
                        text='design, wayfinding, business innovation and more.'
                        duration='1.15s'
                        animateStart='200px'
                        animateEnd='0px'
                        delay='0.2s'
                    />
                </div>

            </div>

            <div className={` ${onScreen ? '' : 'hidden'}`}>
                <ImageBackground
                    startY='20%'
                    src="/images/logo_red.png"
                    alt="..."
                    className="animate-imageFadeIn w-[32px] h-[32px] -z-1 absolute top-[70%] lg:left-[60%] md:left-[20%] sm:left-[30%] left-[20%]"
                />
                <ImageBackground
                    startY='20%'
                    src="/images/bubbles_1.png"
                    alt="..."
                    className="animate-imageFadeIn md:w-[375px] md:h-[200px] sm:w-[187.5px] sm:h-[100px] absolute top-[20%] -z-1 left-[35%] "
                    endOpacity='0.3'
                />
                <ImageBackground
                    startY='30%'
                    src="/images/chicken_2.png"
                    alt="..."
                    className="animate-imageFadeIn md:w-[103px] md:h-[334px] sm:w-[51.5px] sm:h-[167px] absolute top-[280px] right-0 z-1"
                />
                <ImageBackground
                    startY='20%'
                    src="/images/fish_1.png"
                    alt="..."
                    className="animate-imageFadeIn w-[100px] h-[170px] sm:w-[200px] sm:h-[340.48px] absolute lg:top-[40%] md:top-[20%] sm:top-[50%] top-[27%] left-0 -z-1"
                />
                <ImageBackground
                    startY='20%'
                    src="/images/image_1.png"
                    alt="..."
                    className="animate-imageFadeIn 2xl:w-[390px] 2xl:h-[392px] sm:w-[230px] sm:h-[230px] w-[130px] h-[130px] absolute top-0 left-0 -z-1 "
                />
                <ImageBackground
                    startY='20%'
                    endOpacity='0.9'
                    src="/images/chicken_1.png"
                    alt="..."
                    className="animate-imageFadeIn w-[270px] h-[200px] md:w-[464px] md:h-[410px] sm:w-[232px] sm:h-[205px]  absolute xl:top-[30%] lg:top-[55%] sm:top-[50%] top-[70%] sm:right-0 right-[30px] -z-10 "
                />
                <ImageBackground
                    src="/images/logo_orange.png"
                    alt="..."
                    className="animate-imageFadeIn sm:opacity-10 w-[32px] h-[32px] -z-1 absolute sm:top-[493px] top-[300px] left-[330px]"
                />
                <ImageBackground
                    startY='20%'
                    src="/images/tiny_sun_1.png"
                    alt="..."
                    className="animate-imageFadeIn w-[150px] h-[59px] sm:w-[200px] sm:h-[100px] md:w-[300px] md:h-[117.7px] absolute lg:top-[44px] lg:right-[38px] md:top-[52px] md:right-[25px] top-[20px] right-0 "
                />
            </div>

        </div>
    )
}

export default AboutArtist