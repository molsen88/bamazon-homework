var mysql = require( 'mysql' );
var inquirer = require( 'inquirer' );

var connection = mysql.createConnection( {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon_db'
} );

connection.connect( function ( err ) {
    if ( err ) throw err;
    console.log( 'Connected to DB' );
    start();
} );

function start() {
    var query = "SELECT*FROM products";
    connection.query( query, function ( err, data ) {
        if ( err ) throw err;
        console.log( data );
    } )
}