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
        .prompt( {
            name: "purchase",
            message: "What item(#) would you like to buy?",
            type: "list",
            choices: ['W10', 'W11', 'W12', 'W13', 'W14', 'W15', 'W16', 'W17', 'W18', 'W19']
        } ).then( function ( res ) {
            var item = res.purchase;
            console.log( item )


            switch ( res.purchase ) {
                case "W10":
                    checkInventory();
                    break;

                case "W11":
                    checkInventory();
                    break;

                case "W12":
                    checkInventory();
                    break;

                case "W13":
                    checkInventory();
                    break;

                case "W14":
                    checkInventory();
                    break;

                case "W15":
                    checkInventory();
                    break;

                case "W16":
                    checkInventory();
                    break;

                case "W17":
                    checkInventory();
                    break;

                case "W18":
                    checkInventory();
                    break;

                case "W19":
                    checkInventory();
                    break;
            }
        } )
}


function checkInventory() {
    inquirer
        .prompt( {
            name: "amount",
            message: "How many would you like to purchase?",
            type: "input"
        } ).then( function ( answer ) {
            connection.query( "SELECT*FROM products WHERE ?", { amount: answer.amount }, function ( err, res ) {
                // console.log( answer.amount )
                var quantity = answer.amount;

                console.log( quantity );
            } )


            availableProduct();
        } )
}

//     var query = 'select * from products where item_id = "" ';
//     connection.query( query, function ( err, data ) {
//         if ( err ) throw err;
//         for ( var x = 0; x < data.length; x++ ) {
//             console.log( data[x].item_id );
//         }
//     } )
// }

function availableProduct() {
    var query = "SELECT*FROM products WHERE stock_quantity  ";
    connection.query( query, { purchase: res.purchase }, function ( err, data ) {
        if ( err ) throw err;
        for ( var i = 0; i < data.length; i++ ) {
            if ( item === data[i].item_id ) {
                console.log( "works" )
            }
            console.log( data[i].item_id, data[i].stock_quantity );
        }


    } )
}


// console.log( item );
// console.log( quantity )






    // Respond to the input by user and check for avaliable product

    // function availableProduct() {
    //     query = "SELECT item_id FROM products WHERE stock_quantity ";
    //     connection.query( query, function ( err, data ) {
    //         var numberPurchase = 'amount';
    //         if ( err ) throw err;
    //         for ( var i = 0; i < data.length; i++ ) {
    //             if ( numberPurchase > data.stock_quantity ) {
    //                 console.log( "Product is available" )
    //             }
    //             else {
    //                 console.log( "insufficient quantity" )
    //             }
    //         }
    //     } )
    // }
