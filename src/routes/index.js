// Importando o objeto 'Router' do módulo 'express'.
const { Router } = require("express");

// Importando as rotas relacionadas aos usuários do arquivo 'user.routes'.
const usersRouter = require("./user.routes");

const movieNotesRouter = require("./movieNotes.routes");

// Criando uma instância do objeto 'Router'.
const routes = Router();

// Definindo uma rota principal para as rotas relacionadas aos usuários.
// Todas as rotas definidas no 'usersRouter' serão prefixadas com "/users".
routes.use("/users", usersRouter);
routes.use("/movieNotes", movieNotesRouter);

// Exportando o objeto 'routes' para ser utilizado na configuração do servidor.
module.exports = routes;
