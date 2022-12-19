import GraphNode from "./GraphNode";

export default class Graph<T> {
    isWeighted: boolean;
    isDirected: boolean;
    points: GraphNode<T>[];

    constructor(isWeighted: boolean, isDirected: boolean, points?: GraphNode<T>[]) {
        this.isWeighted = isWeighted;
        this.isDirected = isDirected
        this.points = points || new Array<GraphNode<T>>();
    }

    createPoint(data: T) {
        const newPoint = new GraphNode<T>(data);
        this.points.push(newPoint);
        return newPoint;
    }

    addPoints(...points: GraphNode<T>[]) {
        for (let point of points) {
            this.points.push(point);
        }
    }

    removePoint(target: GraphNode<T>) {
        this.points.filter((point: GraphNode<T>) => point !== target);
    }

    removePointByData(data: T) {
        this.points.filter((point: GraphNode<T>) => point.data !== data);
    }

    addEdge(start: GraphNode<T>, end: GraphNode<T>, weight?: number) {
        if (this.isWeighted && weight) {
            start.addEdge(end, weight);
            end.addEdge(start, weight);
        } else {
            start.addEdge(end);
            end.addEdge(start);
        }
    }

    removeEdge(start: GraphNode<T>, end: GraphNode<T>) {
        try {
            start.removeEdge(end);
            end.removeEdge(start);
        } catch(e: any) {
            throw new Error(e);
        }
    }

    print() {
        for (let each of this.points) {
            each.print();
        }
    }
}