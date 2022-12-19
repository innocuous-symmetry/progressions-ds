import GraphNode from "./GraphNode";

export default class Edge<T> {
    start: GraphNode<T>
    end: GraphNode<T>
    weight: number
    
    constructor(start: GraphNode<T>, end: GraphNode<T>, weight?: number) {
        this.start = start;
        this.end = end;
        this.weight = weight || 0;
    }
}