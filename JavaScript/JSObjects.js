/* JAVASCRIPT OBJECT  */
let person = {
    name: "John Doe",
    age: 30,
    city: "New York"
}
/* Accessiong of objects  */
console.log("person name is " + `${person.name}` + "Age is" + `${person.age}` + "city :" + `${person.city}`);

/* Chceking own property or not  */
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("age"));
console.log(person.hasOwnProperty("City"));//case sensitive
console.log(person.hasOwnProperty("toString"));

/* i wanted to display all keys present in a object */
console.log("___________________________________")
for (let key in person) {
    console.log(key);
}
console.log("___________________________________")

/* DELETING OBJECT PROPERTIES  */
console.log(person.name);
delete person.name
console.log(person.name);
