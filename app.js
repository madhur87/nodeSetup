var express = require('express');
var mongoose = require('mongoose');
var app = express();


mongoose.connect("localhost://apiDB/2700",{});

app.listin(3000,()=>{
 console.log("server started");
};
           
app.listen(3000,()=>{
  console.log("server is started");
}
