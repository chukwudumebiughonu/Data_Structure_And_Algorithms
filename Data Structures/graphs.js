// Graphs: this a set of values that are related in a 
// pairwise fashion. They are one of the most used data
// structure in computer science when it comes to modelling 
// in real life
// In graph the node are connect to the edges
// They are used to model real world relationships
// Characteristics for describing graphs 
// The two types are the following
// The directed graphs - this a unidirection kind of graph 
// Example of directed graph is twitter
// The undirected graphs - this for of graph has more than
// one direction. Example of undirected graph is facebook

// Graph can also be decribed as the following 
// 1. The Unweighted graphs-This form of graph has no
// information on the edges.Example is in calculating the
// fastest way to a particular route which is done by google
// 2. The Weighted graphs- This form of graphs has 
// information on the edges

// Graphs can also be described as 
// Cyclic graphs 
// Acyclic graphs 
// ------------------------------------------------------------------
// Building graphs: There are three ways of doing so
// -----------------------------------------------------
// Graphs are built ontop of other data structure
// The Edge List-
// const graph = [[0, 2], [2, 3], [2, 1], [1,3]]; this 
// show the relation and connection  between two pairs of node



// Adjacent List 
// the index is the node and the value is the node's neighbor,
// It can be created with arrays objects and linkedlist
// const graph = [[2], [2, 3], [0,1,3], [1,2]]
// In the above the index 0 is connect to its neighbor 2
// Index 1 is connected to its neighbors 2 and 3
// Index 2 is connected to its neighbors 0, 1, 3 
// Index 3 is connected to its neighbors 1 and 2


// The last method is the;
// Adjacent Matrix:
const graph = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0]
]
// 0 represents no connection;
// 1 represents a connection;

// -----------------------------------------------------
// Creating a graph from Adjacent List 
// -----------------------------------------------------

// class Graph{
//     constructor(){
//         this.numberOfNodes = 0;
//         this.adjacentList = {};
//     }
//     addVertex(node){
//         this.adjacentList[node] =  []; 
//         this.numberOfNodes++;
//     }
//     addEdge(node1, node2){
//         //undirected graph
//         this.adjacentList[node1].push(node2);
//         this.adjacentList[node2].push(node1)
//     }
//     showConnections(){
//         const allNodes = Object.keys(this.adjacentList);
//         for(let node of allNodes){
//             let nodeConnections = this.adjacentList[node];
//             let connections = "";
//             let vertex;
//             for(vertex of nodeConnections){
//                 connections += vertex + " ";
//             }
//             console.log(node + "-->" + connections);
//         }
//     }
// } 

// const myGraph = new Graph();
// myGraph.addVertex('0');
// myGraph.addVertex('1');
// myGraph.addVertex('2');
// myGraph.addVertex('3');
// myGraph.addVertex('4');
// myGraph.addVertex('5');
// myGraph.addVertex('6');
// myGraph.addEdge('3', '1');
// myGraph.addEdge('3', '4');
// myGraph.addEdge('4', '2');
// myGraph.addEdge('4', '5');
// myGraph.addEdge('1', '2');
// myGraph.addEdge('1', '0');
// myGraph.addEdge('0', '2');
// myGraph.addEdge('6', '5');

// myGraph.showConnections();

// -------------------------------------------------------------------
// Creating graph
// -------------------------------------------------------------------

// class Graph{
//     constructor(){
//         this.numberOfNodes = 0;
//         this.adjacentList = {};
//     }

//     // creating the vertex
//     addVertex(node){
//         this.adjacentList[node] = [];
//         this.numberOfNodes++;
//     }

//     // creating the edges
//     addEgde(node1, node2){
//         this.adjacentList[node1].push(node2);
//         this.adjacentList[node2].push(node1);
//     }

//     // creating a way to show the connections in the graph
//     showConnections(node){
//         const allNodes = Object.keys(this.adjacentList);
//         for(let node of allNodes){
//             let nodeConnections = this.adjacentList[node];
//             let connections = "";
//             let vertex;
//             for(vertex of nodeConnections){
//                 connections += vertex + " ";
//             }
//             console.log(node + "-->" + connections);
//         }
//     }
// }

// const myGraph = new Graph();
// myGraph.addVertex("0");
// myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addEgde("3", "1")
// myGraph.addEgde("3", "2")
// myGraph.addEgde("4", "2")
// myGraph.addEgde("4", "5")
// myGraph.addEgde("1", "2")
// myGraph.addEgde("1", "0")
// myGraph.addEgde("0", "2")
// myGraph.addEgde("6", "5")
// myGraph.showConnections();


// ---------------------------------------------------------------------------
// Creating graph from using the adjacentList
// ---------------------------------------------------------------------------

// class Graph{
//     constructor(){
//         this.numberOfNode = 0;
//         this.adjacentList = {};
//     }

//     // creating the vertex of the graph
//     addVertex(node){
//         this.adjacentList[node] = [];
//         this.numberOfNode++;
//     }

//     // creating the edges of the graph
//     addEdges(node1, node2){
//         this.adjacentList[node1].push(node2);
//         this.adjacentList[node2].push(node1);
//     }

//     // creating a method to show the connections 
//     showConnections(node){
//         const allNodes = Object.keys(this.adjacentList);
//         for(let node of allNodes){
//             let nodeConnections = this.adjacentList[node];
//             let connections = "";
//             let vertex;
//             for(vertex of nodeConnections){
//                 connections += vertex + " ";
//             }
//             console.log(node + "-->" + connections);
//         }
//     }
// }
// const myGraph = new Graph();
// myGraph.addVertex("0");
// myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addEdges("3", "1")
// myGraph.addEdges("3", "2")
// myGraph.addEdges("4", "2")
// myGraph.addEdges("4", "5")
// myGraph.addEdges("1", "2")
// myGraph.addEdges("1", "0")
// myGraph.addEdges("0", "2")
// myGraph.addEdges("6", "5")
// myGraph.showConnections();

// The pros and cons of graph

// Pros
// They are used to show relationships

// Cons
// The can become complicated so scaling is hard

// Tools for building fast graph
// Neo4j 

