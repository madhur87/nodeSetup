const route = require('express').Router();

route.get('/api',(req,res)=>{
res.json({msg : "hello world!"});
});

module.export = route;
