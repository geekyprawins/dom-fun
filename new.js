var events = require("events");
var util = require("util");

var myEmitter = new events.EventEmitter();
myEmitter.on("speak", function (mssg) {
  console.log("Soemone said: " + mssg);
});
myEmitter.emit("speak", "Hello Peter!");


