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
        for ( var i = 0; i < data.length; i++ )
            console.log( data[i].item_id, data[i].product_name, data[i].price );

        choice();

    } )
}
function choice( choice ) {
    inquirer.prompt( [{
        name: "purchase",
        message: "What item(item#) would you like to buy?",
        type: "list",
        choices: ["spatula", "cleats", "bottle", "mac", "rod", "waffle", "tv", "lights", "fryer", "ball"]
    }] ).then( function ( amount ) {
        inquirer.prompt( [{
            name: "amount",
            message: "How many would you like to purchase?",
            type: "input"
        }] ).then( availableProduct() );
    } )
}

// Respond to the input by user and check for avaliable product

function availableProduct( item_id ) {
    query = "SELECT*FROM products WHERE item_id = ?";
    connection.query( query, [item_id], function ( err, data ) {
        if ( err ) throw err;
        for ( var i = 0; i < data.length; i++ ) {
            if ( "amount" > data[i].stock_quantity ) {
                console.log( "Product is available" )
            }
            else {
                console.log( "insufficient quantity" )
            }
        }
    } )
}