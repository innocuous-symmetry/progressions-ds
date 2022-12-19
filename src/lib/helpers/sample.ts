import { ChordQuality, EventData } from "./index";
import LinkedList from "../LinkedList/index";
import ListNode from "../LinkedList/ListNode";

const firstEvent: EventData = {
    root: "C",
    quality: ChordQuality.Major,
    duration: 4,
    beatStrength: "Strong"
}

const secondEvent: EventData = {
    root: "D",
    quality: ChordQuality.Minor,
    duration: 4,
    beatStrength: "Strong"
}

const thirdEvent: EventData = {
    root: "F",
    quality: ChordQuality.Major,
    duration: 4,
    beatStrength: "Strong"
}

const fourthEvent: EventData = {
    root: "F",
    quality: ChordQuality.Minor,
    duration: 4,
    beatStrength: "Strong"
}

/***************
 ***************
 ***************
 ***************
 ***************
 ***************
 ***************
 ***************
 ***************
***************/

const eventlist = new LinkedList<EventData>();
eventlist.addManyToTail(firstEvent, secondEvent, thirdEvent, fourthEvent);

// eventlist.removeHead();
// eventlist.removeTail();

// eventlist.removeAtPosition(3);
// eventlist.removeByData(fourthEvent);

// const thirdnode = eventlist.findByData(thirdEvent) as ListNode<EventData>;
// console.log(eventlist.findByNode(thirdnode));

console.log(eventlist);

export default { eventlist }
