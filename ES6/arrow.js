let format = require('date-format');
let year =format("yyyy",new Date()) ;

//ARROW FUNCTION: 

let something = (name,bday) => {
    console.log("this is an arrow function");
    console.log("My Name is: "+name);
    console.log("My age is: "+(year-bday));
} 
something("Habib",1995);