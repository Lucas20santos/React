'use strict';

const app = () => {
    // variável para controlar o estado do botão
    let clicked = false;

    // cria um elemento HTML do tipo botão
    let elem = document.createElement("BUTTON"); 

    // Adiciona um texto dentro do botão de acordo com o estado da variável 'clicked'
    elem.innerHTML = clicked ? "ESTÁ LIGADO" : "ESTÁ DESLIGADO";   

    // Adiciona evento de click ao botão
    elem.addEventListener("click", (e) => {
        clicked = !clicked
        console.log("clicked", clicked)
        e.target.innerHTML = clicked ? "ESTÁ LIGADO": "ESTÁ DESLIGADO"
    })

    // Retornando elemento do botão
    return elem;
}

// Função que será executada quando o navegador
// carregar todo o conteúdo
window.onload = () => {

    // Recuperando nossa div pelo seu id
    const domContainer = document.querySelector('#app-root');

    // Adicionando conteúdo na div e renderizando;
    domContainer.appendChild(app())
};

