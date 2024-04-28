// let randomNumber = Math.random()*6
// console.log(randomNumber)

// let flooredNumber = Math.floor(12.999999999999)
// console.log(flooredNumber)

// let randomNumber = Math.floor( Math.random() * 6 )
// console.log(randomNumber)

// let randomNumber = Math.floor( Math.random() * 6 ) + 1
// console.log(randomNumber)
// function rollDice(){
//     return randomNumber
// }

function rollDice() {
    let randomNumber = Math.floor( Math.random() * 6 ) + 1
    return randomNumber
}

console.log( rollDice() )




