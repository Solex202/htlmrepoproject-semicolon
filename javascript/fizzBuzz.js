let numbers = 30;
function fizzBuzz(numbers){
    for(let i = 1; i <= numbers; i ++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        }
        if (i % 3 === 0 || i % 5 === 0) {
            if(i % 3 === 0){
                console.log("fizz");
        
            }
            if(i % 5 === 0){
                console.log("buzz");
                
            }
        }
    
        else {
        console.log(i);
        }
    }
}

fizzBuzz(numbers)
