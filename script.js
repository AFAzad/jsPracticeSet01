//Chapter 1, Q1.
//Create a variable type String and try to add a number to it.
let a = "Raaz";
let b = 6;
console.log(a + b);

//Chapter 1, Q2.
//type of operator , find data type
console.log(typeof (a + b));


//Chapter 1 Q.3 .
// Craete a const object in JavaScript , can u change it to hold a later number
const a1 = {
    name: " Raaz",
    section: 1,
    isPrincipal: false
}
a1 = "54"

// Chapter 1 Q. 4 . Try to add a new key to the const object Q.3
a1['friend'] =  "Shiva"
a1['name']= "Harry"
console.log(a1);

//Q no. 5
const dict = {
    appereciate: " Recognize the full  worth of",
    ataraxia :  "a  sate of freedom from emotional disturbance and anxiety",
    Yakka : "Specialy hardwork "
}
console.log(dict .Yakka);