import './App.css';
import Condicionais from './Condicionais';
import Lista from './Lista'
import Button from './Button'

function App() 
{
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
      <Button />

    </div>
  );
}

export default App;
