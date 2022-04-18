export const postData=(key, date)=>{

var mysql = require('mysql');
const array=[];
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

var sql = "INSERT INTO `lasnaolo` (`key`, `date`) VALUES ('"+key+"', '"+date+"')";
await   con2.query(sql, function (err, result, fields) {
  if (err) throw err;
 
  con2.end();
});

});
} 


  
  catch (err) {
    // Manage Errors
    console.log(err);
  }  
}


export default postData;