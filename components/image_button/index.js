import Image from 'next/image';
import React from 'react';

function ButtonImage(props) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer">
      <Image src={props.src} alt={props.alt} width={40} height={40} objectFit='cover' />
    </a>
  );
}

export default ButtonImage;