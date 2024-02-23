// Task1. შექმენით ფუნქცია, რომელიც იპოვის ყველზე გრძელ სიტყვას მოცემულ სტრიქონში.
let sentence = prompt("Enter sentence");
let word = sentence.split(" ");
let longestWord = "";
for (let i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
        longestWord = word[i];
    }
};
alert("The longest word in this sentence is" + longestWord);


//task 2  კალკულატორი

let calculator = {
    num1: 0,
    num2: 0,

    add: function() {
        return this.num1 + this.num2;
    },

    subtract: function() {
        return this.num1 - this.num2;
    },

    multiply: function() {
        return this.num1 * this.num2;
    },

    divide: function() {
        if (this.num2 !== 0) {
            return this.num1 / this.num2;
        } else {
            return "Cannot divide by zero!";
        }
    }
};

calculator.num1 = 10;
calculator.num2 = 5;
console.log("result:", calculator.add());     
console.log("result:", calculator.subtract());  
console.log("result:", calculator.multiply()); 
console.log("result:", calculator.divide());    