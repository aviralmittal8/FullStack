import React, { useState } from 'react';
import ABESLOGO from './ABESLOGO.jpg';

function ImageManipulation() {
    const [height, setHeight] = useState(150);
    const [width, setWidth] = useState(100);
    const [rotation, setRotation] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('white');

    const enhanceHeight = () => {
        setHeight(height + 20);
    };

    const enhanceWidth = () => {
        setWidth(width + 20);
    };

    const decreaseHeight = () => {
        setHeight(Math.max(20, height - 20)); 
    };

    const decreaseWidth = () => {
        setWidth(Math.max(20, width - 20)); 
    };

    const rotateImage = () => {
        setRotation(rotation + 45);
    };

    const changeBackgroundColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        setBackgroundColor(`rgb(${red}, ${green}, ${blue})`);
    };

    return (
        <div
            style={{
                height: '400px',
                width: '400px',
                border: '2px solid red',
                marginRight: '200px',
                backgroundColor: backgroundColor,
            }}
        >
            <div
                style={{
                    paddingLeft: '100px',
                }}
            >
                <img
                    src={ABESLOGO}
                    alt="ABES Logo"
                    style={{
                        height: `${height}px`,
                        width: `${width}px`,
                        transform: `rotate(${rotation}deg)`,
                    }}
                />
            </div>
            <div>
                <button onClick={enhanceHeight}>Enhance Height</button>&nbsp;&nbsp;&nbsp;
                <button onClick={enhanceWidth}>Enhance Width</button>&nbsp;&nbsp;&nbsp;
                <button onClick={decreaseHeight}>Decrease Height</button>&nbsp;&nbsp;&nbsp;
                <button onClick={decreaseWidth}>Decrease Width</button>&nbsp;&nbsp;&nbsp;
                <button onClick={rotateImage}>Rotate</button>&nbsp;&nbsp;&nbsp;
                <button onClick={changeBackgroundColor}>Change Background Color</button>
            </div>
        </div>
    );
}

export default ImageManipulation;
