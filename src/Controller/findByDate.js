const array=[];
const findWithDate=( value2)=>{
  var mysql = require('mysql');
  let date=value2
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
  await   con2.query(sql, async(err, result, fields)=> {
    if (err) throw err;
    array.push(result);
    con2.end();
   

    
   
    
  });
  
  });
  }
  
  catch (err) {
      // Manage Errors
      console.log(err);
    }    
  }
export default findWithDate;