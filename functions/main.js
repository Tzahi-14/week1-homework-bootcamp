// const greet = function () {
//     console.log("Hello there")
// }
// greet()

// const tellAJoke = function () {
//     console.log("so funny")
// }

// tellAJoke()

// const welcome = function (name) {
//     console.log("hello " + name)
// }
// welcome("tzahi")
// const myName = "tzahi david"
// welcome(myName)

// const names = ["Mr. Woods", "Sir Newton", "Lady Gamora", "Her Highness Kayla", "Master Shen", "Squire Carl", "The Eternal Brittany"]
// for (let name of names){
//     welcome(name)
// }

// const greet = function(name, timeOfDay){
//     let greeting = "day"
//     if(timeOfDay===1){
//         console.log("morning")
//     }
//     else if (timeOfDay===2){
//         console.log ("after-non")
//     }
//     else{
//         console.log ("evening")
//     }
  
//   console.log("Good " + greeting + ", " + name)

//   }

//   greet ("Darrell", 1)


// const grow = function (user){
//     user.age++
// }

// const adude = {name:"tzahi",age:31}
// grow(adude)
// console.log (adude)

// reference type
// const num = function (arr){
//     let newArr = arr
//     arr[0]= 50
// }

// const array =[1,2,3]
// num(array)
// console.log(array)

//premitive type
// const add = function(x){
//     x++
// }
// let y = 4
// add(y) 
// console.log(y)

// const add = function(x, y){
//     const sum = x + y
//     return sum
//     console.log("Returned " + sum)
//   }
  
//   add(1, 2)
  


// const interSum = function(money){
//    return money * 0.2
// }
// const debt = function(money){
//     const totalDebt = interSum(money)
//     return money + totalDebt
// }

// const loan = 100
// const inter = 0.2
// const sumAll = debt(loan)
// console.log(sumAll)

// greet() //works without a problem
// greetExpression() //throws an error

// function greet(){
//   console.log("Hello there, from the wild, wild West")
// }

// const greetExpression = function(){
//   console.log("Uh oh")
// }

const person = {
    name: "Julius",
    speak: function(food) {
      console.log("I like " + food)
    }
  }
  console.log(person.name) //you know what this will do

  person.speak("cheese toast") //and this? Try it out!
    