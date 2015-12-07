var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* GET map form */
router.get('/', function( req, res ) {
	var connection = mysql.createConnection({ 
		host: 'localhost',
		user: 'blitzuser',
		password: 'foresterbob',
		port: '/var/run/mysqld/mysqld.sock'
	});
	connection.connect();
	connection.query( 'use blitzserver' );
	connection.query( 'SELECT * from maps', function( err, rows, fields ) {
		if( err ) throw err;
	res.render( 'maps/index', { rows: rows });
	});
});
router.get('/add', function( req, res ) {
	res.render( 'maps/add' );
});

module.exports = router;
