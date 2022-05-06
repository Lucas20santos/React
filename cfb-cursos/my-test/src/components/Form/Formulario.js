import React from 'react'
import './Formulario.css'

export default function Formulario ()
{
    return(
        <div className='form'>
            <form action='/' method='get'>
                <label className='label'>
                    <input type='text' name='name' />
                </label>
                <input className='button' type="submit" value="Enviar" />
            </form>
        </div>
    );
}