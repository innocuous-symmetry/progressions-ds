import ListNode from "./ListNode";

export default class LinkedList<T> {
    private head: ListNode<T> | null
    private tail: ListNode<T> | null

    constructor(head?: ListNode<T>, tail?: ListNode<T>) {
        this.head = head || null;
        this.tail = tail || null;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        return this.tail;
    }

    exchange(prev: ListNode<T>, next: ListNode<T>) {
        prev.setNextNode(next);
        next.setPreviousNode(prev);
    }

    addToHead(data: T) {
        // create a new node for the data to insert, and store the current head
        const newHead = new ListNode(data);
        const current = this.head;

        // swap the positions of these elements if current head is defined
        if (current) this.exchange(current, newHead);

        // assign the new head in the class instance
        this.head = newHead;

        // if there is no tail after this change, additionally assign the new head as the new tail
        if (!this.tail) this.tail = newHead;
    }

    addManyToHead(...items: T[]) {
        for (let each of items) {
            this.addToHead(each);
        }
    }

    // inverse of the logic above
    addToTail(data: T) {
        const newTail = new ListNode(data);
        const current = this.tail;

        if (current) this.exchange(current, newTail);

        this.tail = newTail;
        if (!this.head) this.head = newTail;
    }

    removeHead(): T | null {
        const toRemove = this.head;

        // if there's nothing to remove, don't remove it
        if (!toRemove) return null;

        const newHead = toRemove.nextNode;
        this.head = newHead;

        if (toRemove == this.tail) {
            this.removeTail();
        }

        return toRemove.data as T;
    }

    removeTail(): T | null {
        const toRemove = this.tail;
        if (!toRemove) return null;

        const newTail = toRemove.nextNode;
        this.tail = newTail;

        if (toRemove == this.head) {
            this.removeHead();
        }

        return toRemove.data as T;
    }

    findByNode(node: ListNode<T>): ListNode<T> | null {
        let current = this.head;
        while (current !== null) {
            if (current === node) {
                return current;
            }

            current = current.nextNode;
        }

        return null;
    }

    findByData(data: T): ListNode<T> | null {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return current;
            }

            current = current.nextNode;
        }

        return null;
    }

    removeByData(data: T): ListNode<T> | null {
        let targetNode: ListNode<T> | null = null;
        let current = this.head;
        while (current !== null) {
            if (current.data == data) {
                targetNode = current;
                break;
            }

            current = current.nextNode;
        }

        if (!targetNode) return null;

        // by asserting above that target node is neither undefined, nor the head,
        // nor the tail of the list, we can assert that next and prev will both be
        // defined, as targetNode must be somewhere in the middle of the list
        if (targetNode === this.head) {
            this.removeHead();
        } else if (targetNode === this.tail) {
            this.removeTail();
        } else {
            // the method below effectively cuts the target node out of the list by assigning
            // is surrounding members to fill in the space previously taken up by target node
            const next = targetNode.nextNode;
            const prev = targetNode.prevNode;
            this.exchange(prev!, next!);
        }

        return targetNode;
    }

    removeAtPosition(pos: number): ListNode<T> | null {
        let targetNode: ListNode<T> | null = null;
        let current = this.head;
        let i = 0;

        // traverse the list until you reach the end or the desired position,
        // whichever happens first
        while (current !== null) {
            if (i == pos) {
                targetNode = current;
                break;
            }
            current = current.nextNode;
            i++;
        }

        // if you arrive at the end of the list without reaching the desired position,
        // the removal operation was unsuccessful (no element at this position)
        if (!targetNode && (i < pos)) {
            console.log("No element found at position " + pos);
            return null;
        }

        if (targetNode === this.head) {
            this.removeHead();
        } else if (targetNode === this.tail) {
            this.removeTail();
        } else {
            let next = targetNode?.nextNode;
            let prev = targetNode?.prevNode;
            this.exchange(prev!, next!);
        }

        return targetNode;
    }
}