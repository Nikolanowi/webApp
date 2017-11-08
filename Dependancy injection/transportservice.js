var doSomeWork = function (transportService, place) {
   
    console.log(transportService.transportTo() + place);
};


var carTransportService = function () {
    var transportTo = function () {
        return "Driving to ";
    };
    return {
        transportTo: transportTo
    };
};

var planeTransportService = function () {
    var transportTo = function () {
        return "Flying  to ";
    };
    return {
        transportTo: transportTo
    };
};


doSomeWork(new carTransportService(), "CG");
doSomeWork(new carTransportService(), "Greece");