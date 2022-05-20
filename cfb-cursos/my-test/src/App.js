import React from 'react'
import Header from './components/Header'
import './App.css'
// import Formulario from './components/Form/Formulario';

export default function App()
{
  const [data, setData] = React.useState(null);

  React.useEffect(() => 
  {
    fetch("/api")
    .then((res) => res.json())
    .then( data => setData(data.message))
  }, []);

  return (
    <>
    <p>Loding... { data }</p>
      <div>
        <Header />
      </div>
    </>
  );
}
