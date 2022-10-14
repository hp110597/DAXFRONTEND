import React, { memo, useEffect, useMemo, useRef } from 'react'


const Text = (props) => {
  const STYLE = useMemo(() => {
    let _animateStart = '0%';
    let _animateEnd = '0%';
    let _duration = '1s';
    let _delay = '0s'
    if (props.duration) _duration = props.duration;
    if (props.animateStart) _animateStart = props.animateStart;
    if (props.animateEnd) _animateEnd = props.animateEnd;
    if (props.delay) _delay = props.delay;
    return {
      '--startPosition': _animateStart,
      '--endPosition': _animateEnd,
      '--duration': _duration,
      '--delay': _delay
    }
  }, [props.duration, props.animateStart, props.animateEnd, props.delay]);
  return (
    <p className={`animate-textAnimate ${props.className}`}
      style={STYLE}>{props.text}</p>
  )
}

export default memo(Text);