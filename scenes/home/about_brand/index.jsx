import { useState, useRef, useEffect, useMemo, memo } from "react"
import styles from './styles'
import ImageTest from "components/image_test"

const AboutBrand = () => {
  const [width, setWidth] = useState(40);
  const [isSwipe, setIsSwipe] = useState(false);
  const coordinateX = useRef();
  const handleOnMouseMove = (e) => {
    const rect = coordinateX.current.getBoundingClientRect();
    if (e.type === 'mousemove') {
      const widthPageOne = e.clientX - rect.left;
      setWidth(widthPageOne);
    }
    if (e.type === 'touchmove') {
      const widthPageOne = e.touches[0].pageX - rect.left;
      setWidth(widthPageOne);
    }
  }
  const stylePC = useMemo(() => {
    return { ...styles.widthPageOnePC, width: width };
  }, [width])

  const styleMobile = useMemo(() => {
    return { ...styles.widthPageOneMobile, left: width };
  }, [width])

  useEffect(() => {
    window.mobileAndTabletCheck = function () {
      let check = false;
      (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };

    if (window.mobileAndTabletCheck()) {
      setIsSwipe(true);
    }
  }, []);
  const SHOW_SWIPE = useMemo(() => {
    if (isSwipe)
      return <div className="absolute top-1/2 -translate-x-2/4 -translate-y-2/4 z-30" style={styleMobile}>KÉO</div>;
  }, [isSwipe, width])

  return (
    <div className="h-[600px] relative" ref={coordinateX} onMouseMove={handleOnMouseMove} onTouchMove={handleOnMouseMove}>
      {/* Begin part 1 */}
      <div className="h-full bg-[#1E1E1E] absolute top-0 left-0 overflow-hidden z-20" style={stylePC}>
        <div className="w-screen relative">
          <div className="grid grid-cols-[600px_auto] xl:container gap-y-[80px] mt-[45px]">
            {/*item-grid-1 */}
            <div className="flex items-center justify-center gap-x-6">
              <ImageTest className={`w-[200px] h-[100px]`} src='/images/Dax_Original.png' alt='Logo Brand' />
              <h1 className="font-avertaBold text-[48px] text-[#FDF8E2]">FOR US</h1>
            </div>
            {/*item-grid-2 */}
            <div className="col-start-1 col-end-2">
              <ImageTest className={`w-[600px] h-[125px]`} src='/images/bunch_1.png' alt='Decorate Picture' />
            </div>
            {/*item-grid-3*/}
            <div className="text-[36px] font-avertaBold text-[#FDF8E2] flex flex-col justify-between items-end [word-spacing:5px] [line-height:60px] tracking-widest">
              <p>Everything will be digital.</p>
              <p>Even the things that won&apos;t.</p>
            </div>
          </div>
          <div className="font-avertaBold xl:text-base [line-height:30px] xl:container mt-10 tracking-wide text-right text-white flex justify-end">
            <p className="w-8/12">This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax, This is long story about dax.</p>
          </div>
          <div className="absolute top-[60px] left-[570px] -z-1">
            <ImageTest className={`w-[32px] h-[54px]`} src='/images/star_one_1.png' alt='Star One 1' />
          </div>
          <div className="absolute top-[60px] left-[80px] -z-1">
            <ImageTest className={`w-[300px] h-[175px] opacity-50`} src='/images/candy_1.png' alt='Candy 1' />
          </div>
          <div className="absolute top-[80px] right-[326px] -z-1">
            <ImageTest className={`w-[32px] h-[32px]`} src='/images/logo_blue.png' alt='Logo Blue' />
          </div>
          <div className="absolute top-[-45px] right-[58px] -z-1">
            <ImageTest className={`w-[100px] h-[91px]`} src='/images/lamp.png' alt='Lamp' />
          </div>
          <div className="absolute top-[10px] right-[8px] -z-1">
            <ImageTest className={`w-[50px] h-[93px]`} src='/images/star_1.png' alt='star 1' />
          </div>
          <div className="absolute top-[235px] right-[139px] -z-1">
            <ImageTest className={`w-[25px] h-[25px]`} src='/images/coin_3.png' alt='coin 3' />
          </div>
          <div className="absolute top-[448px] left-[114px] -z-1">
            <ImageTest className={`w-[32px] h-[32px]`} src='/images/logo_light.png' alt='Logo Light' />
          </div>
          <div className="absolute bottom-[-125px] left-[58px] -z-1">
            <ImageTest className={`w-[32px] h-[32px]`} src='/images/logo_blue.png' alt='Logo Blue' />
          </div>
          <div className="absolute bottom-[-90px] left-[842px] -z-1">
            <ImageTest className={`w-[40px] h-[40px]`} src='/images/coin_2.png' alt='Coin 2' />
          </div>
          <div className="absolute bottom-[-135px] right-[-30px] -z-1">
            <ImageTest className={`w-[100px] h-[108px]`} src='/images/pumpkin_1.png' alt='Pumbkin' />
          </div>
        </div>
      </div>
      {/* End part 1 */}

      {/* Begin part 2 */}
      <div className={`h-full w-screen bg-[#1E1E1E] absolute top-0 right-0 z-10 overflow-hidden`}>
        <div className="grid grid-cols-[600px_auto] xl:container gap-y-[80px] mt-[45px]">
          {/*item-grid-1 */}
          <div className="flex items-center justify-center gap-x-6">
            <ImageTest className={`w-[200px] h-[100px]`} src='/images/Dax_Original.png' alt='Logo Brand' />
            <h1 className="font-avertaBold text-[48px] text-[#FDF8E2]">FOR US</h1>
          </div>
          {/*item-grid-2 */}
          <div className="col-start-1 col-end-2 text-white">
            <h1 className="font-avertaBold ml-10 text-[40px]">Vision</h1>
            <p className="text-center ml-2 text-xl [line-height:35px]">This is dax mission, This is dax mission, This is dax mission, This is dax mission, This is dax mission, This is dax mission.</p>
          </div>
        </div>
        <div className="mt-16 flex justify-end">
          <div className="w-1/2 text-white flex flex-col items-end">
            <h1 className="font-avertaBold text-[40px] mr-16">Mission</h1>
            <p className="text-right mr-10 text-xl [line-height:35px] mt-5">This is dax mission, This is dax mission, This is dax mission, This is dax mission, This is dax mission, This is dax mission.</p>
          </div>
        </div>

        <div className="absolute top-[105px] left-[80px] -z-1">
          <ImageTest className={`w-[300px] h-[175px] opacity-50`} src='/images/candy_1.png' alt='candy 1' />
        </div>
        <div className="absolute top-[13px] right-[28px] -z-1">
          <ImageTest className={`w-[600px] h-[125px]`} src='/images/bunch_1.png' alt='bunch 1' />
        </div>
        <div className="absolute top-[105px] left-[570px] -z-1">
          <ImageTest className={`w-[32px] h-[54px]`} src='/images/star_one_1.png' alt='star 1' />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -z-1">
          <ImageTest className={`w-[100px] h-[91px]`} src='/images/lamp.png' alt='lamp' />
        </div>
        <div className="absolute top-1/2 left-1/2 translate-x-[200%] -z-1">
          <ImageTest className={`w-[50px] h-[93px]`} src='/images/star_1.png' alt='star 1' />
        </div>
        <div className="absolute top-[365px] right-[340px] -z-1">
          <ImageTest className={`w-[32px] h-[32px]`} src='/images/logo_blue.png' alt='logo blue' />
        </div>
        <div className="absolute top-[280px] right-[140px] -z-1">
          <ImageTest className={`w-[24px] h-[24px]`} src='/images/coin_3.png' alt='coin 3' />
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[-100px] -z-1">
          <ImageTest className={`w-[300px] h-[350px] opacity-50`} src='/images/pray.png' alt='pray' />
        </div>
        <div className="absolute -bottom-[10px] -left-[15px] -z-1">
          <ImageTest className={`w-[300px] h-[240px]`} src='/images/mask.png' alt='mask' />
        </div>
        <div className="absolute bottom-[140px] left-[410px] -z-1">
          <ImageTest className={`w-[32px] h-[32px]`} src='/images/logo_light.png' alt='logo light' />
        </div>
        <div className="absolute -bottom-[0] left-[500px] -z-1">
          <ImageTest className={`w-[100px] h-[108px]`} src='/images/pumpkin_2.png' alt='pumpkin 2' />
        </div>
        <div className="absolute bottom-[40px] left-[842px] -z-1">
          <ImageTest className={`w-[40px] h-[40px]`} src='/images/coin_2.png' alt='coin_2' />
        </div>
      </div>
      {/* End part 2 */}
      {/* SHOW_SWIPE */}
      {SHOW_SWIPE}
    </div>
  )
}

export default memo(AboutBrand)