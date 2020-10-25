const express = require('express');
const path = require('path');


// // Serve only the static files form the dist directory
// app.use(express.static(__dirname,  '/dist/hockey-app'));

// app.get('*', function(req,res) { 
//     res.sendFile(path.join(__dirname, '/dist/hockey-app/index.html'));
// });

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const app = express();

app.use(express.static(__dirname+'/dist/ng-blog'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/ng-blog/index.html'));
});

app.listen(process.env.PORT || 8080);