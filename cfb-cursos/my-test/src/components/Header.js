import React from 'react'
import Menu from './menu/Menu';
import './Header.css';

export default function Header()
{
    return(
        <div className='header'>
            <header>
                <Menu />
            </header>
        </div>    
    )
}
