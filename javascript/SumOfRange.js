let anArray = [];

function range(start,end){
    for(let i = start;i <= end; i++){
        anArray.push(i)
    }
    return anArray
}

// range(1,10)
// console.log(anArray);

// let array =[1,2,3,4,5,6,7,8,9]
let count = 0;
function sum(array){
    for(let i = 0;i < array.length; i++){
        count = count + i;
    }

    return count
    // console.log(count);
}

// sum(anArray)
// console.log(count);

console.log(sum(range(1,10)));