import Image from 'next/image';
import React, { memo, useMemo } from 'react';
import styles from './styles';

const ButtonImage = (props) => {
  const buttonSize = { ...styles.size, width: props.width, height: props.height };
  return (
    <a
      href={props.href} target="_blank" rel="noreferrer"
      className='inline-block relative'
      style={buttonSize}>
      <Image src={props.src} alt={props.alt} layout='fill' objectFit='contain' />
    </a>
  );
}

export default memo(ButtonImage);