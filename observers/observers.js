var observer = function (name) {
    var name = name;

    var notify = function () {
        console.log( name + 'Desilo se');
    }
    
    return {
        notify: notify
    }
}

var subject = function () {
    var observerCollection = [];

    var registerObserver = function (observer) {
        var observer = observer;
        observerCollection.push(observer);
    }

    var unregisterObserver = function (observer) {
        var observer = observer;
        for (var i = 0; i < observerCollection.length; i++) {
            if (observerCollection[i] === observer) {
                observerCollection.splice(i,1);
            }
            
        }
    }

    var notifyObservers = function () {
        for (var i = 0; i < observerCollection.length; i++) {
            var observer = observerCollection[i];
            observer.notify();
            
        }
    }

    var run = function () {
        for (var i = 0; i < 100; i++) {
            if (i % 11 === 0) {
                notifyObservers();
            }
            
        }
    }

    return {
        registerObserver: registerObserver,
        unregisterObserver: unregisterObserver,
        run: run
        
        
    }
}



var ob1 = observer('ob1:');
var ob2 = observer('ob2:');

var sub = subject();

sub.registerObserver(ob1);
sub.registerObserver(ob2);
sub.run();


