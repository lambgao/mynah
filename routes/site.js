var db = require('../config').db;

exports.index = function(req,res){
	res.render('index', { title: "中文" });
};

exports.testdb = function(req,res,next){
	db.games.find().toArray(function(err, games){
		console.log(games);
		res.render('index', {
			locals:{
				"pagetitle": "中文",
				"games": games
			}
		});
	});
};