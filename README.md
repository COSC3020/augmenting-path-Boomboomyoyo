[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12989671&assignment_repo_type=AssignmentRepo)
# Augmenting Paths

When we talked about the Ford-Fulkerson algorithm to find the maximum flow
through a graph, I mentioned the "find an augmenting path" function. You're
going to implement this function. Start with the template I provided in
`code.js`. Use an adjacency list data structure to represent the graph and node
names, not indices, to indicate start and end node. The function returns a list
of node names, starting with the start node and finishing with the end node. If
there is no path, you must return an empty list.

Test your new function; I've provided some basic testing code in `code.test.js`.

To illustrate, here's an example graph:
![example graph](graph.png)

Here's the call for this graph:

```javascript
var graph = {'foo': {'boo': 7},
             'boo': {'foo': 3, 'bar': 2},
             'bar': {'boo': 4}};
augmentingPath(graph, 'foo', 'bar');
```

The call would return `['foo', 'boo', 'bar']`.

Feel free to use other data structures, but you'll have to change the test code
accordingly.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

# Response
Relatively simple little project, though the way you set up the graphs was not something I've seen before. I reused my search in graphs code and tweaked it to be compatible with your test code.
## Runtime Analysis
The asymptotic complexity of this implementation is the same as my Search in Graphs implementation, $\Theta\left(|V|+|E|\right)$. This is because my implementation will in the worst case iterate over each node and edge once.

## References
I referenced Cade Maynard's implementation to figure out how to use the way you set up the graphs. The important parts I took away were how to use Object.keys() and Object.values() to transform the input graph to something my search in graphs code could use.
https://github.com/COSC3020/augmenting-path-CadeMaynard/blob/main/code.js
