array = [0,500,345,92,1,8952,75,28,6,91]

for(let i=0; i<array.length;i++){
    for(let j=0;j<i;j++){
        if(array[i]<array[j]){
            array.splice(j,0,array.splice(i,1)[0])
        }
    }
}
console.log(array)
function binarySearch(toFind) {
    index = -1
    L = 0
    R = array.length-1
    while(index==-1){
        A = Math.floor((L + R) / 2)  
        if(toFind==array[A]){
            return A
        }
        if(L == R){
            return -1
        }
        
        if(toFind > array[A]){
            L = A + 1
            continue
        }
        if(toFind < array[A]){
            R = A
            continue
        }
    }    
} 
result = binarySearch(345)
console.log(`array[${result}]= ${array[result]}`)