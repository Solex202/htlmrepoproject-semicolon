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

// function createCharacter(){
//     let character = {
//         name : "adeola",
//         isWig: true,
//         gender: "female",
//         getName: function() {
//             return this.name
//         }
//     }
//     return character
// }

// let person = createCharacter()

// let personName = person.getName()

// console.log(personName);

// let person = createCharacter()
// let getPersonName = person.getName
// let humanName = getPersonName()
// console.log(humanName);



// let personal = {
//     userName: "jerry",
//     gender: "male",
//     school: "unilag"
// }

// for (key in personal){
//     console.log(personal[key]);
// }

// console.log(Object.keys(personal));

// function callMe(phoneNumber, countryDail){
//     if(phoneNumber !== ""){
//         countryDail(phoneNumber)
//     }else{
//         console.log("enter a valid phone number");
//     }
// }
// const dail = (phoneNumber) => console.log(`calling ${phoneNumber}`);
// callMe("09034653698",dail)

// let anArray = [1,2,3,4,5,6,7,8] ;function getEvennumber(anArray){for(let i = 0; i < anArray.length; i++){ if(anArray[i] % 2 === 0){process.stdout.write(anArray[i] + " ");}}}getEvennumber(anArray);

// (function oneLine(anArray) {for (let i = 0; i < anArray.length;i++) {anArray[i] % 2 === 0 && process.stdout.write(anArray[i] + " ")}})([1,2,3,4,5,6,7,8])

// [1,2,3,4,5,6,7,8].forEach(element => { element % 2 === 0 ? console.log(element) : " ";});

// let psuedo = {
//     anArray : [1,2,3,4,5,6,7],
//     pseudoForEach : function(iterator){
//         for (let i = 0; i < this.anArray.length; i++){
//             iterator(this.anArray[i]);
//         }
//     }
// };

// psuedo.pseudoForEach(value => value % 2 === 0 && process.stdout.write(value + " "));

// function factorial(x){
//     if (x === 0){
//         return 1;
//     }else{
//         return x * factorial(x-1);
//     }
// }

// first iteration
// 3 * factorial (3-1)
// second iteration
// 3 * 2 * factorial(2-1)
// third iteration
// 3 *2*1 factorial(1-1)

// const num = 1;

// if(num > 0){

// let result = factorial(num);
// console.log(`The factorial of ${num} is ${result}`);

// }


    // let cohort = {
    //     name : "tech_stuff",
    //     number : 9,
    //     total : 31,
    //     isNormal : true,
    // }

    // let newCohort = cohort;
    // newCohort.name = "interesting_stuff"

    // console.log(newCohort.name);
    // console.log(cohort.name);

    // let cohortNew = {...cohort} //spread

    // cohortNew .name = "cool_stuff"
    // console.log(newCohort.name);
    // console.log(cohort.name);
    // console.log(cohortNew.name);


    // function doSomething(...params){ //rest
    //     console.log(params);
    // }

    // doSomething("ujay","ehi","increase","ajine")


// function doSomething(...stuff){
//     return function(){
//         stuff.forEach((stuff) => console.log(`hi ${stuff}`))
//     }
// }

// doSomething("ujay","ehi","increase","ajine")()

// let anArray = [1,2,3,4,5,6]
// let newArray = [...anArray]
// console.log(newArray);

// let anotherArray = newArray.keys()
// console.log((keys) => console.log(key));


let number = 7;

for(let i = 1; i <= number; i++){
    for(let j = 1; j <= i; j++){
    process.stdout.write("#");
    }
    console.log();
}

let pseudoDocument = {
    events : {},
    addEventListener : function(event,aFunction){
        if(event === 'DOMContentLoaded'){
            aFunction(this.events)
        }
    }
}

pseudoDocument.addEventListener('DOMContentLoaded', function(event) {console.log(event);})