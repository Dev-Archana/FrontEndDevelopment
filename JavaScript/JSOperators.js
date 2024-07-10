/* Operators in JAVASCRIPT
Arithmetic Operators
Assignment Operators
Comparison Operators
String Operators
Logical Operators
Bitwise Operators
Ternary Operators
Type Operators

Operator : is a symbol which we can use for specific task 
Operands: Values of variables
Operation/Expression : Combination or sequence of operator and operands 

Arithmetic Operators:
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Modulus (%) : gives remainder of division

Assignment Operators:
1. Assignment (=)
2. Addition Assignment (+=)
3. Subtraction Assignment (-=)
4. Multiplication Assignment (*=)
5. Division Assignment (/=)
6. Modulus Assignment (%=)

Comparison Operators:
1. Equal (==)
2. Not Equal (!=)
3. Greater Than (>)
4. Less Than (<)
5. Greater Than or Equal (>=)
6. Less Than or Equal (<=)

String Operators:
1. Concatenation (+) : combine two or more strings

Logical Operators:
1. AND (&&) : returns true if both operands are true
2. OR (||) : returns true if either of the operands is true
3. NOT (!) : reverses the boolean value

Bitwise Operators:
1. AND (&) : performs bitwise AND operation
2. OR (|) : performs bitwise OR operation
3. XOR (^) : performs bitwise XOR operation
4. NOT (~) : performs bitwise NOT operation
5. Left Shift (<<) : shifts bits to the left
6. Right Shift (>>) : shifts bits to the right

Ternary Operators:
1. Conditional (?:) : used for conditional expressions

*/
let a = 10;
let b = 20;

// Arithmetic Operators

console.log("Addition:", a + b); // Output: 30
console.log("Subtraction:", a - b); // Output: -10
console.log("Multiplication:", a * b); // Output: 200
console.log("Division:", a / b); // Output: 0.5
console.log("Modulus:", a % b); // Output: 10

// Assignment Operators

a += b; // Output: 30
console.log("a after += b:", a);

a -= b; // Output: 30
console.log("a after -= b:", a);

a *= b; // Output: 600

a /= b; // Output: 3

a %= b; // Output: 10

// Comparison Operators

console.log("a == b:", a == b); // Output: false
console.log("a != b:", a != b); // Output: true
console.log("a > b:", a > b); // Output: false
console.log("a < b:", a < b); // Output: true
console.log("a >= b:", a >= b); // Output: false

console.log("a <= b:", a <= b); // Output: true

// String Operators

console.log("Concatenation:", "Hello" + " World"); // Output: Hello World

// Logical Operators

console.log("AND (&&):", a && b); // Output: true
console.log("OR (||):", a || b); // Output: true
console.log("NOT (!):", !a); // Output: false

// Bitwise Operators

console.log("Bitwise AND (&):", a & b); // Output: 20
console.log("Bitwise OR |:", a | b); // Output: 30
console.log("Bitwise XOR (^):", a ^ b); // Output: 30
console.log("Bitwise NOT (~):", ~a); // Output: -11

console.log("Left Shift (<<):", a << 1); // Output: 20

console.log("Right Shift (>>):", a >> 1); // Output: 5

// Ternary Operators

let result = a > b ? "a is greater than b" : "a is less than b";
console.log(result); // Output: a is less than b
