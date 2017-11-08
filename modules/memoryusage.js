
var ob = require("./observer");
var sub=require("./subject");


sub.subscribe(ob.notify);

sub.run();







