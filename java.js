var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "toor",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("connected as id " + connection.threadId);
    // console.log(connection);
    
    productdisplay(5000);

});

function productdisplay(price) {
    var sql = "SELECT * FROM products WHERE price > ?";
    var values = [price];
    connection.query(sql, values, function(err, res){
        if(err){
            console.log(err);
            connection.end();
        }

        console.log("flavor\t\tprice");
        console.log('------\t\t-----');
        for (var index = 0; index < res.length; index++) {
            var row = res[index];
            console.log(row.flavor + "\t" + row.price);
            
        }

    })
}