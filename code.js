function augmentingPath(graph, start, end) {
    //temp = Object.values(graph)
    temp = []
    for(elem in graph)
    {
        temp[elem] = Object.keys(graph[elem])
    }
    //console.log(temp)
    return augmentedPath(temp, start, end)
}
function augmentedPath(graph, start, end, path = [], visitedNodes = []) {
    
   
    // If start is the node we were looking for, return path with node appended
    if(start == end)
    {
        path.push(start)
        return path
    }
    // Mark start as visited
    visitedNodes[start] = true
    // For each edge, recursively process unless visited
    for(let i = 0; i < graph[start].length; i++)
    {
        if(visitedNodes[graph[start][i]] != true)
        {
            path.push(start)
            augmentedPath(graph, graph[start][i], end, path, visitedNodes)
            if(path[path.length-1] == end)
            {
                //console.log(path)
                return path
            } else
            {
                if(path[0] == start && graph[start].length-1 == i)
                {
                    //console.log([])
                    return []
                }
                path.pop()
            }
        }
    }
    return []
}