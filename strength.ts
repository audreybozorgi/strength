const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function strength(num) {
    const isNumberInteger = Number.isInteger(num)
    
    if (!isNumberInteger) {
        console.error('Entered Number is not integer');
        return
    }
}

rl.question('Enter your number? ', (number) => {
    strength(Number(number))
    rl.close();
});





