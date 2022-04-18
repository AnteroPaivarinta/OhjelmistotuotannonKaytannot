let attendance=class Attendance {

    constructor(id, key) {
      this.id = id;
      this.key=key;
      this.date= Date().toLocaleString();
    }


   
  
    getID(){
        return this.id;
    }

    setID(value){
        this.id=value;
    }
    getKey(){
        return this.key;
    }

    setKey(value){
        this.key=value;
    }


    getDate(){
  
        return this.date;
    }

    setDate(value){
        this.date=value;
    }
  
 
  
  }
  module.exports = attendance;