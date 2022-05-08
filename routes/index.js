const express = require('express');
const router = express.Router();
const MovieModel = require("../models/Movie.model.js")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get("/movies", (req, res, next) => {
    MovieModel.find().select()
    .then((response) => {
        console.log(response)
        res.render("movies.hbs", {
            moviesList: response
        })
    })
    .catch((err) => {
        console.log(err)
    })
})

/* GET movies details */
router.get("/movies/:movieId", (req, res, next) => {
    // 1. obtener el id de la pelicula que el usuario quiere visualizar
    const {movieId} = req.params
    //2 . buscar la pelicula en la DB
    MovieModel.findById(movieId)
    .then((response) => {
        console.log(response)
        res.render("movie-details.hbs", {
            movieDetails: response
        })
    })
    .catch((err) => {
        console.log(err)
    })
})

module.exports = router;
