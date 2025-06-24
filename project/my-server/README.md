# 🔒 Sistema de Login Moderno com Glassmorphism (Node.js, Express, HTML, CSS, JS)

![Tela de Login](image.png)

---

## 🚀 Visão Geral do Projeto

Este projeto é uma demonstração de um sistema de login web completo, desenvolvido com tecnologias front-end (HTML, CSS, JavaScript) para a interface do usuário e back-end (Node.js com Express.js) para a lógica de servidor. O destaque visual é o moderno efeito **Glassmorphism (vidro fosco)** na interface de login.

A aplicação simula um fluxo de login básico onde o usuário insere credenciais, que são validadas tanto no cliente quanto no servidor, e é redirecionado para uma página de boas-vindas em caso de sucesso.

## ✨ Funcionalidades

* **Interface de Usuário Moderna:** Design elegante com o popular efeito Glassmorphism.
* **Validação de Formulário no Cliente:** Garante que os campos de Email e Senha não estejam vazios antes de enviar os dados ao servidor, proporcionando feedback imediato ao usuário.
* **Envio de Dados POST:** Credenciais de login são enviadas de forma segura ao servidor usando o método HTTP POST.
* **Validação de Credenciais no Servidor:** O servidor Node.js recebe e valida as credenciais enviadas.
* **Redirecionamento Condicional:**
    * Em caso de login bem-sucedido (credenciais corretas), o usuário é redirecionado para uma página de sucesso (`home.html`).
    * Em caso de falha no login (credenciais incorretas), o servidor retorna uma mensagem de erro.
* **Servidor Node.js com Express:** Um servidor robusto e simples para servir os arquivos estáticos e lidar com as requisições de login.
* **Nodemon para Desenvolvimento:** Ferramenta configurada para auto-reiniciar o servidor a cada alteração no código, otimizando o fluxo de trabalho de desenvolvimento.

## 🛠️ Tecnologias Utilizadas

**Frontend:**
* **HTML5:** Estrutura semântica da página.
* **CSS3:** Estilização, incluindo gradientes e o efeito `backdrop-filter` (Glassmorphism).
* **JavaScript:** Lógica de validação no cliente e interação do formulário.

**Backend:**
* **Node.js:** Ambiente de execução JavaScript no lado do servidor.
* **Express.js:** Framework web para Node.js, utilizado para criar o servidor e lidar com rotas.

**Ferramentas de Desenvolvimento:**
* **npm:** Gerenciador de pacotes do Node.js.
* **Nodemon:** Monitora alterações de arquivos e reinicia o servidor automaticamente em desenvolvimento.

## 🚀 Como Rodar o Projeto Localmente

Siga estes passos simples para configurar e executar o projeto em sua máquina:

### **Pré-requisitos**

Certifique-se de ter o Node.js e o npm instalados em seu sistema. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

### **Configuração**

1.  **Clone o repositório** (ou baixe os arquivos zipados) para sua máquina local.
    ```bash
    git clone https://github.com/Lucas20santos/React.git
    ```

    OBS: Neste repositórios exite outros arquivos.

2.  **Organize os arquivos:**
    * Crie uma pasta chamada `public` na raiz do seu projeto.
    * Mova `index.html`, `style.css`, `script.js` e `home.html` para dentro da pasta `public`.
    * O arquivo `server.js` e `package.json` devem ficar na raiz do projeto.

    Sua estrutura de pastas final deve ser assim:
    ```
    .
    ├── public/
    │   ├── index.html
    │   ├── style.css
    │   ├── script.js
    │   └── home.html
    ├── server.js
    ├── package.json
    └── package-lock.json (gerado automaticamente)
    └── node_modules/ (gerado automaticamente)
    ```

    OBS: No projeto baixado será visto outras pasta dentro da pasta 'public', como style, pages, mas se você segui o fluxo acima tbm dará certo. A diferença se deu por causa da minha preguiça de reorganizar.

3.  **Instale as dependências:**
    No terminal, na pasta raiz do projeto (`NomeDoSeuRepositorio`), execute:
    ```bash
    npm install
    ```
    Este comando instalará o Express.js e o Nodemon, conforme configurado no `package.json`.

### **Executando o Servidor**

1.  **Inicie o servidor** usando o Nodemon (para auto-reinicialização):
    ```bash
    npm run dev
    ```
    Você verá uma mensagem no terminal indicando que o servidor está rodando, geralmente em `http://localhost:3000`.

2.  **Acesse a aplicação:**
    Abra seu navegador e digite o seguinte endereço:
    ```
    http://localhost:3000
    ```

### **Credenciais de Teste**

Para testar o login bem-sucedido, use as seguintes credenciais (definidas no `server.js`):

* **Email:** `usuario@exemplo.com`
* **Senha:** `senha123`

Qualquer outra credencial resultará em uma mensagem de erro do servidor.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 💡 Possíveis Melhorias Futuras

Este projeto é um ponto de partida sólido para um sistema de login, mas há sempre espaço para expansão e aprimoramento. Aqui estão algumas ideias para futuras melhorias:

* **Melhoras no Style do projeto**
    * Organizar melhor o layout

* **Autenticação Real com Banco de Dados:**
    * Integrar um banco de dados (ex: MongoDB com Mongoose, PostgreSQL com Sequelize) para armazenar usuários e senhas de forma persistente.
    * Implementar um sistema de **hash de senhas** (ex: usando `bcrypt.js`) antes de armazená-las no banco de dados, garantindo maior segurança.

* **Gerenciamento de Sessão/Token:**
    * Após o login bem-sucedido, criar e gerenciar sessões do usuário no servidor ou gerar JSON Web Tokens (JWTs) para manter o usuário autenticado entre as requisições.

* **Mensagens de Erro Mais Amigáveis:**
    * Substituir os `alert()` genéricos por mensagens de erro mais integradas à interface do usuário (ex: exibir um texto vermelho abaixo do campo de input ou uma notificação Toast).

* **Registro de Novos Usuários:**
    * Adicionar uma página de registro para que novos usuários possam criar suas contas, armazenando-as no banco de dados.

* **Reset de Senha:**
    * Implementar um fluxo para "Esqueci minha senha", incluindo envio de e-mails de recuperação.

* **Validação de Formulário Mais Robusta:**
    * Adicionar validações mais complexas no cliente (ex: formato de email, complexidade de senha) e no servidor (ex: verificação de email já existente).

* **Feedback Visual de Carregamento:**
    * Mostrar um spinner ou mensagem de "carregando" enquanto a requisição de login está sendo processada pelo servidor.

* **Variáveis de Ambiente:**
    * Utilizar variáveis de ambiente (`.env` com pacote `dotenv`) para armazenar credenciais sensíveis (ex: chaves de banco de dados, secrets de JWT), em vez de codificá-las diretamente no `server.js`.

* **Testes Automatizados:**
    * Escrever testes unitários e de integração para o backend (ex: com Mocha/Chai ou Jest) e para o frontend.

* **Implementação de HTTPS:**
    * Configurar o servidor para usar HTTPS em produção para garantir a comunicação criptografada.

Estas são apenas algumas sugestões! Sinta-se à vontade para escolher as que mais lhe interessam e expandir o projeto. Contribuições são sempre bem-vindas!
