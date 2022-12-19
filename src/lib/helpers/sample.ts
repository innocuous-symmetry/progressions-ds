import { ChordQuality, EventData } from "./index";
import LinkedList from "../LinkedList/index";

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
eventlist.addManyToHead(firstEvent, secondEvent, thirdEvent, fourthEvent);

console.log(eventlist);

export default { eventlist }
