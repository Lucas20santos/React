import React from 'react';
import './Menu.css';

export default function Menu()
{
    return(
        <div>
            <form action='/api' method='post'>
                <label>
                    <p>CPF:</p>
                    <input type="text" name="name" />
                </label>
                <label>
                    <p>Senha: </p>
                    <input type="text" name="senha" />
                </label>
                <br />
                <br />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}
