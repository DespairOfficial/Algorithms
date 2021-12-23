
function prefix(index, word){
    let maxIndex = 0
    let indexCounter = 0
    for (let i = 0; i < index ; i++){
        indexCounter = 0
        for(let j =0 ; j <= i; j++){
            startSuffIndex = index-i+j
            if(word[j]==word[startSuffIndex]){
                indexCounter +=1
            }
            else {
                indexCounter = 0
            }
        }
        if(indexCounter>maxIndex){
            maxIndex = indexCounter
        }
    }

}
function KMP(word,text) {
    let pi = []
    // for(let i =0;i < word.length;i++){
    //     pi[i] = prefix(i,word)
    // }
    pi[0] = 0
    let j =0
    let i =1
    let z =0
    while(z!=word.length+1){ // while word's not ended
        if(word[i]==word[j]){ // if equals, moving j and i, 
            pi[i]=j+1
            i+=1
            j+=1
        }
        else {
            if(j == 0 ){ // if not equals and j is first letter, suff = 0. moving to the next
                pi[i]=0
                i+=1 
            }
            else{ // ifnot equals and j is not first, j steps back 
                j = pi[j-1]
            }
        }
        z+=1
    }
    let textLetter = 0
    let l = 0 //  index of letter in word
    let k = 0 //  index of letter in text
    console.log(`k=${k}, l=${l}`)
    console.log(text)
    console.log(toFind + '\n')
    while( l != text.length-1){
        if(text[k]==word[l]){
            k+=1
            l+=1
            if(l == word.length){
                return k
            }
        }else{ 
            if(l==0){
                k +=1 
                if(k==text.length){
                    return -1
                }
            }
            else{
                l = pi[l-1] //word's letter pos   
                let formattedToPrintWord = word
                console.log(`k=${k}, l=${l}`)
                console.log(text)
                console.log(' '.repeat( k - l) + formattedToPrintWord + '\n')
            }
                
        }
        textLetter += 1
    }
}

let toFind = 'abcabd'
let text = 'abcabeabcabcabd'

KMP(toFind,text)

toFind = 'abcabd'
text = 'abcafdfabcabd'

function BM(word,text){
    let k = 0 // beggining of the word
    let xi = 0 // x's iterator
    console.log(text)
    console.log(word+'\n')
    while(true){
        x = ''
        for(let i =0; i<= word.length; i++ ){
            if(i==word.length){
                return k
            }
            if(word[word.length-1-i]!=text[k + word.length-1-i]){
                x = text[k + word.length-1-i]
                xi = k + word.length-1-i
                break
            }

        }
        if(word.indexOf(x)==-1){
            k = xi+1
            console.log(text)
            console.log(' '.repeat(k) +word+  '\n')
        }
        else{
            k = xi - word.lastIndexOf(x) 
            console.log(text)
            console.log(' '.repeat(k) +word+  '\n')
        }
    }
    
}

// console.log(BM(toFind,text))