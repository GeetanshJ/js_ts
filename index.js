
// Object.create
// let proto = {
//     name:"geetansh",
//     age:22,
//     greet: function(){
//             console.log(`Hi ${this.name}`);
            
//         },

//         getAge : () => {
//             console.log(`You are ${this.age} years old`);
//         }
// };

// let obj = Object.create(proto);
// obj.greet();
// obj.getAge(proto); // undefined beacuse lexical this nahi mil raha





// factory function

// function factoryFunction(name,age){
//     return {
//         name : name,
//         age : age,

//         greet: function(){
//             console.log(`Hi ${this.name}`);
//         },

//         getAge : () => {
//             console.log(`You are ${this.age} years old`);
//         }
//     }
// }

// let obj = new constructorFunction("geetansh",22);
// obj.greet();
// obj.getAge();






// constructor function 
// function constructorFunction(name,age){
//     this.name = name,
//     this.age = age,

//     this.greet = function(){
//         console.log(`Hi ${this.name}`);
//     },

//     this.getAge = () => {
//         console.log(`You are ${this.age} years old`);
//     }
// }

// constructorFunction.prototype.hello = () => {
//     console.log("Hello");
// }

// let obj = new constructorFunction("geetansh",22);
// let obj1 = new constructorFunction("geetansh",22);
// let obj2 = new constructorFunction("geetansh",22);
// obj.greet();
// obj.getAge();






// object literal

// let obj = {
//     name:"Geetansh",
//     greet : function() { 
//         console.log(`Hello ${this.name}`);
//     }
// }

// obj.greet()






// class based

// let pro = Promise. any([
//     Promise.reject("A"),
//     Promise.reject("B"),
//     Promise.reject("C"),
//     Promise.resolve("D"),
// ])

// pro.then((result) => {
//     console.log(result);
// }).catch((err) => {
//     console.log(err);
// });

// let obj = {}

// function abc(){}

// abc.ca




