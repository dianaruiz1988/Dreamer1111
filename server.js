
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const app = express();


//MIDDLEWARE====================================================================================
app.use(logger('dev'));
app.use(express.json());

//*CONFIGURE both serve-favicon & static middleware to serve from the production 'build' folder*
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


//CHECK if TOKEN and CREATE req.user============================================================
app.use(require('./config/checkToken'));


//BASE ROUTES=====================================================================================

/* Put API ROUTES here, before the "catch all" route
THESE ARE NOT THE BROWSER ROUTES??? THIS IS ALL BACKEND
link routes and controllers to servers
*/

app.use('/api/users', require('./routes/api/users'));  

//*PROTECT the API ROUTES below from Annonymous users*
const ensureLoggedIn = require('./config/ensureLoggin');
app.use('/api/goal', ensureLoggedIn, require('./routes/api/goal'));
// app.use('/api/diary', ensureLoggedIn, require('./routes/api/diary'));

//"CATCH ALL" ROUTE,(note the *), : necessary to return the index.html on all non-AJAX requests

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//CONFIGURE T0 USE PORT 3001 instead of 3000 during DEVELOPMENT to avoid collision with React's dev server

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
