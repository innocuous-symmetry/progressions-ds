import { EventData } from "./helpers";
import ListNode from "./LinkedList/ListNode";

export default class Event extends ListNode<EventData> {
    data: EventData

    constructor(data: EventData, prev?: Event, next?: Event) {
        super(data, prev, next);
        this.data = data;
    }

    getEventData() {
        return this.data;
    }
}