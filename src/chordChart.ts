import Edge from "./lib/Graph/Edge";
import GraphNode from "./lib/Graph/GraphNode";
import Graph from "./lib/Graph/index";
import { ChordQuality, EventData } from "./lib/helpers/index";

// factory to create data to populate graph
function createChord(root: string, quality: ChordQuality): EventData {
    return {
        root: root,
        quality: quality
    }
}

// primary usable triads in C major
const cmaj = createChord("C", ChordQuality.Major);
const dmin = createChord("D", ChordQuality.Minor);
const emin = createChord("E", ChordQuality.Minor);
const fmaj = createChord("F", ChordQuality.Major);
const gmaj = createChord("G", ChordQuality.Major);
const amin = createChord("A", ChordQuality.Minor);

// borrowed triads
const dmaj = createChord("D", ChordQuality.Major);
const emaj = createChord("E", ChordQuality.Major);
const ebmaj = createChord("Eb", ChordQuality.Major);
const fmin = createChord("F", ChordQuality.Minor);
const gmin = createChord("G", ChordQuality.Minor);
const abmaj = createChord("Ab", ChordQuality.Major);
const bbmaj = createChord("Bb", ChordQuality.Major);
const bmaj = createChord("B", ChordQuality.Major);

// graph to host music theory logic
class ChordNode<EventData> extends GraphNode<EventData> {
    constructor(data: EventData, id = -1, edges?: Edge<EventData>[]) {
        super(data, id, edges);
    }

    override print() {
        if (this.edges.length) {
            for (let edge of this.edges) {
                console.log(this);
                console.log(`${this.data.root, ChordQuality[this.data.quality]} --> ${edge.end.data.root, ChordQuality[edge.end.data.quality]}`);
            }
        }
        
        console.log(this.data.root, ChordQuality[this.data.quality]);
    }
}

const chordChart = new Graph<EventData>(true, true);

chordChart.addPoints(
    new ChordNode<EventData>(cmaj),
    new ChordNode<EventData>(dmin),
    new ChordNode<EventData>(emin),
    new ChordNode<EventData>(fmaj),
    new ChordNode<EventData>(gmaj),
    new ChordNode<EventData>(amin),
    new ChordNode<EventData>(dmaj),
    new ChordNode<EventData>(emaj),
    new ChordNode<EventData>(ebmaj),
    new ChordNode<EventData>(fmin),
    new ChordNode<EventData>(gmin),
    new ChordNode<EventData>(abmaj),
    new ChordNode<EventData>(bbmaj),
    new ChordNode<EventData>(bmaj)
);

const cmajnode = chordChart.getPointByData(cmaj) as ChordNode<EventData>;
const dminnode = chordChart.getPointByData(dmin) as ChordNode<EventData>;

chordChart.addEdge(cmajnode, dminnode);

export default chordChart;