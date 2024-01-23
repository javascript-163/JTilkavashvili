var myArray = [1, 2, 3, 4, 5];

if (Array.isArray(myArray)) {
    console.log("myArray is an array");
  } else {
    console.log("myArray is not an array");
  }


let names = ["Nika", "Gio" , "Saba" , "Mari" , "Ani"];
console.log(names[0]);



let name = ["Nika", "Gio" , "Saba" , "Mari" , "Ani"];
let lastElement = name.pop();
console.log(lastElement);





let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"];

let firstColor = color[0];
let firstO = o[1];
console.log("1" + firstO + " choice is " + firstColor);


let secondColor = color[1];
let secondO = o[2];
console.log("2" + secondO + " choice is " + secondColor);

let thirdColor = color[2];
let thirdO = o[3];
console.log("3" + thirdO + " choice is " + thirdColor);


let person = {
    saxeli:"mate",
    gvari:"Gotua"
};

person.asaki = 30;
console.log(person);

 delete person.saxeli;
 console.log(person);

person.saxeli = "giorgi";
console.log(person);




