import React, {memo} from 'react'

const TextButton = (props) => {
    return (
        <a className='text-white text-[16px] leading-[60px] font-normal cursor-pointer ' href={ props.href} target="_blank">{props.text}</a>
    );
};

export default memo(TextButton)