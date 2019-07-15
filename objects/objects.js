// const mustang = {
//     color: "red",
//     year: "2017",
//     make: "Ford",
//     model: "Mustang"
// }

// const animals = ["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]

// const Jenny = {
//     name: "Jenny",
//     eyeColor: "brown",
//     age: "30"
// }

// const Marlowe = {
//     name: "Marlowe",
//     eyeColor: "brown",
//     age: "6"
// }

// const Clementine = {
//     name: "Clementine",
//     eyeColor: "blue",
//     age: "3"
// }

// const Linus = {
//     name: "Linus",
//     eyeColor: "brown",
//     age: "1"
// }

// const familyMembers = [Jenny, Marlowe, Clementine, Linus]

// const wardrobe = {
//     height: 80,
//     manufacturer: "Killibrew & Sons",
//     contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
//     depth: 38,
//     width: 50
// }

// console.log(wardrobe.height)
// console.log(wardrobe.manufacturer)
// console.log(wardrobe.contents)
// console.log(wardrobe.depth)
// console.log(wardrobe.width)

// wardrobe.material = "Cedar"

// console.log(wardrobe.material)

// console.log(`The wardrobe's height is ${wardrobe.height}`)





const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

console.log(empireStateBuilding.stories)
console.log(empireStateBuilding.height)
console.log(empireStateBuilding.squareFeet)
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength)

const architect = empireStateBuilding["architect"]
const owner = empireStateBuilding["owner"]
const cost = empireStateBuilding["cost"]
const constructionDate = empireStateBuilding["constructionDate"]
const address = empireStateBuilding["address"]

console.log(architect)
console.log(owner)
console.log(cost)
console.log(constructionDate)
console.log(address)