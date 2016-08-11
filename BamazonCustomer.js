var mysql = require('mysql');
var input = process.argv[2];

var connection = mysql.createConnection({
	user: 'root',
	password: '',
	port: 3333,
	database: 'bamazon_db'
});

connection.connect(function(err) {
	if (err) {
		throw err;
	}
	console.log('welcome to bamazon');
});



