import Edge from "./lib/Graph/Edge";
import GraphNode from "./lib/Graph/GraphNode";
import Graph from "./lib/Graph/index";
import { ChordQuality, EventData } from "./lib/helpers/index";

// graph node variant with logic specific to handling this data type
class ChordNode<EventData> extends GraphNode<EventData> {
    constructor(data: EventData, id = -1, edges?: Edge<EventData>[]) {
        super(data, id, edges);
    }

    override print(excludeOrphans = false) {
        if (!excludeOrphans) {
            console.log(this.data['root' as keyof EventData], ChordQuality[this.data['quality' as keyof EventData] as number]);
        }

        if (this.edges.length) {
            for (let edge of this.edges) {
                console.log(`${this.data['root' as keyof EventData]} ${ChordQuality[this.data['quality' as keyof EventData] as number]} --> ${edge.end.data['root' as keyof EventData]} ${ChordQuality[edge.end.data['quality' as keyof EventData] as number]} ${edge.weight ? '(' + edge.weight + ')' : ''} `);
            }
        }
    }
}

// factory to create data to populate graph
function createChord(root: string, quality: ChordQuality): GraphNode<EventData> {
    return new ChordNode<EventData>({
        root: root,
        quality: quality
    });
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
const chordChart = new Graph<EventData>(true, true);

chordChart.addPoints(
    cmaj,
    dmin,
    emin,
    fmaj,
    gmaj,
    amin,
    dmaj,
    emaj,
    ebmaj,
    fmin,
    gmin,
    abmaj,
    bbmaj,
    bmaj
);

chordChart.addEdge(cmaj, dmin, 15);
chordChart.addEdge(cmaj, gmaj, 50);
chordChart.addEdge(fmaj, gmaj, 50);

export default chordChart;