graph = {

    'A': ['B','D'], 
    'B':[], 
    'C':['B'],
    'D': ['C','G'],
    'E': ['D','H'],
    'F':['E'],
    'G':['F'],
    'H': []
 }
 
visited = []
stack = []
function dfs(vertex)
{
    //stack.push(vertex)
    if(visited.includes(vertex)){
        return
    }
    visited.push(vertex)
    for(j in graph[vertex])
    {
        
        if(!visited.includes(graph[vertex][j])){
            dfs(graph[vertex][j])
        }
        else{
            //stack.push(vertex)
        }
       
    }
}
dfs('A')
console.log(visited)
// countBoard ={}
// for (let i = 0; i<stack.length;i++){
//     if(countBoard[stack[i]]==undefined){
//         countBoard[stack[i]] = 1
//     }
//     else countBoard[stack[i]] += 1
    
// }
// toFind = []
// found = 0
// for (key in countBoard){
//     if(countBoard[key]>1){
//         toFind.push(key)
//     }
// }

// console.log(stack)

// loops= []
// for(let j = 0; j<toFind.length;j++){   
//     firstIndex = -1
//     secondIndex = -1
//     for(let i=0; i < stack.length;i++){
//         if(stack[i] == toFind[j]){
//             if(firstIndex==-1)
//             {
//                 firstIndex = i
//             }
//             else{
//                 secondIndex = i
//             }  
//         }
//     }

//     //console.log(firstIndex,secondIndex)
//     loop = []
//     for(let i = firstIndex; i < secondIndex+1; i++){
//         loop.push(stack[i])
//     }
//     loops.push(loop)
// }
// console.log('Loops:',loops)


queue = []

function bfs(vertex)
{
    while(queue.length!=0)
    {
        console.log(vertex, queue)
        visited.push(  queue.shift())
        for(j in graph[vertex])
        {
           if(!queue.includes(graph[vertex][j]))
           {
               if(!visited.includes(graph[vertex][j])){
                queue.push(graph[vertex][j])
               }
               else{
                   console.log('Цикл!',vertex,'->' , graph[vertex][j]  )
                   
               }
           }
           
        }
        bfs(queue[0])
    }
    
}

//queue.push('A')
//bfs('A')


