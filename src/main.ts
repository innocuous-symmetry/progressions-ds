import data from "./lib/helpers/sample";

const { sampleEvent, sampleGraph } = data;
const content = JSON.stringify(sampleEvent.getEventData());
console.log(sampleGraph.print());

export default content;

// const parser = new DOMParser();
// const document = parser.parseFromString(content, 'text/html');

// // const target = document.getElementById("where-thing-go") as HTMLElement;

// // target.appendChild(document);