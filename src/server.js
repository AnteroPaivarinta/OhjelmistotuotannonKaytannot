//import Attendance from './components/Attendance';


let Employee = require('./components/Attendance');

// And in the file you want to use these functions,
let obj = new Employee("Isaac Tonyloi", "jea");
console.log("testi1",obj.getDate());

var mysql = require('mysql');
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors());
const findWithDate=(value)=>{
let date="Mon Apr 18 2022 03:13:43 GMT+0300 (Itä-Euroopan kesäaika)";
let con2;
try{
 con2= mysql.createConnection({
  host: "mariadb.vamk.fi",
user: "e1900499",
password: "bwpxWEKyRw6",
database: "e1900499_heroku2"
});

con2.connect(async function(err) {
if (err) throw err;

var sql = "SELECT * FROM lasnaolo WHERE date='"+date+"'";
await   con2.query(sql, function (err, result, fields) {
  if (err) throw err;
  con2.end();
  console.log(result);
  return result;
  
});

});
}

catch (err) {
    // Manage Errors
    console.log(err);
  }    
}




 obj=findWithDate("Mon Apr 18 2022 03:13:43 GMT+0300 (Itä-Euroopan kesäaika)");

console.log("jep", obj.getDate())




let arrayResult=[];
let arrayBodyComposition=[];
var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
    host: "mariadb.vamk.fi",
  user: "e1900499",
  password: "bwpxWEKyRw6",
  database: "e1900499_heroku2"
});



var con3 = mysql.createConnection({
    host: "mariadb.vamk.fi",
  user: "e1900499",
  password: "bwpxWEKyRw6",
  database: "e1900499_birdDB"
});


var con4 = mysql.createConnection({
    host: "mariadb.vamk.fi",
  user: "e1900499",
  password: "bwpxWEKyRw6",
  database: "e1900499_birdDB"
});
// make to connection to the database.



  app.get('/lasnaolot', (request, response) => {
    con.connect(function(err) {
        if (err) throw err;
        // if connection is successful
       con.query("SELECT * FROM lasnaolo", function (err, result, fields) {
          // if any error while executing above query, throw error
          if (err) throw err;
          console.log("Haloo");
          // if there is no error, you have the result
             arrayResult.push(result);
             console.log(result);
             response.send(arrayResult);
        });
      });
    
  })
  app.post('/lasnaolot', (request, response) => {
    let con2;
    try{
     con2= mysql.createConnection({
      host: "mariadb.vamk.fi",
    user: "e1900499",
    password: "bwpxWEKyRw6",
    database: "e1900499_heroku2"
  });

   con2.connect(async function(err) {
    if (err) throw err;

    var sql = "INSERT INTO `lasnaolo` (`key`, `date`) VALUES ('+"+request.body.key+"', '"+request.body.date+"')";
 await   con2.query(sql, async (err, result, fields)=> {
      if (err) throw err;
      console.log("1 record inserted");
      con2.end();
    });
    
  });
} 
   
   
      
      catch (err) {
        // Manage Errors
        console.log(err);
      }    

     
  })





app.get('/test', (request, response) => {
    response.send("Testi");
})


 

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`)
  })