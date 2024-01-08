// Call:
// The call() method invokes a function with a given
// this value and arguments provided one by one

// Apply:
// Invokes the function with a given
// this value and allows you to pass in arguments as an array

// bind:
// returns a new function, allowing you to pass any number of arguments

var employee1 = {
    firstName: "Ufere",
    lastName: "Goodnews"
}

var employee2 = {
    firstName: "John",
    lastName: "Doe"
}

function invite(greeting1, greeting2) {
     return greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
}

const employee1Greeting = invite.call(employee1, "Hello", "How are you?")
const employee2Greeting = invite.call(employee2, "Hello", "How are you?")

const employee3Greeting = invite.apply(employee1, ["Hello", "How are you?"])
const employee4Greeting = invite.apply(employee2, ["Hello", "How are you?"])

const employee5Greeting = invite.bind(employee1)
const employee6Greeting = invite.bind(employee2)

console.log(employee5Greeting("Hello", "How are you?"))
console.log(employee6Greeting("Hello", "How are you?"))