str1 = 'privet pripravaaaaaaaaaaaaaa'
dict = {

}
for( let i=0;i<str1.length;i++){
    for (key in dict){
        if(key == str1[i])
        {
            dict[key] +=1
        }
    }
    if(dict[str1[i]]==undefined)
    {
        dict[str1[i]] = 1
    }

}
for (key in dict){
    dict[key] = dict[key] / str1.length
}
console.log(dict)