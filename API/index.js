const express = require('express');
const app = express();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser = require('body-parser');


var url = 'mongodb://localhost:27017';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
  
app.listen('8010',()=>{
    console.log("port:8010");
});

app.get('/getJourneys',function(req,res,next){
    MongoClient.connect('mongodb://localhost', function (err, client) {
        if (err) throw err;
      
        var db = client.db('juggernautdb');
      
        db.collection('prueba').findOne({}, function (findErr, result) {
          if (findErr) throw findErr;
          console.log(result.msg);
          client.close();
          res.json({"msg":result.msg});
        });
      }); 
});

app.post('/postroutemap',function(req,res){
    var item = {
        direction : req.body.direction, 
        time : req.body.time
    }

    MongoClient.connect('mongodb://localhost', function (err, client) {
        if (err) throw err;
      
        var db = client.db('juggernautdb');
      
        db.collection('routemap').insertOne(item, function (findErr, result) {
          if (findErr) throw findErr;
          client.close();
          res.json({"msg":"exito"});
        });
      }); 
});

app.post('/postroutemap',function(req,res){
  var item = {
      direction : req.body.direction, 
      time : req.body.time
  }

  MongoClient.connect('mongodb://localhost', function (err, client) {
      if (err) throw err;
    
      var db = client.db('juggernautdb');
    
      db.collection('routemap').insertOne(item, function (findErr, result) {
        if (findErr) throw findErr;
        client.close();
        res.json({"msg":"exito"});
      });
    }); 
 
});
        