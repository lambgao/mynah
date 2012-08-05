/**
 * config
 */
var mongo = require('mongoskin');

exports = module.exports = {
	"name": 'Mynah',
	"description": '白板',
	"version": '0.0.1',
	"port": 80,
	"db":'127.0.0.1:27017/test?auto_reconnect=true&poolSize=5'
	//"db":'dXbUmO3lYOiL:NrCQylPixH@127.0.0.1:20088/CgDkGkDG4snc?auto_reconnect=true&poolSize=5'
}

var db = exports.db;
exports.db = mongo.db(db);