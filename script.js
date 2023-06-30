//The console.log is a function in JS which can be used to print any kind of variable
//defined BeforeUnloadEvent, within or print any message to the console.

//There are 4 types of console outputs
//1. Console.log()
//2. console.info()
//3. console.warn()
//4. console.error()

//sinple console.log() statement

console.log("Hello world");

let str1 = "Welcome to Javasrcipt";

console.log(str1);
console.info(str1);
console.warn(str1);
console.error(str1);

console.log("Hella");
console.log("ogobene");
console.log("Nigeria");
console.log("Capricon");

//creating 2 variables and also uputting with console.log

let car1 = "cla coupe";
let car2 = "lambo";

console.log("My favorite car is " + car1, "and the model is " + car2);

//using template literals

let mycar = "Audi";
let mymodel = "A5";

console.log("my fav car is  ${mycar} and the model is  ${mymodel} ");

let a = 100;
while (a <= 200) {
  console.log(a);
  a++;
}

//create an object using literal notation
let Animal = { 
    name: "Dog", 
    size: "small",
    breed: "local",
    age: 13
 };
//push object into a list
let AnimalList = [Animal]
console.log(AnimalList);
//looping through to print names
for (let i = 0; i < AnimalList.length; i++) {
  for (let key in AnimalList[i]) {
    console.log(`${key} : ${AnimalList[i][key]}`);
  }
}



let animalList = [
    { name: "Dog", size: "small", breed: "local", age: 13 },
  ];
  
  for (let i = 0; i < animalList.length; i++) {
    // Change properties for specific conditions
    if (animalList[i].name === "Dog") {
      animalList[i].size = "medium";
    // Print updated properties
    for (let key in animalList[i]) {
      console.log(`${key}: ${animalList[i][key]}`);
    }
  
    console.log("------------");
}
}
  