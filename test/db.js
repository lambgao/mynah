var mongo = require('mongoskin');
var db = mongo.db('127.0.0.1:27017/test?auto_reconnect=true&poolSize=5');
	db.bind('games');
	db.games.find().toArray(function(err, games){
	console.log(games);
	db.close();
});

