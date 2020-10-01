var express = require('express');
var app = express();

app.get('/',(req,res)=>{
  res.json({msg : "Hello World"});
};

app.listin(3000,()=>{
 console.log("server started");
};
