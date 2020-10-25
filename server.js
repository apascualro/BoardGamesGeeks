const express = require('express');
const path = require('path');

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('./dist/<board-games-app.json>'));

// simple route
app.get('/*', function(req, res) {
  res.sendFile(’index.html’, {root: 'dist/<board-games-app.json>/'}
);
});

//Include routes
require("./app/routes/juego.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

