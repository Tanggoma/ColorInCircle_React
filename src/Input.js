import React from 'react'
import colorNames from 'colornames'; // translate color name to Hex value 

const Input = ({ colorValue, setColorValue, setHexValue }) => {

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add color name:</label>
            <input
                type="text"
                autoFocus
                placeholder='add color name'
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value))
                }}
            />
        </form>
    )
}

export default Input