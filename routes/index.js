var moviesJSON = require('../movies.json');

/* home page */
exports.home = function(req, res) {

	var movies = moviesJSON.movies;

	res.render('home', {
		title: "Star Wars Movies",
		movies: movies
	});
};

/* movie single */
exports.movieSingle = function(req, res) {

	var episodeNumber = req.params.episode_number;

	var movies = moviesJSON.movies;

	if (episodeNumber >= 1 && episodeNumber <= 6) {
		var movie = movies[episodeNumber - 1];

		var title = movie.title;

		var mainCharacters = movie.main_characters;

		res.render('movie_single', {
			movies: movies,
			title: title,
			movie: movie,
			mainCharacters: mainCharacters
		});
	} else {
		res.render('notFound', {
			movies: movies,
			title: "Page does not exist"
		});
	}

};

/* not found*/
exports.notFound = function(req, res) {

	var movies = moviesJSON.movies;
	res.render('notFound', {
		movies: movies,
		title: "Page does not exist"
	})
};