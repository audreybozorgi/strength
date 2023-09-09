const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function stepCounter(num, step = 1) {
    let splittedChar, arrayOfNumbers, newNum

    // make number string for implementing neighbourhood algorithm.
    num = String(num)

    // split each character inside string
    splittedChar = num.split('')

    // create array of numbers in integer format
    arrayOfNumbers = splittedChar.map(number => +number)

    // multiply numbers together to find new number
    newNum = arrayOfNumbers.reduce(function (accumulator, current) {
        return accumulator * current
    })

    // check if new number is less than 10 to return step or recursively calling function self. 
    if (newNum >= 10) {
        step = step + 1
        stepCounter(newNum, step)
    } else {
        console.log('steps:', step);
    }
}

function strength(num) {
    // check if number is really integer or not
    const isNumberInteger = Number.isInteger(num)

    // stop further actions if number is not integer
    if (!isNumberInteger) {
        console.error('Entered Number is not integer');
        return
    }

    stepCounter(num)
}

rl.question('Enter your number? ', (number) => {
    strength(Number(number))
    rl.close();
});