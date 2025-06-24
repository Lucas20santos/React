const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => 
{

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email.trim() === '' || password.trim() === '')
    {
        alert("Par favor, preencha todos os campos (Email e Senha).");
        event.preventDefault();
    }
    else
    {
        alert("Validando cliente OK. Enviando dados para o servidor...");
    } 
});

console.log("Script JavaScript Carregado!")
