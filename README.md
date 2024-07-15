# Salvus API

Este projeto é uma API para gerenciar produtos utilizando Node.js, Express e Sequelize com um banco de dados MySQL. O projeto está configurado para rodar em um contêiner Docker e pode ser facilmente configurado e executado localmente.

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Configuração e Execução do Projeto](#configuração-e-execução-do-projeto)
- [Deploy da Aplicação](#deploy-da-aplicação)
- [Acessando a Aplicação Deployada](#acessando-a-aplicação-deployada)

## Tecnologias Utilizadas

- Node.js
- Express
- Sequelize
- MySQL
- Docker
- Docker Compose
- Heroku (para deploy)

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)


## Configuração e Execução

### Passos para Configurar e Rodar a Aplicação

1. **Clone o Repositório**:
    ```bash
    git clone <URL-do-repositorio>
    cd salvus-api
    ```

2. **Instale as Dependências**:
    ```bash
    npm install
    ```

3. **Crie e Configure o Arquivo `.env`**:
    - Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente:
    ```plaintext
    DB_HOST=mysql
    DB_USER=root
    DB_PASSWORD=senha
    DB_NAME=mtyq406fdbcijlrd
    DB_DIALECT=mysql
    DB_PORT=3306
    ```

4. **Suba os Contêineres Docker**:
    - Certifique-se de que o Docker e o Docker Compose estão instalados e suba os contêineres:
    ```bash
    docker-compose up --build
    ```

5. **Acesse a Aplicação**:
    - A aplicação deve estar rodando na porta 3000. Acesse em `http://localhost:3000`.

## Acessando a Aplicação Deployada

A aplicação também está deployada e pode ser acessada em:

- [Link para a aplicação](https://salvus-frontend-umber.vercel.app/)

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nodejs,docker,express,mysql,git" />
  </a>
</p>
<p align="center">Made with ❤️ by Guilherme Vaz 👋🏽 Get in touch!</p>
<div align="center">

  [![Linkedin Badge](https://img.shields.io/badge/-Guilherme-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/guiilherme-vaz/)](https://www.linkedin.com/in/guiilherme-vaz/) 
  [![Gmail Badge](https://img.shields.io/badge/-guilhermeolivaaz@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:guilhermeolivaaz@gmail.com)](mailto:guilhermeolivaaz@gmail.com)

</div>


