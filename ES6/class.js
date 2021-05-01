class Vehicle{
    constructor(color,passanger){
        this.color=color;
        this.passanger=passanger;
    }
    saySomething(){
        console.log("THis is a class demo in js");
    }
}

let obj1 = new Vehicle("Red",5);
let obj2 = new Vehicle("Green",8);

obj1.saySomething();
console.log(obj1);
console.log(obj2);

//INHERITANCE:

class Car extends Vehicle{
    
    constructor(numWheel,color,pass){
        super(color,pass);
        this.wheel = numWheel;
      
    }
}

let obj3 = new Car(4,6,"Yellow");
console.log(obj3);