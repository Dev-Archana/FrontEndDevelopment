/* programming language used for creating dynamic content on websites. 
It is a lightweight,
 cross-platform and
  single-threaded 
  
  
  1995 Brendan Eich -> Netscape
  Basically javascript is used to add functionality to the web site /web app
  initial days its considered as only frontend programming now we can use javascript as a programming language 

  we have 2 types of javascript codes writting 
  1)Internal 
  2)External

  Internal scripting :
  we have to use script tag inside same html page and then we can write js codes inside that 

  External Scripting :
  we can create a document of javascript using .js extention in that file we will only write javascript codes 

Javascript is untyped programming language because with out creating a datatype i can use that data inside that sheet 

  */
/* Printing statements in javascript /output statements  */
console.log("Hello World");
document.write("Hello World");
window.alert("hey are you sure about javascript?..");
//we can use innerHTML that we will use when we are dealing with the DOM concepts

/* JS Statements */
let a, b, c;
document.writeln(a + b + c);
document.writeln(a - b - c);
document.writeln(a * b * c);

/* javascript keyword 

var	            Declares a variable
let	            Declares a block variable
const	        Declares a block constant
if	            Marks a block of statements to be executed on a condition
switch	            Marks a block of statements to be executed in different cases
for	            Marks a block of statements to be executed in a loop
function	            Declares a function
return	            Exits a function
try	            Implements error handling to a block of statements
*/

/* basically we have 2 types of variables
1)variable literals :direct value pass 
2)variable : value need to be taken from end user
*/
m = 10;//automatically i can assign value to a variable else we can use 3 ways
let m1 = 3;//here we can reinitialize the value but redeclaration is not possible 
var m2 = 7;//we can redeclare and reinitialize these values 
const m3 = 9;//here we can't redeclare as well as re initialize the data 

//we can use var and let inside a function but we can't use const inside a function
//we can use const outside a function but we can't use var and let outside a function

/* we can give keyword as a variable name 
it can start with alphabets but not numerical values 
successive values may be the numeric
special characters are not allowed other than $ and _ 
we can use $ , $$ or n number of $ as a variable name
*/

/* let keyword : ES6 :2015 */