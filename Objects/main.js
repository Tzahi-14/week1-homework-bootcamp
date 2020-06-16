// //Exercise 1
// const p1 = {
//     name: "Jill",
//     age: 28,
//     city: "NY"
// }
// const p2 = {
//     name: "Robert",
//     age: 30,
//     city: "NY"
// }

// if (p1.age === p2.age) {
//     if (p1.city === p2.city) {
//         console.log("Jill wanted to date Robert")
//     }
//     else {
//         console.log("Jill wanted to date Robert, but couldn't")
//     }

// } else {
//     console.log("no match")
// }

//Exercise 2
const myList = [{item:"shoes",count:4}, {item:"shirts",count:10}]
myList[0].count +=1
myList.splice(1,1)
console.log(myList[0].count)
console.log(myList)

const arr = [{item:"pants",count:8},{item:"socks",count:2}]
myList.push(...arr)

const library={
    books: [
        {title:"harry poter", author:"JKR"},
        {title:"dogs book",author:"wafwaf"},
        {title:"cooking is easy", author:"pasta basta"}
    ]
}
myList.push(...library.books)
console.log(myList)


// Create an object called library that has a books key
// The value of books should be an array of book objects
// Each book should have a title and author key


// Add books to your myList array. You've got this
// Create another array with two objects, and add it to myList from Exercise 2 - remember the spread syntax?


// Create an array called myList with two objects inside. Use whatever key-values you like.

// Then add some code to modify one of the values in the first object, and remove the second object from the array entirely.

// Console log everything along the way to make sure it's all working.


// // Spot Check 1
// let car = {
//     color :"brown",
//     numWheels : "four",
//     isFancy : true
// }

// console.log("The "+ car.color + " car has " + car.numWheels + " wheels")

// if (car.isFancy){
//     console.log("It is fancy")
// }
// else {
//     console.log("It is not fancy")
// }

// // Spot Check 2
// let shop = {
//     item : 'iphone' ,
//     toBeginning : true ,
//     items : ['lenovo','mac', 'dell']
// }
// if (shop.toBeginning){
//     shop.items.unshift(shop.item)
// }
// else {
//     shop.items.push(shop.item)
// }
// console.log(shop.items)

// //Spot Check 3
// const human = {
//     age: 0
// }
// const babyNameKey = "name"
// const babyNameValue = "Goojibear"

// human[babyNameKey] = babyNameValue
// human.name = "Tzahi"
// console.log(human)

// let person = {
//     firstName: "Dopple",
//     lastName: "Ganger"
//   }

//   let p = person
//   p.firstName= "Chappy"

//   console.log(p)
//   console.log(person)
