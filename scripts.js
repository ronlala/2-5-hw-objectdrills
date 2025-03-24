// const person = { firstName: "John", lastName: "Doe" };

// 1
// Use array destructuring to define variables and assign the values in the object

const{firstNames = "Laronda",lastName = "chairse"} = person;

console.log(firstNames);
console.log(lastName);


// 2
// Use spread operator to add a new key-value pair to the person object: job: "Software Engineer"
const newPair = {...person,job: "software Engineer"};

// 3
// Create a copy of the person object using spread operator and assign it to a new object variable
 const newPerson ={...person};


const odds = { a: 1, c: 3, e: 5 };
const evens = { b: 2, d: 4, f: 6 };


// 4
// Combine the odds and evens objects using spread operator and build a new object variable

const oddEvens ={...odds, ...evens};

const car = { make: "Honda", model: "Passport", year: 2024 };

console.log("hello")

// 5
// Check if the car object has the model property

if (car.hasOwnProperty("model")){
    console.log("True");
}else { 
    console.log("False");
}

// 6
// Check if the car object has the color property

if (car.hasOwnProperty("Color")){
    console.log("The car has a color ");
}else { 
    console.log("The car has no color");
}

// 7
// Print to the console an list of the keys in the car object

const listOfKeys = Object.keys(car);
console.log(listOfKeys);


// 8
// Print to the console an list of the values in the car object
const listOfValues = Object.values(car);
console.log(listOfValues);