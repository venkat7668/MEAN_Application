/**
 * Created by venkat on 6/6/2015.
 */
var restify = require('restify'),
    DB = require('./config/db'),
    server = restify.createServer(),
    user;

user = new DB.User({name:"Venkat", pwd:"123456"});
user.save(function(err){
    if(!err){
        console.log(user);
    }
});

//routes
server.get('/',function(req,res){
    DB.User.find(function(err,doc){
        res.send(doc);
    });
});


server.listen(9000);
