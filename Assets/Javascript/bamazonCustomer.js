var mysql = require( 'mysql' );
var inquirer = require( 'inquirer' );

var connection = mysql.createConnection( {
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
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
            console.log( "\nItem Number: " + data[i].item_id + "\n", "Product name: " + data[i].product_name + "\n", "Price: " + data[i].price );

        choice();

    } )
}

function choice() {
    inquirer
        .prompt( [{
            name: "purchase",
            message: "What item(#) would you like to buy?",
            type: "input"
        },
        {
            name: "amount",
            message: "How many would you like to purchase?",
            type: "input"

        }] ).then( function ( res ) {
            var item = res.purchase;
            var quantity = res.amount;
            console.log( item )
            console.log( quantity )

            var query = 'SELECT*FROM products WHERE item_id '
            connection.query( query, { item_id: item }, function ( err, data ) {
                if ( err ) throw err;

                if ( data.length === 0 ) {
                    console.log( 'ERROR: Invalid Item ID. Please select a valid Item ID.' );
                    displayInventory();
                } else {
                    var productData = data[0];
                    // quantity is available
                    if ( quantity <= productData.stock_quantity ) {
                        console.log( 'Congratulations, the product you requested is in stock! Placing order!' );
                        // update the table
                        var updateQuery = 'UPDATE products SET stock_quantity = ' + ( productData.stock_quantity - quantity ) + ' WHERE item_id = ' + item;

                        connection.query( updateQuery, function ( err, data ) {
                            if ( err ) throw err;
                            console.log( 'Your oder has been placed! Your total is $' + productData.price * quantity + ". Thanks for your purchase!" );

                            console.log( "\n---------------------------------------------------------------------\n" );
                            // End the database connection
                            connection.end();
                        } )
                    } else {
                        console.log( 'Sorry, there is not enough product in stock, your order can not be placed as is. You will need to change your order' );
                        console.log( "\n---------------------------------------------------------------------\n" );
                        choice();
                    }
                }
            } )
        } )
}





