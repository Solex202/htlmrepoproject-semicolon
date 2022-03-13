let numbers = 30;
for(let i = 1; i <= numbers; i ++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz");
    }
    if (1%3==0 || i%5==0) {
        if(i % 3 === 0){
            console.log("fizz");
    
        }
        if(i % 5 === 0){
            console.log("buzz");
            
        }
    }
    else if(i % 3 === 0){
        console.log("fizz");

    }
    else if(i % 5 === 0){
        console.log("buzz");
        
    }

    else {
    console.log(i);
    }
}