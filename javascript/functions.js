// function getName(name){
// console.log(name)
// }

// getName("is tolu o")

// function checkHeight(name, height){
//     return height >= "4ft" &&  name + " is close to the ground"
// }

// console.log (checkHeight("lekan", "5ft"))

// let myName = "lotachi"

// function changeName(personName, name){
//     console.log(personName)
//     personName = name

// }

// changeName(myName, "rotachi")
// console.log(myName)

// function changeNameB(){
//     myName = "rotachi"
// }

// changeNameB()
// console.log(myName);

// const multiplication = (number) => {
//     for(let i = 0; i < 12; i++){
//         // console.log(number + " * " + i + " = " + (number * i))
//         console.log(`${number} * ${i} = ${number * i}`);
//     }
// }

// function doArithmetic(aFunction){
//     let x= 2
//     aFunction(x)
//     // alert("Hi")
// }

// // multiplication(multiplication)

// const drinkWater = function (){
//     console.log("drink water");
// }

// const drinkWater2 = () => {
//     console.log("drink water 2");
// }

// doArithmetic((element) => {
//     for(let y = 0;y < 12; y++){
//         y >= element ? console.log(`${element} / ${y} = ${y / element}`) : console.log(y);;
//     }
// })


// now = new Date()
// localtime = now.toString();
// utctime = now.toGMTString

// console.log(localtime);

// function sayIt(){
//     for(let i = 0; i < 12 ;i++){
//         console.log(i * 7);
//     }
// }

// sayIt();

// let userName = "tolu"

// function changeName(name){
//     name = "bilikis"
// }

// changeName(userName)
// console.log(userName);



// function movement(person){
//     console.log(`when ${person.name} runs ${person.isWig ? "her wig falls" : "breeze blow her hair" }`);
// }

// function animation(defineCharacterMovement){
//     let character = {
//         name : "adeola",
//         isWig: true,
//         gender: "female"
        
//     }
//     defineCharacterMovement(character)
// }

// animation(movement)

function createCharacter(){
    let character = {
        name : "adeola",
        isWig: true,
        gender: "female",
        getName: function() {
            return this.name
        }
    }
    return character
}

// let person = createCharacter()

// let personName = person.getName()

// console.log(personName);

let person = createCharacter()
let getPersonName = person.getName
let humanName = getPersonName()
console.log(humanName);



// let personal = {
//     userName: "jerry",
//     gender: "male",
//     school: "unilag"
// }

// for (key in personal){
//     console.log(personal[key]);
// }

// console.log(Object.keys(personal));

