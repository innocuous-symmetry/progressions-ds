/**
 * CLASS Node
 * 
 * Generic linked list implementation in TypeScript using a type generic
 * to reference the type of stored data.
 * 
**/

export default class Node<T> {
    data?: T

    constructor(data: any) {
        this.data = data;
    }

    getNode() {
        return this;
    }

    getData() {
        return this.data;
    }

    print() {
        console.log(this.data);
    }
}