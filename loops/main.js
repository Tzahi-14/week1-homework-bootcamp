// // Exercise 1
// let name = ["tzahi","dikla","leo"]
// let ages = [31,29,8]

// for (let i in ages)
// console.log (name[i] + " is " + ages[i] + " years old")

// Exercise 2+3
// let arr = [1,3,6,9,13]
// let sum = 0
// for (let i in arr)
// sum = sum +arr[i]
// let avg = sum/arr.length
// console.log(avg)

// // Exercise 4
// let nums = []
// for (let i = 1;i <=100; i++)
// nums.push(i)
// console.log(nums)


// // Exercise 5 
// let nums = []
// for (let i = 1; i <= 100; i++){
//     nums.push(i)
// }
// console.log(nums)

// for (let num of nums){
//     if ((num % 2) != 0) {
//         console.log(num)
//     }
// }

// Exercise 6
// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
// for (let i =0;i<nums.length;i++){
//     if (nums[i]===709)
//     console.log(i)
// }
// Exercise 7
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []
// for (let i in names){
// people.names = names[i]
// people.ages = ages[i]
// console.log(people)
// }


// // Exercise 8
// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []
// for (let i in names){
// people.names = names[i]
// people.ages = ages[i]
// console.log(people.names + " is " + people.ages + " years old")
// }
// // Exercise 9

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]
//   let i = 0
//   while (id === 2)
//   console.log (posts)
//   i++;
//   posts.splice(1, 1)


// let companies = ["Tesla", "Amazon", "Google", "Microsoft"]
// for(let company of companies){
//     console.log("One day i will work at "+ company)
//   }

//   for(let i = 80; i < 100; i+=2){
//     console.log(i)
//   }

//again again again
// const name = ["tzahi","dikla","leo"]
// const age = [31,28,8]
// for (let i in name){
// console.log(name[i]+ " is " + age[i]+ " years old")
// }
// const number = [1,3,4,5,9]
// let sum = 0
// for (let num of number){
//     sum += num
// }
// const avg = sum/number.length
// console.log (sum)
// console.log (avg)

// const nums = []
// for (let i =1; i <=100; i++){
//     nums.push(i)
// }
// for(let num of nums) {
//     if((num % 2) === 1){
//       console.log(num)
//     }
//   }
  
// for(let i in nums) {
//     if((i % 2) === 1){
//       console.log(nums[i])
//     }
// }


// let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

// for (let i in nums){
//     if (nums[i]===709){
//         console.log(i)

//     }
// }

// const names = ["Ashley", "Donovan", "Lucas"]
// const ages = [23, 47, 18]
// const people = []

// for (let i in names){
// people.push({name:names[i], age: ages[i]})
// }

// for (let i in names){
//     console.log (people[i].name + " is "+ people[i].age + " years old")
// }

// const posts = [
//     {id: 1, text: "Love this product"},
//     {id: 2, text: "This is the worst. DON'T BUY!"},
//     {id: 3, text: "So glad I found this. Bought four already!"}
//   ]

//   for (let i in posts){
//       if (posts[i].id ===2)
//       posts.splice (i,1)
//   }
//   console.log(posts)

const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

//   for (let i in posts){
//       if (posts[i].id === 2)
//       for (let f in posts[i].id.comments){
//           if(posts.id.comments[f]===3)
//           posts.id.comments.splice (f,1)
//       }
//   }
//   console.log(posts)
// const obj = {}
	 
// for(let i in posts) {
//   obj = posts[i]
	  
//   if(obj.id == 2) {
//     for(let f in obj.comments){
//       if(obj.comments[f].id == 3){
//         obj.comments.splice(f, 1)
//       }
//     }
//   }
// }
	
// console.log(posts)

