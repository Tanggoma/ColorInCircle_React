import React from 'react'

const Circle2 = ({ colorValue, hexValue }) => {
    return (
        <section
            className='circle'
            style={{
                backgroundColor: colorValue,
            }}
        >
            <p>{colorValue ? colorValue : "No value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    )
}

Circle2.defaultProps = {
    colorValue: "Empty value"
}

export default Circle2