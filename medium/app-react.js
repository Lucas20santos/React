'use strict';

// Criando function component 
const App = () => {

    // Criando variáveis de estado
    let [clicked, setClicked] = React.useState(false);

    // Criando elemento 
    let elem = React.createElement(  
        'button',
        { onClick: () => setClicked(!clicked)}, // Atributos
        clicked ? "ESTÁ LIGADO" : "ESTÁ DESLIGADO" // Conteúdo
    )

    // Retornando elemento do botão
    return elem

};

// Recuperando nossa div pelo seu id
const domContainer = document.querySelector('#app-root');

// Renderizando component
ReactDOM.render(React.createElement(App), domContainer);