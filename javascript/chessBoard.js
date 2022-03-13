for (let i = 1; i <= 8; i++){
    for (let j = 1; j <= 8; j++) {
        if(i%2 === 1){
            process.stdout.write(" ")
        }
            if(j%2 === 0){
                process.stdout.write("#")
            }
            else{
                process.stdout.write(" ")
            }
            
        
        
    }
    console.log();
}