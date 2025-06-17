import React from 'react'
// import { useState } from 'react'

function Button({ count, onClick, op})
{
    let operacao = "somar";

    if(op === "+")
    {
        operacao = "somar"
    }
    if (op === "-")
    {
        operacao = "Subtração";
    }

    return (
        <>
            <button onClick={onClick}>
                {operacao}
            </button>
        </>
    );
};

export default Button;
