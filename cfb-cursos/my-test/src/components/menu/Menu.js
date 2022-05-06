import React from 'react';
import './Menu.css';

export default function Menu()
{
    return(
        <div>
            <ul className='menu'>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/Sobre'>Sobre</a>
                </li>
                <li>
                    <a href='/Contatos'>Contatos</a>
                </li>
                <li>
                    <a href="/Departamento">Departamento</a>
                </li>
            </ul>
        </div>
    )
}
