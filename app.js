var express = require('express');

// app is a new express application
// app has all methods, it represents the app
var app = express();

// specifying a templating engine
app.set('view engine', 'ejs');

var routes = require('./routes/index');

/* specify directory for static files*/
var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

/* Routes */

/* home page */
app.get('/', routes.home);

/* movie single */
app.get('/star_wars_episode/:episode_number?', routes.movieSingle);

/* not found*/
app.get('*', routes.notFound);


app.listen(process.env.PORT || 3000);

/** This is for dev server, wont work for production
app.listen(3000, function() {
	console.log("The app is now running at http://localhost:3000/");
})
*/