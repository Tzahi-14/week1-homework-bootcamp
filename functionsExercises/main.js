// exercise 1
// const calcAge = function(birthYear,todayYear){
//     return birthYear - todayYear
// }

// const age = calcAge(2017, 1989)
// console.log(age)

// exercise 2
// const calcAge = function(birthYear,todayYear){
//     return birthYear - todayYear
// }

// const age = calcAge(2017, 1989)
// console.log("you are either " + age + " or " + (age -1) )

// exercise 3 - check if we can do that with console.log at the end
// const isEven = function (number){

//     if(number%2===0){
//     console.log ("true")
//     }
//     else{
//         console.log("false")
//     }
//     return 
// }

//     const param =4
//     const evenOrOdd = isEven (param)

// // //exercise 4
// const odd = function (num){ 
//     let arr = []
//     for (let i in num){
//         if (num[i]%2===1){
//             arr.push(num[i]);
//         }
//         return arr
//     }
// }
//     const array = [1,2,3,4,8.9]
//     const oddParam = odd(array)
//     console.log (oddParam)

// exercise 5

// again again again
// const add = function(x,y){
//     return x+y
//   }
//   const sum = add(1, 2)
//   console.log("Returned " + sum)

// const person = {
//     name: "Julius",
//     speak: function(food) {
//       console.log("I like " + food)
//     }
//   }
//   person.speak("cheese toast")

// const calcAge = function (todayYear,birthYear){
//     return todayYear- birthYear
// }
// const age = calcAge(2017, 1989)
// console.log (age)

// const calcAge = function (todayYear,birthYear){
// return todayYear - birthYear
// }
// const age = calcAge (2018, 2015)
// console.log ("you are either " + age + " or "+ (age -1))

// const isEven = function (number){
//     if((number%2)===0){
//         return true
//     }
//     else {
//         return false
//     }
// }
// const param = isEven(3)
// console.log(param)
// wrong
// const isEven = function (number){
//     const newArr = []
//     for (let i of number){
//     if ((number[i]%2)===1){
//         newArr.push(number[i])
//     }
//     return newArr
// }
// }
// const arr = [1,2,4,7,8,13]
// const print = isEven(arr)
// console.log(print)

// const checkExists = function (arr,number){
//     for (let i of arr){
//         if (arr[i]===number){
//             return true
//         }
//         else{
//             return false
//         }
//     }
// }
// const test = [1,2,3]
// console.log(checkExists(test,2))
//exercise 6
// const calculator = {
//     add: function (a,b) {
//         return a+b
//     },
//     subtract: function(a,b){
//         return a-b 
//     }
// }
// const result1 = calculator.add(20, 1)
// const result2 = calculator.subtract(30, 9)
	
// console.log(calculator.add(result1, result2))

//exercise 7
const makeRegal = function (name){
    return "His Royal Highness, " + name
}
const increaseByNameLength = function (money, name){
    return name.length * money
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"
