# API REST Simples com Node.js, TypeScript e MongoDB

API para testes desenvolvida com arquitetura MVC (Model-View-Controller) utilizando TypeScript e MongoDB como banco de dados.

## 📋 Funcionalidades

- POST/USER
- GET/USER
- DELETE/USER

## 🚀 Tecnologias

- **Node.js** - Ambiente de execução JavaScript
- **TypeScript** - Superset JavaScript com tipagem estática
- **Express** - Framework web para Node.js
- **Mongoose** - ODM para MongoDB
- **Dotenv** - Gerenciamento de variáveis de ambiente

## ⚙️ Configuração do Ambiente

### Pré-requisitos

- Node.js (v18 ou superior)
- MongoDB (local ou Atlas)
- Yarn ou npm

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/AAndersonSantos/API-Rest-MongoDB.git
```
<br>

2. Instale as dependências:

```bash
npm install
# ou
yarn install
```
<br>

3. Configure o ambiente:

* Crie um arquivo .env na raiz do projeto baseado no .env.example:
```bash
MONGO_URI=mongodb://localhost:27017/nome-do-banco
PORT=3000
```

<br>

4. Inicie o servidor:

```bash
npm run dev
# ou
yarn dev
```

<br>

## 📡 Endpoints
Usuários
* POST /users - Cria um novo usuário

* GET /users - Lista todos os usuários

* GET /users/:id - Obtém um usuário específico

* DELETE /users/:id - Remove um usuário