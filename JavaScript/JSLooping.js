/* Java script Looping Statements 
1) for loop
*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/* 2)while loop */
while (3 < 9) {
    console.log(3);
    break;
}

/* 3) do-while loop */
do {
    console.log(5);
} while (3 < 5);

let array = [2, 4, 6, 7, 8];
for (let element in array) {
    console.log(array[element]);
}


const x = 20;
const y = 5;
const z = x * y;
debugger;
document.getElementById("test").innerHTML = z;
