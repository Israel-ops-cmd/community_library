
# 📚 Biblioteca Comunitária

API desenvolvida para gerenciar uma biblioteca comunitária, permitindo o cadastro de usuários, livros e controle de empréstimos.

## 📝 Descrição

Este projeto tem como objetivo facilitar o gerenciamento de uma biblioteca, permitindo operações como:

* 📖 Cadastro de livros
* 👤 Cadastro de usuários
* 🔄 Controle de empréstimos e devoluções
* 📜 Listagem de livros, usuários e empréstimos
* ❌ Exclusão de registros

## 🚀 Tecnologias Utilizadas

* Node.js
* Express
* SQLite3
* Nodemon (para desenvolvimento)
* ESModules (import/export)

## 📂 Estrutura de Pastas

```
community_library/
├── src/
│   ├── config/          # Configuração do banco de dados
│   ├── controllers/     # Lógica dos controllers
│   ├── repositories/    # Acesso ao banco (repositories)
│   ├── routes/          # Rotas da aplicação
│   ├── app.js           # Arquivo principal da aplicação
├── package.json
├── README.md
```

## 💡 Funcionalidades

* ✅ **Usuários**

  * Criar usuários
  * Buscar todos os usuários
  * Buscar usuário por ID
  * Atualizar informações de usuário
  * Excluir usuário

* ✅ **Livros**

  * Cadastrar livros
  * Listar todos os livros
  * Buscar livro por ID
  * Atualizar informações do livro
  * Excluir livro

* ✅ **Empréstimos**

  * Criar um empréstimo (vincular livro a usuário com data de devolução)
  * Listar todos os empréstimos
  * Buscar empréstimo por ID
  * Deletar empréstimo

## 🔧 Instalação e Execução

### 1️⃣ Clone o repositório:

```bash
git clone https://github.com/seu-usuario/community_library.git
```

### 2️⃣ Acesse a pasta do projeto:

```bash
cd community_library
```

### 3️⃣ Instale as dependências:

```bash
npm install
```

### 4️⃣ Execute o projeto:

```bash
npm run dev
```

O servidor estará rodando em:

```
http://localhost:3000
```

## 📑 Documentação de Rotas

### 🔹 Usuários

| Método | Rota        | Descrição             |
| ------ | ----------- | --------------------- |
| POST   | /users      | Cadastrar usuário     |
| GET    | /users      | Listar usuários       |
| GET    | /users/\:id | Buscar usuário por ID |
| PUT    | /users/\:id | Atualizar usuário     |
| DELETE | /users/\:id | Deletar usuário       |

### 🔹 Livros

| Método | Rota        | Descrição           |
| ------ | ----------- | ------------------- |
| POST   | /books      | Cadastrar livro     |
| GET    | /books      | Listar livros       |
| GET    | /books/\:id | Buscar livro por ID |
| PUT    | /books/\:id | Atualizar livro     |
| DELETE | /books/\:id | Deletar livro       |

### 🔹 Empréstimos

| Método | Rota        | Descrição                |
| ------ | ----------- | ------------------------ |
| POST   | /loans      | Criar empréstimo         |
| GET    | /loans      | Listar empréstimos       |
| GET    | /loans/\:id | Buscar empréstimo por ID |
| DELETE | /loans/\:id | Deletar empréstimo       |

## 🤝 Contribuição

Sinta-se à vontade para contribuir! Faça um fork, crie uma branch com sua feature ou melhoria, e envie um pull request.

