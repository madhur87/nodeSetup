var express = require('express');
var app = express();

app.get('/',(req,res)=>{
  res.json({msg : "Hello World"});
};

app.get('/new',(req,res)=>{
  res.status(200).json({msg : "Hello World With Status"});
};

app.listin(3000,()=>{
 console.log("server started");
};
