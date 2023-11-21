const knex = require("../database/knex");

class MovieNotesController{
    async create(request, response){
        const { title, description, movie_tags } = request.body;
        const { user_id } = request.params;

        const [ movie_notes_id ] = await knex("movie_notes").insert({
            title, 
            description,
            user_id
        });

        const MovieTagsInsert = movie_tags.map( name => {
            return{
                movie_notes_id,
                name,
                user_id
            }
        });

        await knex("movie_tags").insert(MovieTagsInsert)

        response.json();
    }
}


module.exports = MovieNotesController;