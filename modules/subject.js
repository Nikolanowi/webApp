var os = require("os");

var observerCollection = [];

var subscribe = function (observer) {
    observerCollection.push(observer);
};

var notifyAllObservers = function (msmory) {

    for (var i = 0; i < observerCollection.length; i++) {
        observerCollection[i](msmory);
    }
};

var run = function () {
    setInterval(function () {
        var memory = os.freemem() / 1024 / 1024;
        console.log(memory);
        if (memory < 1450) {
            notifyAllObservers(memory);
        }
    }, 1000);
};




module.exports.subscribe = subscribe;
module.exports.run = run;