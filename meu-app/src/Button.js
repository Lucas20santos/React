import React from 'react'

function Button() 
{
    function handleClick()
    {
        console.log("Clicked!");
    }

    return (
        <>
            <button onClick={handleClick}>
                Click me
            </button>
        </>
    );
};

export default Button;
