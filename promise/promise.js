console.log("hy");

var p1 = new Promise(function (resolve, reject) {
    var m = 0;
    for (var i = 0; i < 120; i++) {
        setTimeout(function (i) {
            console.log("p1:" + i);
            if(i===119){
                resolve();
            }
        }, i, i);
    }

});

var p2 = new Promise(function (resolve, reject){
    console.log("In program");
    var res = 0;

    for (var i = 0; i < 100; i++) {
        res = i * i;
        setTimeout(function (i) {
            console.log("p2:" + i);
            if(i===99){
                resolve();
            }
        }, i, i);
    }

    
    // var now = new Date();
    // // if (now.getMilliseconds() % 2 === 0) {
    // //     // reject("Uzas");}



    console.log("still in progres:");


});
console.log("Hello");
p1.then(function (resol) {

    console.log("stil in progles 2" + resol);
}).catch(function (reason) {
    console.log(reason);
});
console.log("keep working");

console.log("Hello");
p2.then(function (resol) {

    console.log("stil in progles 2" + resol);
}).catch(function (reason) {
    console.log(reason);
});

var allPromises= Promise.race([p1, p2]);
allPromises.then(function(){

    console.log("All promises done");
});
console.log("not done:"); 

//promise - race, all