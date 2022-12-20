import Node from "../helpers/Node";
import Edge from "./Edge";

export default class GraphNode<T> extends Node<T> {
    protected edges: Edge<T>[]
    protected id: number

    constructor(data: T, id?: number, edges?: Edge<T>[]) {
        super(data);
        this.edges = edges || new Array<Edge<T>>();
        this.id = id || -1;
    }

    setID(id: number) {
        this.id = id;
    }

    addEdge(destination: GraphNode<T>, weight?: number) {
        this.edges.push(new Edge<T>(this, destination, weight));
    }

    removeEdge(destination: GraphNode<T>) {
        this.edges.filter((value: Edge<T>) => value.end !== destination)
    }

    override print(excludeOrphans = false) {
        if (this.edges.length) {
            for (let edge of this.edges) {
                console.log(`Event ${this.id} --> Event ${edge.end.id}`);
            }
        } else {
            if (!excludeOrphans) console.log(`Event ${this.id} -->`);
        }
    }
}