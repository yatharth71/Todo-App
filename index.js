// Javascript console API
// console.log('Hello World', 4+6 , 'Another log');

// alert('me');
//  document.write('this is document write');
// console.warn('this is warning');
// console.error('This is an error ')

// Javasript Variable
// Variables are containers to store data values

var number1 = 34;
var number2 = 56;
// console.log(number1+number2);

// Data types in Javascript
var num1 = 455; // Number
var num2 = 56.75; // Float
var str1 = 'This is a string'; // String
var str2 = 'This is also a string'; // String

// Objects
var marks={
    ravi : 34,
    shubham : 78,
    harry : 99.997
} 
// console.log(marks);

// Booleans

var a=true
var b=false
// console.log(a, b);

// Undefined

// var und = undefined;
var und;
// console.log(und);

// Null 

var n=null;
// console.log(n);

/*

At a avery high level, there are two types of data-types in Javascript : 
    a. Primitive data-type : undefined, null, number, string, float, boolean, symbol
    b. Reference data-type : 
*/

var arr =   [1, 2, "bablu", 4, 5]
// console.log(arr)


var a = 100;
var b = 10;
// console.log("The value of the a + b is",a+b)
// console.log("The value of the a - b is",a-b)
// console.log("The value of the a * b is",a*b)
// console.log("The value of the a / b is",a/b)

// Assignment operators

var c=b;
// c -= 2
// c *= 2
// c /= 2
// console.log(c)


// Comparision operators
var x =34;
var y =56;
// console.log(x==y);
// console.log(x<=y);
// console.log(x>=y);
// console.log(x>y);
// console.log(x<y);

// Logical And
// console.log(true && true)
// console.log(true && false)
// console.log(false && false)
// console.log(false && true)

// Logical Or
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// Logical Not
// console.log(!false)
// console.log(!true)

// Functions
function avg(a, b){
    c = (a+b)/2;
    return c;
}

c1 = avg(4,6);
c2 = avg(4,6);
console.log(c1, c2)