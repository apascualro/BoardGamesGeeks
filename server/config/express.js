const path = require('path');
const express = require('express');
const httpError = require('http-errors');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');

const app = express();

if (config.env === 'development') {
  app.use(logger('dev'));
}

// // simple route
// app.use(express.static('./dist/board-games-app'));

// app.get('/*', (req, res) =>
//     res.sendFile('index.html', {root: 'dist/board-games-app/'}),
// );

console.log('html');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new httpError(404)
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {

  // customize Joi validation errors
  if (err.isJoi) {
    err.message = err.details.map(e => e.message).join("; ");
    err.status = 400;
  }

  res.status(err.status || 500).json({
    message: err.message
  });
  next(err);
});

module.exports = app;