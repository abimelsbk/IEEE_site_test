var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASSWORD,
  database : process.env.DB_DATABASE
});
 
connection.connect();

let createOrReplaceTable = `create table if not exists form(
                            id int primary key auto_increment,
                            name varchar(30),
                            email varchar(30),
                            subject varchar(30),
                            msg varchar(100)
                            );`;
 
connection.query(createOrReplaceTable, function (error, results, fields) {
  if (error) throw error;
});
 
module.exports = {
    insertIntoForm: function (record){
        let insertIntoForm = `insert into form(name, email, subject, msg) values('`+[record.name, record.email, record.subject, record.msg].join("', '") +"');";
        connection.query(insertIntoForm, (err, results, fields)=>{
            if(err) throw err;
            console.log("INSERTED IN DB")
        })
    }
}