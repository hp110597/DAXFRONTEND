
import React, { memo, useMemo } from 'react'

const PrimaryButton = (props) => {
    const classString = useMemo(() => (
        "text-white font-avertaBold cursor-pointer bg-primary " +
        props.fontSize + ' '
        + props.height + ' '
        + props.width + ' '
        + props.border
    ), [props.fontSize, props.height, props.width, props.border]);
    return (
        <a href={props.href} target='_blank' rel="noreferrer"
            className={classString}>
            {props.text}
        </a>
    )
}

export default memo(PrimaryButton)