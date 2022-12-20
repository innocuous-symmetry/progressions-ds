import GraphNode from "./GraphNode";

export default class Graph<T> {
    private isWeighted: boolean;
    private isDirected: boolean;
    private points: GraphNode<T>[];
    private count = 0;

    constructor(isWeighted: boolean, isDirected: boolean, points?: GraphNode<T>[]) {
        this.isWeighted = isWeighted;
        this.isDirected = isDirected
        this.points = points || new Array<GraphNode<T>>();
    }

    createPoint(data: T) {
        const newPoint = new GraphNode<T>(data, this.count);
        this.points.push(newPoint);
        this.count++;
        return newPoint;
    }

    addPoints(...points: T[]) {
        for (let point of points) {
            this.createPoint(point);
        }
    }

    getPointByData(data: T): GraphNode<T> | null {
        for (let point of this.points) {
            if (point.data === data) {
                return point;
            }
        }

        return null;
    }

    removePoint(target: GraphNode<T>) {
        this.points.filter((point: GraphNode<T>) => point !== target);
    }

    removePointByData(data: T) {
        this.points.filter((point: GraphNode<T>) => point.data !== data);
    }

    addEdge(start: GraphNode<T>, end: GraphNode<T>, weight?: number) {
        if (this.isDirected) {
            this.isWeighted ? start.addEdge(end, weight) : start.addEdge(end);
        } else {
            if (this.isWeighted) {
                start.addEdge(end, weight);
                end.addEdge(start, weight);
            } else {
                start.addEdge(end);
                end.addEdge(start);
            }
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