const INF = 999999
graph = [

    [0,1,2,INF,4],  //0
    [1,0,INF,3,INF], //1 
    [2,INF,0,1,3],   // 2
    [INF,3,1,0,INF], //3 
    [INF,INF,3,INF,0] //4
]
connected = [2,3]
unconnected = [0,1,4]

function findIndexOfMin(vertex){
    
    min = INF
    indexOfMin = -1
    for(let i=0; i<graph.length;i++){
        if((graph[vertex][i]<min) && (graph[vertex][i]>0) && unconnected.includes(i)){
            min = graph[vertex][i]
            indexOfMin = i
        }
        
    }

    return indexOfMin
}

while(unconnected.length>0){
    numOfVertex = connected[connected.length-1]
    indexOfMin = findIndexOfMin(numOfVertex)
    connected.push(indexOfMin)
    unconnected.splice(unconnected.indexOf(indexOfMin),1)
}
console.log(connected)

