var express = require('express');
var mongoose = require('mongoose');
var app = express();


mongoose.connect("localhost://apiDB/2700",{});

app.get('/',(req,res)=>{
  res.json({msg : "Hello World"});
};



app.listin(3000,()=>{
 console.log("server started");
};
