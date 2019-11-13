const readlineSync = require('readline-sync');

var lines = process.stdout.getWindowSize()[1];
for(let i = 0; i < lines; i++) {
    console.log('\r\n');
}

var tryes = 0;
var cows = 0;
var bulls = 0;

var numbers = new Array(4);

for (let i = 0; i < numbers.length; i++) {
    if ( i === 0 ) {
        numbers[i] = randomInt(1, 10)
    } else {
        do{
            numbers[i] = randomInt(1, 10)
        }
        while(numbers.filter( e => e === numbers[i] ).length > 1)
    }
}

console.log(numbers)

console.log('This is Cows and Bulls game. Type close to end the game.\n')

var input;

do{
    input = readlineSync.question('Guess the 4 digit number\n');

    if (input.length === 4){

        tryes += 1;
    
        for (let i = 0; i < input.length; i++) {
            if ( numbers.indexOf( numbers.find( e => e == input[i] ) ) !== -1 ){
                if ( input.indexOf(input[i]) === numbers.indexOf(numbers.find( e => e == input[i] )) ){
                    bulls += 1
                } else cows += 1
            }
        }
    
        console.log( '\nTry number: ', tryes, '\n' );
    
        if ( bulls === 4 ){
            console.log( 'Congratulations, you\'ve guessed the number: ', input, '\n' )
        } else {
            console.log( 'Wrong!\nCows: ', cows, '\nBulls: ', bulls, '\n' )
            cows = 0;
            bulls = 0;
        }
    } else {
        console.log('Invalid input!\n')
    }

}while( input !== 'close' || bulls === 4)

if ( input === 'close' ){
    console.log( 'Game over, number of tryes: ', tryes, '\n' )
}

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}