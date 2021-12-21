array = [4,7,1,9,0,5,2,8,6,3]

for(let i=0; i<array.length;i++){
    for(let j=0;j<i;j++){
        if(array[i]<array[j]){
            array.splice(j,0,array.splice(i,1)[0])
        }
    }
}
console.log(array)

