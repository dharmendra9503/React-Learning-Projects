import React from 'react';
import colorsJSON from '../assets/Colors.json';

const ColorSlide = ({ color, setColor }) => {
    return (
        <button className="w-full my-2 outline-none px-4 py-1 rounded shadow-lg text-white"
            key={color}
            style={{ backgroundColor: colorsJSON[color] }}
            onClick={() => setColor(colorsJSON[color])}>
            {color} ({colorsJSON[color]})
        </button>
    )
}

export default ColorSlide