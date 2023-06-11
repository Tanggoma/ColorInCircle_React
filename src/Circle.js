import React from 'react'
import convert from 'color-convert';

const Circle = ({ colorRandomValue, generateRandomColor }) => {

    const getColorName = () => {
        const colorName = convert.hex.keyword(colorRandomValue);
        return colorName || 'Unknown';
    };

    return (
        <>
            <section
                className='circle'
                onClick={generateRandomColor}
                style={{ backgroundColor: colorRandomValue }}
            >
                <p>Click me!</p>
            </section>
            <p> {getColorName()}</p>
        </>
    )
}

export default Circle