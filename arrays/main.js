// const myStuff = ["car","phone","tablet"]
// console.log(myStuff[1])
// // myStuff.push(myStuff[0]) // myStuff.push("car") 
// // myStuff.unshift(myStuff[myStuff.length - 2])
// // console.log(myStuff)

// // const lastItem = myStuff[myStuff.length -1]
// // const firstItem = myStuff[0]
// // myStuff.push(firstItem)
// // myStuff.unshift(lastItem)
// // console.log(myStuff)

// // myStuff.push(...myStuff)
// // console.log(myStuff)
// // myStuff.splice(1, 1)
// // console.log(myStuff)

// const array = ["clouds", "sky", "birds", "worms", "earth", "dirt", "clothes", "human", "life"]
// array.splice (0,array.length -1)
// console.log (array)
// // const plants = ["Oak", "Lilly", "Belladonna", "Tulip", "Yew"]
// // console.log ("The first plant is " + plants[0], "and the last one is " + plants[plants.length -1] )
// Arrays 1

// const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

// let genesNew = []
// genesNew.push(...genes)
// genesNew [2] = genes[4]
// genesNew [4] = genes[2]
// let lastGen = genesNew.splice(3,1)
// genesNew.push(...lastGen)
// genesNew.push(...lastGen)
// let unstalbeGene = "FXT"
// genesNew.unshift(unstalbeGene)
// console.log(genesNew)
// console.log(lastGen)

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

const newGenes = []
newGenes.push(...genes)
newGenes[2]= genes[4]
newGenes [4]= genes[2]
newGenes.splice(3,1)
newGenes.push(genes[3])
newGenes.push(genes[3])
const newg = "FXT"
newGenes.unshift(newg)
console.log(newGenes);



