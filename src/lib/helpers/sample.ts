import { ChordQuality, EventData } from "./index";
import LinkedList from "../LinkedList/index";
import ListNode from "../LinkedList/ListNode";
import Graph from "../Graph/index";
import GraphNode from "../Graph/GraphNode";

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
const thirdnode = eventlist.findByData(thirdEvent) as ListNode<EventData>;

// console.log(eventlist.findByNode(thirdnode));
// eventlist.removeHead();
// eventlist.removeTail();
// eventlist.removeAtPosition(3);
// eventlist.removeByData(fourthEvent);

const eventgraph = new Graph<EventData>(false, true);

eventgraph.addPoints(firstEvent, secondEvent, thirdEvent, fourthEvent);

const secondstop = eventgraph.getPointByData(secondEvent) as GraphNode<EventData>;
const thirdstop = eventgraph.getPointByData(thirdEvent) as GraphNode<EventData>;
const fourthstop = eventgraph.getPointByData(fourthEvent) as GraphNode<EventData>;
eventgraph.addEdge(secondstop, thirdstop);
eventgraph.addEdge(thirdstop, secondstop);
eventgraph.addEdge(secondstop, fourthstop);

export default { eventlist, eventgraph }
