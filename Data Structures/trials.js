showConnections(){
    const allNodes = Object.keys(this.adjacentList);
    for(let node of allNodes){
        let nodeConnections = this.adjacentList[node];
        let connections = "";
        let vertex;
        for(vertex of nodeConnections){
            connections += vertex + " ";
        }
        console.log(node + "-->" + connections);
    }
}