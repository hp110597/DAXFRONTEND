
import React from 'react'

const PrimaryButton = (props) => {
    const classString = "text-white font-avertaBold cursor-pointer bg-primary " +
        props.fontSize + ' '
        + props.height + ' '
        + props.width + ' '
        + props.border;
    return (
        <a href={props.href} target='_blank'
            className={classString}>{props.text}
        </a >
    )
}

export default PrimaryButton