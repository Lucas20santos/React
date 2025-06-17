function Condicionais() 
{   
    let content;
    let isLoggedIn = true;
    
    if (isLoggedIn)
    {
        content = <h1>Usuário está conectado!</h1>
    }
    else
    {
        content = <h2>Usuário não está conectado!</h2>
    }
    return (
        <>
            {content}
        </>
    )
}

export default Condicionais;
