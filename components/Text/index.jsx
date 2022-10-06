import React, { memo, useEffect, useMemo } from 'react'


const Text = (props) => {
  const STYLE = useMemo(() => {
    let _animateStart = '0%';
    let _animateEnd = '0%';
    let _duration = '0s';
    if (props.duration) _duration = props.duration;
    if (props.animateStart) _animateStart = props.animateStart;
    if (props.animateEnd) _animateEnd = props.animateEnd;
    return {
      '--startPosition': _animateStart,
      '--endPosition': _animateEnd,
      '--duration': _duration
    }
  }, []);
  return (
    <p className={`
            ${props.fontSize}
            ${props.fontFamily}
            ${props.color}
            ${props.lineHeight}
            relative 
            animate-textAnimate
          `}
      style={STYLE}>{props.text}</p>
  )
}

export default memo(Text);