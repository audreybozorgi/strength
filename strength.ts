const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function multipleCounter(num, step) {
    //make number string for implementing neighbourhood algo.
    num = String(num)

    //split numbers inside string
    const splittedNumber = num.split('')
    
    //create array of numbers in integer format
    const splittedNumberInInteger = splittedNumber.map(number => +number)

    let newNumber = splittedNumberInInteger.reduce(function(accumulator, current) {
        return accumulator * current
    })
    
    if(newNumber >= 10) {
        step = step + 1
        multipleCounter(newNumber, step)
    }else{
        console.log('step', step);
    }
}

function strength(num) {
    //check if number is really integer or not
    const isNumberInteger = Number.isInteger(num)
    
    //stop furthur actions is number is not integer
    if (!isNumberInteger) {
        console.error('Entered Number is not integer');
        return
    }

    multipleCounter(num, 1)
}

rl.question('Enter your number? ', (number) => {
    strength(Number(number))
    rl.close();
});





