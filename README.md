# Gerenciamento de Inventário - AgilStore

Este é um projeto de gerenciamento de inventário desenvolvido com Node.js e React.js para a loja fictícia AgilStore. Ele permite adicionar, listar, buscar, atualizar e excluir produtos, com persistência de dados em um banco de dados SQLite.

## Tecnologias Utilizadas

### Back-End
- **Node.js**: Plataforma para execução do JavaScript no servidor
- **Express**: Framework para criar a API.
- **SQLite3**: Banco de dados leve para persistência local.
- **CORS**: Para permitir solicitações entre diferentes origens.

### Front-End
- **React.js**: Biblioteca para construção da interface do usuário.
- **Vite**: Ferramenta para criação rápida de aplicações React.
- **Axios**: Para realizar requisições HTTP à API.
- **React Router**: Para navegação entre as páginas da aplicação.

## Requisitos

Certifique-se de ter instalado:
- **Node.js** (LTS recomendado) e **npm**
- **Git** (para clonar o repositório)

## Instalação e Configuração

### 1. Clone o Repositório
```bash
git clone https://github.com/MarcelaMartinsRap/AgilStore.git
cd agilstore-inventory
```

### 2. Configuração do Back-End

1. Acesse o diretório do back-end:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   node api.js
   ```
   O servidor estará disponível em `http://localhost:3001`.

### 3. Configuração do Front-End

1. Acesse o diretório do front-end:
   ```bash
   cd ../frontend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   O front-end estará disponível em `http://localhost:5173`.

## Funcionalidades

- **Adicionar Produto**: Formulário para cadastrar novos produtos no inventário.
- **Listar Produtos**: Exibe uma tabela com todos os produtos cadastrados.
- **Buscar Produto**: Permite buscar produtos por nome.
- **Atualizar Produto**: Formulário para editar os dados de um produto.
- **Excluir Produto**: Remove produtos do inventário após confirmação.

## Estrutura do Projeto

```plaintext
agilstore-inventory/
├── api/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── models/
│   │   ├── routes/
│   │   └── services/
│   │   └── api.js/
│   |
│   └── package.json
├── frontend/
|   ├──agilstore-frontend
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   
│   ├── main.jsx
│   ├── App.jsx
│   └── package.json
└── README.md
```

## Testando a Aplicação

1. Certifique-se de que o back-end e o front-end estão em execução.
2. Acesse o front-end pelo navegador em `http://localhost:5173`.
3. Utilize as funcionalidades da interface para testar as operações CRUD (Create, Read, Update, Delete).

## Possíveis Melhorias Futuras

- Implementar autenticação de usuários.
- Adicionar paginação na listagem de produtos.
- Criar testes automatizados para o back-end e front-end.

## Contribuições

Sinta-se à vontade para abrir issues ou pull requests no repositório para sugerir melhorias ou corrigir problemas.

---

**Desenvolvido com 💛 por Marcela Martins**
