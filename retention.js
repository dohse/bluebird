var Promise = require('./js/debug/promise')();
var heapdump = require('heapdump');

function Marker() {}

function getCallback() {
  var marker = new Marker();
  return function() {
    console.log(marker);

    setTimeout(snapshot, 1000);
  };
}

function snapshot() {
  heapdump.writeSnapshot();
}

Promise.resolve().then(getCallback());
