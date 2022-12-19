import Event from "../Event";
import Graph from "../Graph/Graph";
import GraphNode from "../Graph/GraphNode";
import { ChordQuality, EventData } from "./index";

const initialData: EventData = {
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

const sampleEvent = new Event(initialData);
const nextEvent = new Event(secondEvent);
const third = new Event(initialData);
const fourth = new Event(secondEvent);

third.setNextNode(fourth);
nextEvent.setNextNode(third);
sampleEvent.setNextNode(nextEvent);

console.log(sampleEvent.getEventData());
console.log(sampleEvent.nextNode);

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


const sampleGraph = new Graph<EventData>(false, false);

const pointA = new GraphNode(initialData);
const pointB = new GraphNode(secondEvent);

sampleGraph.addPoints(pointA, pointB);

sampleGraph.print();

export default {sampleEvent, sampleGraph};