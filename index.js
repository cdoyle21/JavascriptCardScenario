//--VARIABLES
var year = 2018, month = "Oct", day = 10;
var myVariable = true;
var a = 10;
var b = 5;
var year = 2003;
var remainder = year % 4; //remainder

//---CONDITIONALS/OPERATORS
if (a < 50 || c === 20 || d !== 4) {
    a++;
    ++a;
} else {

}

if (a = b) {
    //always true as assignment
}

//Ternary operator

// condition ? true : false;
var playerOne = 500;
var playerTwo = 600;
var highScore = (playerOne > playerTwo) ? playerOne : playerTwo;

//---LOOPS
while (a < 20) {
    console.log(a);
    a++;
}

do { //block of code always happens at least once
    console.log(a);
    a++;
} while (a < 20);

for (var i = 1; i < 5000; i++) {
    //do stuff
    if (i == 101) {
        break;
    }
    //do stuff
}
//break jumps out of the loop

for (var i = 1; i < 5000; i++) {
    //do stuff
    if (i % 5 == 0) {
        continue; //done with this iteration, continue back to top of loop
    }
    //do second set of stuff
}

//---FUNCTIONS
function myFunction(x,y) {
    var myVar = x * y;
    console.log(myVar);
    // we can return values
    return myVar;
}
myFunction(754,346);
myFunction(123,-732);
alert("Hello World"); // built-in javascript function
var myResult = myFunction(6,9);

function calculateLoan(amount,months,interest,name) {
    // lots of code
}
calculateLoan(10000,60,7,"Sam Jones"); // correct
calculateLoan(10000,60,7,"Sam Jones",8); // extras are ignored
calculateLoan(10000,60); // missing are passed as "undefined"

//Variable Scope, only for functions
var foo = 500; //global variable
function simpleFunction() {
    // lots of code
    var foo = 250; // local variable
    //lots of code
    console.log(foo);
}
simpleFunction();
console.log(foo);