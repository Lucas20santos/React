const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginBtn');

function handleLogin()
{
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email.trim() === '' || password.trim() === '')
    {
        alert("Par favor, preencha todos os campos (Email e Senha).");
    }
    else
    {
        alert("Login efetuado com sucesso!")
        window.location.href = './pages/home.html'
    }
}

loginButton.addEventListener('click', handleLogin)
console.log("Script JavaScript Carregado!")
