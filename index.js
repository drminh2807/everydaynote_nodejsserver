// var express = require("express");
// var mysql = require('mysql');
// var app = express();

// var pool = mysql.createPool({
//     connectionLimit: 100, //important
//     host: 'sql12.freemysqlhosting.net',
//     user: 'sql12172476',
//     password: 'r7N39vKaSU',
//     database: 'sql12172476',
//     debug: false
// });

// function handle_database(req, res) {

//     pool.getConnection(function (err, connection) {
//         if (err) {
//             res.json({ "code": 100, "status": "Error in connection database" });
//             return;
//         }

//         console.log('connected as id ' + connection.threadId);

//         connection.query("select * from user", function (err, rows) {
//             connection.release();
//             if (!err) {
//                 res.json(rows);
//             }
//         });

//         connection.on('error', function (err) {
//             res.json({ "code": 100, "status": "Error in connection database" });
//             return;
//         });
//     });
// }

// app.get("/", function (req, res) {
//     handle_database(req, res);
// });

// app.listen(3000);

var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});