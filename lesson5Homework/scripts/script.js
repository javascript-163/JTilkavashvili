//task1  გამოიტანცე ყოველი მესამე ელემენტი მასივიდან


let myArray = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < myArray.length; i += 3) {
    console.log(myArray[i]);
}


//task2 შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს

for (let i = 10; i >= 1; i--) {
    console.log(i);
  }


//task3  ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob'];
let namesWithoutBob = [];

for (let i = 0; i < names.length; i++) {
  if (names[i] !== 'Bob') {
    namesWithoutBob.push(names[i]);
  }
}

console.log(namesWithoutBob);


//task4  ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს


function fun(number, power) {
    if (power === 0) {
      return 1;
    }
  
    let result = 1;
  
    for (let i = 1; i <= power; i++) {
      result *= number;
    }
  
    return result;
  }
  
  let result = fun(5, 3);
  console.log(result); 


  //task5 ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს - Fizz, ასევე იგივე ფუნქციის მიხედვით გ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანს Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანს FizzBuzz.

  function fizzBuzz() {
    for (let i = 1; i <= 100 ; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 3 ===0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    }
    else  {
        console.log(i);
    }
  }
}

fizzBuzz();

//task6 ფუნქცია,რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს

function factorialCalculator(number){
    if (number < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let result = 1;

    for (let i = 2; i <= number; i++) {
        result *= i;
    }

    return result;
}

let factorialOfx = factorialCalculator(5);
console.log(factorialOfx);

//task7 შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით უნდა ეწეროს.

let str = prompt("word");

function firstLetter(str) {
    if (typeof str !== "string" || str.length === 0) {
        return "invalid input";
    }

    return str.charAt(0).toUpperCase() + str.slice(1);

}
alert(firstLetter(str));


//task 8 შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი. მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.

    let string = prompt("any string");
        function stringChecker(testString) {
            if ((testString.trim().length) === 0) {
                return "This string is blank"
            }
            else {
                return "This string is not blank";
            }
        }
        alert(stringChecker(testString));




//ssssssss


