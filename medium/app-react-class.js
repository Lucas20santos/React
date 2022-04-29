
'use strict';

// Criando function component 
class App extends React.Component{
    
    // Criando construtor
    constructor(props){
        
        // Executando o construtor da Super Class
        super(props)

        // Definindo o estado inicial
        this.state = {
            clicked : false
        }

    }

    // Função para alterar o estado
    changeClicked(){
        this.setState({clicked : !this.state.clicked})
    }

    // Função para recurepar valor dependendo do estado
    getLabel(){
        if(this.state.clicked){
            return "ESTÁ LIGADO"
        }else{
            return "ESTÁ DESLIGADO"
        }
    }

    // Função que renderiza o componente
    render(){

        // Criando elemento 
        let elem = React.createElement(  
            'button', // Tipo
            { onClick: () => this.changeClicked()}, // Atributos
            this.getLabel() // Conteúdo
        )
        
        // Retornando elemento
        return elem
    }

}

// Recuperando nossa div pelo seu id
const domContainer = document.querySelector('#app-root');

// Renderizando component
ReactDOM.render(React.createElement(App), domContainer);