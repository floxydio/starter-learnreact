import React from 'react'

export default function Button({ bColor, colorText, onFunction, myText }) {
    return (
        <button style={{
            backgroundColor: bColor,
            color: colorText,
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
        }} onClick={onFunction}>
            {myText}
        </button>
    )
}
