/* function function_name(parameter)
{
    //code
} */

/* named function  */

function greet() {
    console.log("Hello, World!");
}

greet();

/* anonymous function  */

let anonymousGreet = function () {
    console.log("Hello, World!");
};

anonymousGreet();

/* function with parameter  */

function greetUser(name) {
    console.log("Hello, " + name + "!");
}

greetUser("John Doe");

/* function with return value  */

function add(a, b) {
    return a + b;
}

console.log(add(5, 10));

/* function with default parameter  */

function greetUserWithDefault(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greetUserWithDefault();

/* function with rest parameter  */

function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;

}

/* arrow function */

const multiply = (a, b) => a * b;

console.log(multiply(5, 10));

/* await and async */

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}
/* use of await and async functions*/

