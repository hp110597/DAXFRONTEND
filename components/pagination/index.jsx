import { memo, useCallback, useMemo, useState } from "react"
import ButtonImage from "components/image_button";

const PaginateSlider = (props) => {
  const { numberOfDot, sizeDot } = props;
  const [activeDot, setActiveDot] = useState(0);

  const dots = useMemo(() => Array(numberOfDot).fill(0), [numberOfDot]);

  const onChangeIndex = useCallback((index) => {
    setActiveDot(index);
  }, [])

  const dotItems = useCallback(() => {
    return dots.map((dotItem, index) => (
      <li key={index} onClick={onChangeIndex.bind(PaginateSlider, index)} className='cursor-pointer'>
        <div className={`${index === activeDot ? 'hidden' : ''}`}>
          <ButtonImage
            src='/images/dot.png'
            atl='Icons Close'
            width={40}
            height={10}
          />
        </div>
        <div className={`${index === activeDot ? 'animate-dotActiveFadein' : 'hidden'}`}>
          <ButtonImage
            src='/images/dot_active.png'
            atl='Icons Close'
            width={40}
            height={40}
          />
        </div>
      </li>
    ))
  }, [activeDot, numberOfDot])
  return (
    <ul className={`flex ${sizeDot.gap} items-center`}>
      {dotItems()}
    </ul>
  )
}

export default memo(PaginateSlider)