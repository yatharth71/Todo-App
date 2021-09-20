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
var marks = {
    ravi: 34,
    shubham: 78,
    harry: 99.997
}
// console.log(marks);

// Booleans

var a = true
var b = false
// console.log(a, b);

// Undefined

// var und = undefined;
var und;
// console.log(und);

// Null 

var n = null;
// console.log(n);

/*

At a avery high level, there are two types of data-types in Javascript : 
    a. Primitive data-type : undefined, null, number, string, float, boolean, symbol
    b. Reference data-type : 
*/

var arr = [1, 2, "bablu", 4, 5]
// console.log(arr)


var a = 100;
var b = 10;
// console.log("The value of the a + b is",a+b)
// console.log("The value of the a - b is",a-b)
// console.log("The value of the a * b is",a*b)
// console.log("The value of the a / b is",a/b)

// Assignment operators

var c = b;
// c -= 2
// c *= 2
// c /= 2
// console.log(c)


// Comparision operators
var x = 34;
var y = 56;
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

// Functions in Javascript
// DRY = Do not repeat yourself
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2)

// Conditions in Javascript
/*
var age = 23;

// Single conditional
if (age>18){
    console.log("You can rasna drink");
}

// if (age>18){
//     console.log("You can rasna drink");
// }

// else{
//     console.log("You cannot rasna drink");
// }


// if-else ladder
if (age>32) {
    console.log("You are not a kid")
}

else if(age>26){
    console.log("Bacche nahi rahe");
}

else if(age>24){
    console.log("Bacche nahi rahe1");
}

else if(age>18){
    console.log("Bacche nahi rahe2");
}

else{
    console.log("Bacche rahe")
}
console.log("End of ladder")
// const ac = 0;
// ac = ac + 1;
// console.log(ac)
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(arr);
// for (var i=0; i<=arr.length; i++) {
//     if (i==2) {
//         // break
//         continue 
//     }
//     // else{
//     //     continue
//     // }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element)
// })

// let j = 0;
// while (j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length)

let myArr = ["Fan", "Camera", 34, null, true]
// Array Methods
// console.log(myArr.length);
// myArr.pop()
// myArr.push("Harry");
// myArr.shift();
// myArr.unshift("Harry");
const newLen = myArr.unshift("Harry")
// console.log(newLen)
// console.log(myArr.length);

// String Methods in Javascript
let myLovelyString = "Harry is a good boy";
// console.log(myLovelyString.length)
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))
// console.log(myLovelyString.slice(1,4))
d = myLovelyString.replace("Harry", "Rohan")
// console.log(d , myLovelyString)

let myDate = new Date();
// console.log(myDate.getDay())


// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem)

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML)
// console.log(elem.innerText)
// console.log(elemClass[0].innerHTML)
// console.log(elemClass[0].innerText)
tn = document.getElementsByTagName("div");
// console.log(tn)
createdElement = document.createElement("p");
createdElement.innerText = "This is a para created using nodes"
createdElement2 = document.createElement("b");
createdElement2.innerText = "This is a para created bold"
tn[0].append(createdElement)
tn[0].replaceChild(createdElement2, createdElement)

// Selecting using query
sel = document.querySelector('.container')
// console.log(sel)
sel = document.querySelectorAll('.container')
// console.log(sel)

// Events in Javascript
function clicked(){
    console.log("The button was clicked")
}

window.onload = function(){
    console.log("The document was loaded")
}

// firstContainer.addEventListener("click", function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>We have clicked</b>"
//     console.log("Clicked on Container")
// })

// firstContainer.addEventListener("mouseover", function(){
//     console.log("Mouse in Container")
// })
// let prevHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstContainer.addEventListener("mouseout", function(){
//     console.log("Mouse out from Container")
// })

// firstContainer.addEventListener("mouseup", function(){
//     console.log("Mouse up when clicked on Container");
//     document.querySelectorAll(".container")[1].innerHTML = prevHTML;
// })
// firstContainer.addEventListener("mousedown", function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b>Mouse btn down when clicked</b>"
//     console.log("Mouse down when clicked on Container")
// })


// Arrow Functions
// function summ(a,b){
//     return a+b;   
// }
summ = (a,b) => {
    return a+b;
}


logKaro = ()=>{
    document.querySelectorAll(".container")[1].innerHTML = "<b>Set Interval Fired</b>"
    console.log("I am your log")
}
// Settimeout and Setintervel
// setTimeout(logKaro, 5000);
// clr = setInterval(logKaro, 2000)

// Javascript Local Storage
// localStorage.setItem("name", "harry");
// undefined
// localStorage
// Storage{name : "harry", length : 1}
// localStorage.getItem("name") 
// localStorage.removeItem("name")
// localStorage.clear()


// JSON
// obj = {name : "harry", length:1, a:{this : 'that'}}
// jso = JSON.stringify(obj)
// console.log(typeof jso)
// console.log(jso)
// parsed = JSON.parse(`{"name":"harry","length":1,"a":{"this":"that"}}`)
// console.log(parsed)