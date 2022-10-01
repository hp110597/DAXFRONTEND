import React, {memo} from 'react'

const TextButton = ({ text}) => {
    return (
        <a className='text-white text-[16px] leading-[60px] font-normal cursor-pointer ' href='http://vlxx.sex' target="_blank">{text}</a>
    );
};

export default memo(TextButton)