import React, { useState } from 'react'
import MultiRangeSlider from "multi-range-slider-react";

import '../../Assets/CSS/Global.css'

import { FaLessThan } from 'react-icons/fa';

function VaryRangeSlider(props) {
    const { min, max, steps, minValue, maxValue } = props
    const [minimumValue, set_minValue] = useState(minValue);
    const [maximumValue, set_maxValue] = useState(maxValue);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };

    return (
        <div className="w-full">
            <MultiRangeSlider
                min={min}
                max={max}
                step={steps}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e);
                }}

                ruler='false'
                label='false'
                style={{
                    padding: '0rem',
                    boxShadow: 'none',
                    backgroundColor: '#548bf4',
                    border: 'none'
                }}

            />
            <span className='flex items-center justify-between w-full'>
                <span className='flex items-center font-semibold justify-center'><FaLessThan className='mr-1.5' /> {minimumValue}</span>
                <span className='flex items-center font-semibold justify-center'><FaLessThan className='mr-1.5' /> {maximumValue}</span>
            </span>
        </div>
    );
}

export default VaryRangeSlider