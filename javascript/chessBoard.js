
function chessBoard(gridChar){
    for (let i = 1; i <= 8; i++){
        if(i % 2 === 1){
            process.stdout.write(" ")
        }
        for (let j = 1; j <= gridChar; j++) {
            process.stdout.write("#  ")
        }
        console.log();
    }
}

chessBoard(4)