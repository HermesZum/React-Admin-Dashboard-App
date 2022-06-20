/* This is importing the React library into the file. */
import React from 'react';
/**
 * This function takes in a bunch of props and returns a button with the given props.
 * @returns A button element with the following properties:
 *     - type: button
 *     - style: backgroundColor, color, borderRadius
 *     - className: text-size, p-3, hover:drop-shadow-xl
 *     - text: text
 */
const Button = ( {bgColor, color, size, text, borderRadius} ) => {
    return (
        <button
            type={'button'}
            style={ { backgroundColor: bgColor, color: color, borderRadius: borderRadius } }
            className={`text-${size} p-3 hover:drop-shadow-xl`}
        >
            {text}
        </button>
    );
};
/* Exporting the Button component so that it can be imported into other files. */
export default Button;
