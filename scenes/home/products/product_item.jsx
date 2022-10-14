import ImageBackground from "components/image";
import Text from "components/text";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import PrimaryButton from "components/primary_button";
import ProductInfor from './product_infor';
import styles from './styles';

const ProductItem = (props) => {
  const { product, onShowDialog, productActive, prevProductActive } = props;
  const [indexInfor, setIndexInfor] = useState(0);
  const [widthInfor, setWidthInfor] = useState(0);
  const refInfor = useRef();
  useEffect(() => {
    setWidthInfor(refInfor.current.offsetWidth);
  }, [productActive])
  const handleOnClick = useCallback((action) => {
    if (action === '-') {
      setIndexInfor(prev => {
        if ((prev + 1) < product.infor.length) {
          return prev + 1
        }
        return prev
      })
    }
    else {
      setIndexInfor(prev => {
        if ((prev - 1) >= 0) {
          return prev - 1
        }
        return prev
      })
    }
  }, []);
  const INTRODUCE = useMemo(() => {
    return product.infor.map((item, index) => {
      return <ProductInfor key={index} infor={item} prevProductActive={prevProductActive} />
    })
  }, [prevProductActive])

  const style = useMemo(() => {
    return { ...styles.productInfor, transform: `translateX(-${widthInfor * indexInfor}px)` }
  }, [indexInfor, widthInfor])
  return (
    <div className={`h-full w-full absolute xl:top-[50px] lg:top-[100px] md:top-[50px] z-[2] ${productActive || prevProductActive ? '' : 'hidden'}
     ${productActive ? 'z-[5]' : ''}`}>
      <div className="xl:max-w-7xl xl:gap-x-20 lg:flex">
        <ImageBackground
          src={product.image}
          alt={product.name}
          className={`xl:w-[352px] xl:h-[352px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] block flex-shrink-0 ${prevProductActive ? 'animate-imageFadeOut' : ''}`}
          startY={`${prevProductActive ? '0%' : '100%'}`}
          endY={`${prevProductActive ? '-100%' : '0%'}`}
        />
        <div className="text-white flex-shrink-1 grow mt-10 relative">
          <Text
            animateStart={`${prevProductActive ? '0%' : '600%'}`}
            animateEnd={`${prevProductActive ? '-600%' : '0%'}`}
            className={`font-avertaBold md:text-[48px] text-[30px] text-[#FDF8E2] md:mb-10 mb-5 ${prevProductActive ? 'animate-textAnimateFadeOut' : ''} lg:w-full md:w-[70%] md:mx-auto w-[87%] mx-auto`}
            text={product.name}
            duration='1.2s'
          />
          <div className="lg:w-full lg:mx-0 md:w-[70%] md:mx-auto w-[87%] mx-auto overflow-hidden" >
            <div className="w-full flex transition duration-1000" ref={refInfor} style={style}>
              {INTRODUCE}
            </div>
          </div>
          <ImageBackground
            src='/images/arrow_left_1.png'
            alt='Prev Button'
            className={`md:w-[32px] md:h-[32px] absolute md:top-1/2 w-[25px] h-[25px] top-1/2 lg:-left-14 md:left-14 cursor-pointer ${prevProductActive ? 'animate-imageFadeOut' : 'animate-imageFadeIn'}`}
            startX={`${prevProductActive ? '0%' : '-500%'}`}
            endX={`${prevProductActive ? '-200%' : '0%'}`}
            endY='-50%'
            onClickBtn={handleOnClick.bind({}, '+')}
          />
          <ImageBackground
            src='/images/arrow_right_1.png'
            alt='Next Button'
            className={`md:w-[32px] md:h-[32px] absolute md:top-1/2 w-[25px] h-[25px] top-1/2 right-5 xl:right-12 lg:right-32 md:right-16 cursor-pointer ${prevProductActive ? 'animate-imageFadeOut' : 'animate-imageFadeIn'}`}
            startX={`${prevProductActive ? '0%' : '500%'}`}
            endX={`${prevProductActive ? '200%' : '0%'}`}
            endY='-50%'
            onClickBtn={handleOnClick.bind({}, '-')}
          />
          <div className="flex justify-end">
            <PrimaryButton
              className={`pl-6 pr-20 py-3 rounded-2xl bg-white/30 text-white cursor-pointer text-xl inline-block relative transition hover:!scale-125 ${prevProductActive ? 'animate-fadeOut invisible' : 'animate-fadeIn'} ${productActive || prevProductActive ? '' : 'hidden'} xl:right-0 md:right-20`}
              srcImage='/images/arrow_right.png'
              text='Mua ngay'
              onShowDialog={onShowDialog.bind({}, product.id)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(ProductItem)