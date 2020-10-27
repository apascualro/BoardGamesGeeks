const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Sequelize } = require('sequelize');
const path = require('path');

const app = express();

// //puerto donde se ejecuta angular
// var corsOptions = {
//   origin: "https://git.heroku.com/andrea--herokuprova22.git"
// };

// app.use(cors(corsOptions));
app.use(cors());
// Configurar cabeceras y cors
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

//sync database
const db = require("./models");
// db.sequelize.sync();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route HEROKU
 app.use(express.static('./dist/board-games-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/board-games-app/'}),
);

//Include routes
require("./routes/juego.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});