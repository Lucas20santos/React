import React from 'react'
import { useState } from 'react'
import './App.css';
import Condicionais from './Condicionais';
import Lista from './Lista'
import Button from './Button'

function App() 
{
  const [count, setCount] = useState(0);

  function handleClickAdd()
  {
    if(count <= 9)
    {
      setCount(count + 1);
    }
  }

  function handleClickSub()
  {
    if(count >= 1)
    {
      setCount(count - 1);
    }
  }


  const user = {
    name: 'Lucas de Souza Santos',
    imageUrl: 'https://avatars.githubusercontent.com/u/86927326?v=4',
    imageSize: 90,
  }
  return (
    <div className="App">
      <h1>Nome: {user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      < Condicionais />
      <Lista />
      <Button count={count} onClick={handleClickAdd} op="+" />
      <Button count={count} onClick={handleClickSub} op="-" />
      <h1>Valor: {count}</h1>
    </div>
  );
}

export default App;
