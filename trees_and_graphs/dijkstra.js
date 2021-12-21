const INF = 999999
// const graph = [

//     [0,4,2,INF,INF],  //0
//     [INF,0,3,2,3], //1 
//     [INF,1,0,4,5],   // 2
//     [INF,INF,INF,0,INF], //3 
//     [INF,INF,3,INF,0] //4
// ]
const graph = [

    [0,1,1,INF,1,INF,1],  //0
    [1,0,1,1,INF,3,INF], //1 
    [INF,2,0,4,INF,2,INF],   // 2
    [INF,2,INF,0,1,2,INF], //3 
    [1,INF,INF,3,0,INF,1], //4
    [INF,6,2,3,INF,0,1],
    [3,INF,INF,INF,1,2,0]
]
const tmpPath = {
    0 : 0,
    1 : INF,
    2 : INF,
    3 : INF,
    4 : INF
}
allocated = []
function findMin(vertex){
    min = INF
    indexOfMin = -1
    for (let i=0;i<graph.length;i++){
        if((!allocated.includes(graph[vertex][i])) && (graph[vertex][i]<min) && (graph[vertex][i]>0)){
            min = graph[vertex][i]
            indexOfMin = i
        }
    }
    return { 'index': indexOfMin, 'value': min}
}
function method(vertex){
    for(let i =0;i<graph.length;i++){
        if(graph[vertex][i]!=INF){
            if(tmpPath[i]>tmpPath[vertex]+graph[vertex][i]){
                tmpPath[i]=tmpPath[vertex]+graph[vertex][i]
            }            
        }
        
    }
    minInfo = findMin(vertex)
    if(minInfo['index']==-1){
        return 
    }
    if(minInfo['index']!=graph.length-1){ //если не дошли до последней, продолжаем
        method(minInfo['index'])
    }  
}
method(0)
console.log(tmpPath)