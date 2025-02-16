function greeter(person: string) {
    return "Hello, " + person;
}

function greeterMultiple(persons: string[]) {
    persons.forEach(person => console.log(greeter(person)));
}

let user = ["Jane User", "John Smith"];

greeterMultiple(user); // Correct usage
console.log(greeter(user[0])); // Accessing the array element correctly