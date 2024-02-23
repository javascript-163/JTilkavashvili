// task1

let number = 5;

let square = number * number;
console.log(square);

//task2

function ctoFahr(celsius){
    let fahrenheit = celsius * 9/5 + 32;
    return fahrenheit;
}

console.log(ctoFahr(0));

//task3
const x = 7;

 if (5 <= x && x <= 10) {

     console.log("Num is in the range");
 }

     else{
     console.log("Num is out of the range");
}

//task4

function checkLeapYear(year) {

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} 
else {
    console.log(year + ' is not a leap year');
}
}

const year = prompt('Enter a year:');

checkLeapYear(year);

//task5

let number1 = Number(prompt("please enter a number:"));
let number2 = Number(prompt("please enter a number:"));
let mathOperation = prompt("please enter math operation:");

switch (mathOperation) {
    case '+':
        console.log(number1 + number2);
        break;

    case '-':
        console.log(number1 - number2);
        break;

    case '*':
        console.log(number1 * number2);
        break;

    case '**':
        console.log(number1 ** number2);
        break;

    case '/':
        console.log(number1 / number2);
        break;

    case '%':
        console.log(number1 % number2);
        break;
    

    default:
        console.log('wrong operation!');

}




