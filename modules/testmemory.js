
var subject = () => {
    var observerCollection = [];

    var subscribe = function (observer) {
        observerCollection.push(observer);

        var notifyAllObservers = function (observer) {
            for (var i = 0; i < observers.length; i++) {
                observerCollection.notify();

            }
        };
    };
    var run = function () {

        var memory = os.freemem() / 1024 / 1024;
        console.log(memory);
        if (memory < 1300) {
            console.log("ALERT");
            notifyAllObservers();
        }

    };

    return {
        subscribe:subscribe,
        run:run
    };
};

var ob1 = observer("ob1");
var sub  = subject();
sub.subscribe(ob1);
sub.run();


