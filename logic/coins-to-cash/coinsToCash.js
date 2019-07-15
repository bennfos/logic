// const piggyBank = {
//     quarters: 385,
//     nickels: 674,
//     dimes: 545,
//     pennies: 12478
// }

// let dollarAmount = (piggyBank.quarters * .25) + (piggyBank.dimes * .1) + (piggyBank.nickels * .05) + (piggyBank.pennies * .01)

let dollarAmount = 309.23
const piggyBank = {   
}

piggyBank.quarters = parseInt(dollarAmount / .25)
piggyBank.dimes = parseInt(dollarAmount) / .1
piggyBank.nickels = parseInt(dollarAmount) /.5
piggyBank.pennies = parseInt(dollarAmount) / .01