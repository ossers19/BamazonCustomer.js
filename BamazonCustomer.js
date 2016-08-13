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

connection.connect(function(err){

	if (err){
		console.log("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id" + connection.threadID);
});

connection.query("SELECT * FROM Products, ItemID, ProductNames, Price ", function(err, stock) {
    if (err) {
        throw (err);
    }
    var available = stock;
    for (i = 0; i < available.length; i++) {
        console.log("Currently in stock " + available[i].ProductName + " ItemId # " + available[i].ItemId + " $ " + available[i].Price);
     
	}
});

// Ask customer what they would like to buy and quantity
var askCustomer = function() {
  	console.log("What would you like to buy?")
  	console.log("How much would you like to buy?")
    prompt.start();
    prompt.get(["ProductName", "StockQuantity"], function(err, result) {
        if (err) {
            throw (err);
        } else {
            connection.query("SELECT * From products", function(err, order) {
                if (err) {
                    throw (err);
                }

                for (i = 0; i < order.length; i++) {

                    if (order[i].ProductName === result.ProductName && result.StockQuantity <= order[i].StockQuantity) {

                        console.log("Your Purchase: " + order[i].ProductName);
                        console.log("Quantity: " + result.Quantity);
                        console.log("Your Total is: " + " $ " + (result.Quantity * order[i].Price));
                        

                 

                 // Update Stock    
                        var update = function() {
                            connection.query("UPDATE products SET StockQuantity = StockQuantity - " + result.Quantity + " WHERE ProductName ='" + result.ProductName + "'", function(err, newStock) {
                                if (err) {
                                    throw (err);
                                }
                                connection.query("SELECT * FROM products", function(err, update) {
                                    var newAvailability = update;
                                    for (i = 0; i < newAvailability.length; i++) {
                                        console.log("Our Current Stock" + newAvailability[i].ProductName + " " + " Quantity " + newAvailability[i].StockQuantity);
                                       
                                    }

                                })

                            })
                        }
                        update();

                    } 
                    
                }
            })
        }
    })
}

askCustomer();