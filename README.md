
## Agents Backend
App Backend da Aplicação de Perguntas e Respostas com I.A desenvolvido durante a NLW Agents da Rocketseat

<h1 align="center">
  <img alt="Dom Casmurro" title="Dom Casmurro" width="700" src=".github/image.png" />
</h1>

<br /><br />

## 🚀 Tecnologias
- [TypeScript](https://www.typescriptlang.org/) > Linguagem Principal da Aplicação
- [Fastify](https://fastify.dev/) > Framework para aplicação Backend
- [DrizzleORM](https://orm.drizzle.team/) > ORM para Gerenciamento de Banco de Dados
- [PostgreSQL](https://www.postgresql.org/) > Servidor de Banco de Dados
- [Neon](https://neon.com/) > Ferramenta de Administração do Banco de Dados

<br /><br />

## 💻 Executando o Projeto

#### 1º Passo - Configure as Ferramentas necessárias para rodar o projeto:

- [Node.js](https://nodejs.org/en/) (Versão 22)


#### 2º Passo - Instale as Dependências:

```bash
$ npm install
```

#### 3º Passo - Configure o arquivo .env:

```bash
# http
PORT=3333

# Database
DATABASE_URL="postgresql://neondb_owner:npg_plaBgxu7r6Yh@ep-broad-hall-aepwhl4x-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require"
```

#### 4º Passo - Rode o projeto:

```bash
# development
$ npm run dev
```