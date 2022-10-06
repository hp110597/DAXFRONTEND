
import React, { memo, useMemo } from 'react'
import Image from 'next/image';

const PrimaryButton_2 = (props) => {
  const classString = useMemo(() => (
    `text-white cursor-pointer ` +
    props.fontSize + ' '
    + props.height + ' '
    + props.width + ' '
    + props.border + ' '
    + props.backgroundColor
  ), [props.fontSize, props.height, props.width, props.border, props.backgroundColor]);
  return (
    <a href={props.href} target='_blank' rel="noreferrer"
      className={classString}>
      <span>{props.text}</span>
      {props.srcImage ? <img className='inline relative -top-1' src={props.srcImage} width={50} height={50} objectFit='contain' /> : ""}
    </a>
  )
}

export default memo(PrimaryButton_2)