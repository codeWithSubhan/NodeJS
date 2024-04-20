const EventEmitter = require("events");
const http = require("http");

// class Sales extends EventEmitter {
//   constructor() {
//     super();
//   }
// }

// const myEmitter = new Sales();
const myEmitter = new EventEmitter();

myEmitter.on("subhan", () => {
  console.log("There was a new sale!");
});
// myEmitter.emit("subhan");

myEmitter.on("subhan", () => {
  console.log("Costumer name: subhan khan");
});
// myEmitter.emit("subhan");
myEmitter.on("subhan", (stock) => {
  console.log(`There are now ${stock} items left in stock.`);
});

// myEmitter.emit("subhan", 9);

//////////////////

const server = http.createServer();
// server is a emiiter

server.on("request", (req, res) => {
  console.log("Request received!");
  console.log(req.url);
  res.end("Request received");
});

server.on("request", (req, res) => {
  console.log("Another request 😀");
});

server.on("close", () => {
  console.log("Server closed");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Waiting for requests...");
});

// In Node.js, an emitter refers to an object that can emit named events and allow functions, known as listeners, to be attached to those
// events. When the emitter emits an event, all attached listeners are invoked asynchronously. This mechanism is provided by Node.js's EventEmitter class,
//  which is used extensively for building event-driven applications.
