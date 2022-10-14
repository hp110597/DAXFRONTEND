import { memo, useState, useRef, useMemo } from "react";
import ProductItem from "./product_item";
import Pagination from "components/pagination";
import ImageBackground from "components/image";
import { useOnScreen } from "hooks/helper";

const PRODUCTS = [
  {
    id: "PD001",
    image: "/images/cup_1.png",
    name: "COLD CUP 1",
    infor: [
      [
        "The fashionable cup designed by one of the most creative creator Khim",
        "Dang, The fashionable cup designed by one of the most creative creator",
        "Khim Dang, The fashionable cup designed by one of the most creative",
        "creator Khim Dang.",
      ],
      ["+ Dung tích 500ml", "+ 30cmx17cm", "+ Chất liệu: nhôm nguyên khối"],
    ],
  },
  {
    id: "PD002",
    image: "/images/cup_2.png",
    name: "COLD CUP 2",
    infor: [
      [
        "The fashionable cup designed by one of the most creative creator Khim",
        "Dang, The fashionable cup designed by one of the most creative creator",
        "Khim Dang, The fashionable cup designed by one of the most creative",
        "creator Khim Dang.",
      ],
      ["+ Dung tích 500ml", "+ 30cmx17cm", "+ Chất liệu: nhôm nguyên khối"],
    ],
  },
  {
    id: "PD003",
    image: "/images/cup_3.png",
    name: "COLD CUP 3",
    infor: [
      [
        "The fashionable cup designed by one of the most creative creator Khim",
        "Dang, The fashionable cup designed by one of the most creative creator",
        "Khim Dang, The fashionable cup designed by one of the most creative",
        "creator Khim Dang.",
      ],
      ["+ Dung tích 500ml", "+ 30cmx17cm", "+ Chất liệu: nhôm nguyên khối"],
    ],
  },
];

const Products = (props) => {
  const ref = useRef();
  const onScreen = useOnScreen(ref, '0.001');
  const [indexActive, setIndexActive] = useState(0);
  const prevIndexActive = useRef(null);
  const handleOnChangeIndexActive = (index) => {
    setIndexActive((prev) => {
      prevIndexActive.current = prev;
      return index;
    });
  };

  const productList = useMemo(() => {
    return PRODUCTS.map((product, index) => {
      return (
        <ProductItem
          key={index}
          product={product}
          onShowDialog={props.onShowDialog}
          productActive={indexActive === index ? true : false}
          prevProductActive={prevIndexActive.current === index ? true : false}
          index={index}
        />
      );
    });
  }, [PRODUCTS, indexActive, prevIndexActive, props.onShowDialog]);

  return (
    <div ref={ref} className={`h-screen bg-[#000000] relative overflow-hidden snap-start`}>
      {productList}
      <Pagination numberOfDot={PRODUCTS.length} className='absolute md:bottom-8 md:right-10 md:gap-x-8 bottom-44 gap-x-4 right-1/2 translate-x-1/2 md:translate-x-0 z-[6]'
        onChangeIndexActive={handleOnChangeIndexActive}
        dotActive={indexActive}
      />
      <div className={`${onScreen ? '' : 'hidden'}`}>
        <ImageBackground
          src='/images/free_form_2.png'
          alt='Free Form'
          className={`absolute 3xl:w-[650px] 3xl:[h-600px] 2xl:w-[550px] 2xl:h-[500px] xl:w-[500px] xl:h-[434px] lg:w-[400px] lg:h-[360px] md:w-[500px] md:h-[434px] w-[300px] h-[260px] top-0 left-0`}
          endY='-15%'
          endX='-10%'
        />
        <ImageBackground
          src='/images/coin_3.png'
          alt='coin_3'
          className={`absolute w-[48px] h-[48px] md:top-[60px] md:left-[50px] top-[80px] 2xl:top-[130px]`}
          endY='-15%'
          endX='-10%'
        />
        <ImageBackground
          src='/images/logo_blue.png'
          alt='logo blue'
          className={`absolute w-[32px] h-[32px] xl:top-[30px] xl:left-[250px] lg:top-[80px] lg:left-[200px] md:top-[30px] md:left-[250px] top-1/4 left-1/2 2xl:top-[100px]`}
          endY='-15%'
          endX='-10%'
        />
        <ImageBackground
          src='/images/x_image.png'
          alt='X image'
          className={`absolute md:w-[600px] md:h-[600px] w-[450px] h-[450px] 3xl:w-[900px] 3xl:h-[900px] 2xl:w-[800px] 2xl:h-[800px] top-1/2 left-1/2`}
          startY='-50%'
          startX='-50%'
          endY='-50%'
          endX='-50%'
          duration='2s'
          endOpacity='0.2'
        />
        <ImageBackground
          src='/images/star_one_1.png'
          alt='Star one 1'
          className={`absolute w-[32px] h-[54px] top-[50px] left-1/2`}
          endX='-50%'
        />
        <ImageBackground
          src='/images/coin_3.png'
          alt='Coin 3'
          className={`absolute w-[48px] h-[48px] md:top-0 md:right-[150px] right-[100px]`}
          endY='-50%'
        />
        <ImageBackground
          src='/images/branch.png'
          alt='branch'
          className={`absolute md:w-[320px] md:h-[305px] top-10 -right-14 w-[260px] h-[240px] 2xl:w-[400px] 2xl:h-[380px]`}
          startX='50%'
          startY='-50%'
          duration='2s'
        />
        <ImageBackground
          src='/images/star_one_1.png'
          alt='Star one 1'
          className={`absolute w-[32px] h-[54px] md:bottom-32 right-16 bottom-10 md:block hidden`}
        />
        <ImageBackground
          src='/images/coin_3.png'
          alt='coin_3'
          className={`absolute w-[48px] h-[48px] md:bottom-32 md:left-1/2 bottom-1/2 left-1/2 md:block hidden`}
          endY='-15%'
          endX='-10%'
        />
        <ImageBackground
          src='/images/logo_yellow.png'
          alt='Logo Yellow'
          className={`absolute w-[32px] h-[32px] bottom-[200px] left-[360px]`}
        />
        <ImageBackground
          src='/images/flower.png'
          alt='coin_3'
          className={`absolute w-[200px] h-[160px] bottom-0 -left-10`}
          startX='-50%'
          startY='50%'
          duration='2s'
        />
        <ImageBackground
          src='/images/coin_3.png'
          alt='coin_3'
          className={`absolute w-[48px] h-[48px] md:bottom-10 md:left-56 bottom-20 left-1/2`}
        />
        <ImageBackground
          src='/images/star_one_1.png'
          alt='Star one 1'
          className={`absolute w-[32px] h-[54px] bottom-1/3 left-0`}
        />

      </div>
    </div>
  );
};

export default memo(Products);
