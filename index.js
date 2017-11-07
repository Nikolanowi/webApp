

var http = require("http");
var hostname = "127.0.0.1";
var port= 3000;
var name1={
    "name":"Nikola",
    "lastname":"Blagojevic",
    "old":{
        "year":1992,
        "mnt":"July",
        "day":17
    }
}

var server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-type","text/html");
    res.write(JSON.stringify(name1))

    res.end();

});
server.listen(port, hostname,() => {
    console.log("Server runing at http://"+ hostname + ":" + port + "/");

})


var open= require("open");
//open("http://127.0.0.1:3000/");
console.log("he");