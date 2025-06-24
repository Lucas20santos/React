const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginBtn');

loginButton.addEventListener('click', (e) => {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (email.trim() === '' || password.trim() === '')
    {   
        
        alert("Par favor, preencha todos os campos (Email e Senha).");
        e.preventDefault();
    }
    else
    {
        alert("Validando cliente OK. Enviando dados para o servidor...");
    } 
})
console.log("Script JavaScript Carregado!")
