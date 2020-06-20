// // //Exercise 1
// // const p1 = {
// //     name: "Jill",
// //     age: 28,
// //     city: "NY"
// // }
// // const p2 = {
// //     name: "Robert",
// //     age: 30,
// //     city: "NY"
// // }

// // if (p1.age === p2.age) {
// //     if (p1.city === p2.city) {
// //         console.log("Jill wanted to date Robert")
// //     }
// //     else {
// //         console.log("Jill wanted to date Robert, but couldn't")
// //     }

// // } else {
// //     console.log("no match")
// // }

// //Exercise 2
// const myList = [{item:"shoes",count:4}, {item:"shirts",count:10}]
// myList[0].count +=1
// myList.splice(1,1)
// console.log(myList[0].count)
// console.log(myList)

// const arr = [{item:"pants",count:8},{item:"socks",count:2}]
// myList.push(...arr)

// const library={
//     books: [
//         {title:"harry poter", author:"JKR"},
//         {title:"dogs book",author:"wafwaf"},
//         {title:"cooking is easy", author:"pasta basta"}
//     ]
// }
// myList.push(...library.books)
// console.log(myList)


// // Create an object called library that has a books key
// // The value of books should be an array of book objects
// // Each book should have a title and author key


// // Add books to your myList array. You've got this
// // Create another array with two objects, and add it to myList from Exercise 2 - remember the spread syntax?


// // Create an array called myList with two objects inside. Use whatever key-values you like.

// // Then add some code to modify one of the values in the first object, and remove the second object from the array entirely.

// // Console log everything along the way to make sure it's all working.


// // // Spot Check 1
// // let car = {
// //     color :"brown",
// //     numWheels : "four",
// //     isFancy : true
// // }

// // console.log("The "+ car.color + " car has " + car.numWheels + " wheels")

// // if (car.isFancy){
// //     console.log("It is fancy")
// // }
// // else {
// //     console.log("It is not fancy")
// // }

// // // Spot Check 2
// // let shop = {
// //     item : 'iphone' ,
// //     toBeginning : true ,
// //     items : ['lenovo','mac', 'dell']
// // }
// // if (shop.toBeginning){
// //     shop.items.unshift(shop.item)
// // }
// // else {
// //     shop.items.push(shop.item)
// // }
// // console.log(shop.items)

// // //Spot Check 3
// // const human = {
// //     age: 0
// // }
// // const babyNameKey = "name"
// // const babyNameValue = "Goojibear"

// // human[babyNameKey] = babyNameValue
// // human.name = "Tzahi"
// // console.log(human)

// // let person = {
// //     firstName: "Dopple",
// //     lastName: "Ganger"
// //   }

// //   let p = person
// //   p.firstName= "Chappy"

// //   console.log(p)
// //   console.log(person)

// const animalCounts = {
//     lion: 2,
//     zebra: 11,
//     ostrich: 1,
//     tortoise: 4
//   }
  
//   //Suddenly the zoo acquired two dozen eagles
  
  
//   animalCounts['eagle'] = '24'
//   console.log(animalCounts)
  
//   let x = [ {human: {name: 'Daena', age: 31} } ][0].age
//   console.log(x)

//again again again

// const p1 = {
//     name: "Jill",
//     age:28 ,
//     city: "NY"
// }
// const p2 = {
//     name: "Robert",
//     age: 30,
//     city : "New Jersy"
// }
// if (p1.age === p2.age){
//     if (p1.city === p2.city){
//     console.log(p1.name + " wanted to date " + p2.name)
//     }
//     else{
//     console.log(p1.name + " wanted to date " + p2.name + " but couldn't")
//     }
// }

// const myList =[{
//     item: "books" , number : 10} , 
//     {item: "cards" , number : 20}
// ]
// myList[0].number +=1
// myList.splice (1,1)

// console.log(myList)

// const myList2 = [{
//     name: "Tzahi" , age :31},
//     {name: "Dikla" , age : 28
// }]

// myList.push(...myList2)
// console.log(myList)

// const library = {books:[
//     {title:"abrakadabra", author:"JKR"},
//     {title:"basketball book", author: "david blatt"}
// ]
// }

// myList.push(...library.books)

// console.log(myList)

// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
// Exercise 5
//   const name = prompt('Please enter the name for your reservation');
//   if(reservations===true && reservations.claimed=== true){
//       alert("Welcome, " + reservations)
//   }
//   else if (reservations===true && reservations.claimed=== false){
//       alert("Hmm, someone alrady claimed this reservation")
//   }
//   else {
//       alert("You have no reservation")
//   }

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,
    fridge: {
        price: 500,
        works: false,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const hasExpierd = date - expiryDate
const fixingPrice = price/2

if (kitchen.hasOven===true&& kitchen.fridge.works===true){
    console.log("Geraldine's " +kitchen.fridge.items[1].name + "expired in " + hasExpierd. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.)
}  