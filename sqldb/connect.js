/**
 * Created by redsign77 on 2017. 07. 18.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '',     /* Your database host */
    user: '',     /* Your database user */
    password: '', /* Your database user password insert here */
    database: ''  /* Your database name */
});

connection.connect(function (error) {
    if (error) throw error;
    console.log('Connected to host');
    var sql = 'SELECT * FROM table';
    /* Your SQL query */
    connection.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
