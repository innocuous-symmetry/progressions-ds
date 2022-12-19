import Node from "../helpers/Node";

export default class ListNode<T> extends Node<T> {
    next: ListNode<T> | null
    prev: ListNode<T> | null

    constructor(data?: T, next?: ListNode<T>, prev?: ListNode<T>) {
        super(data);
        this.next = next || null;
        this.prev = prev || null;
    }

    setNextNode(node: ListNode<T>) {
        this.next = node;
    }

    get nextNode() {
        return this.next;
    }

    get prevNode() {
        return this.prev;
    }
}