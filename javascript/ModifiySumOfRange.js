let anArray = [];

function range(start,end,step){
    if(start > end){
    for(let i = start ; i >= end ; i += step){
            anArray.push(i);
    }
}   
else{
    for(let i = start; i <= end; i += step){
        anArray.push(i)
    }
}
}

range(1,10,2)
console.log(anArray);