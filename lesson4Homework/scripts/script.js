// task1

let action = "move";

switch(action){
case "move" :
alert("You`re moving!");
break;

case "jump" :
alert("You`re jumping!");
break;

case "run" :
alert("You`re running!");
break;

default:
alert("Invalid action!");


}



// task 2

let Vegetable;

switch(Vegetable) {
    case "Broccolli" :
    alert("Hello");
    break;

    case "Carrot" :
    alert("Welcome");
    break;

    default:
    alert("Neither");
}


// task 3
let age = 18;


function checkVoicePermission(age) {
    if (age < 18) {
        console.log("you cant vote");
    } else {
        console.log("you can vote");
    }
}

checkVoicePermission(age);


//task 4

function checkPassword(password) {
    if(password.length < 3){
        return "უვარგისი";
    }
    else if (password.length >= 3 && password.length <=6){
        return "სუსტია";
    }

    else if (password.length >= 6 && password.length <=8){
        return "მისაღებია";
    }

    else if (password.length >= 8 && password.length <=16){
        return "ძლიერია";
    }

    else if(typeof password === typeof 20){
        return "უვარგისი";
    }


}



