import Node from "../helpers/Node";
import Edge from "./Edge";

export default class GraphNode<T> extends Node<T> {
    edges: Edge<T>[]

    constructor(data: T, edges?: Edge<T>[]) {
        super(data);
        this.edges = edges || new Array<Edge<T>>();
    }

    addEdge(destination: GraphNode<T>, weight?: number) {
        this.edges.push(new Edge<T>(this, destination, weight));
    }

    removeEdge(destination: GraphNode<T>) {
        this.edges.filter((value: Edge<T>) => value.end !== destination)
    }

    override print() {
        if (this.edges.length) {

        } else {
            console.log(this.data);
        }
    }
}