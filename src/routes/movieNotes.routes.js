
const { Router } = require("express");


const MovieNotesController = require("../controllers/MovieNotesController");

const movieNotesRoutes = Router();


const movienotesController = new MovieNotesController();


movieNotesRoutes.post("/:user_id", movienotesController.create);



module.exports = movieNotesRoutes;
