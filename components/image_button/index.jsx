import Image from 'next/image';
import React, { memo } from 'react';

const ButtonImage = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <Image src={props.src} alt={props.alt} width={props.width} height={props.height} objectFit='cover' />
    </a>
  );
}

export default memo(ButtonImage);