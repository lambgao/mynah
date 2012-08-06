var site = require('./routes/site');

exports = module.exports = function(app) {
	// home page
	app.all('/test', site.test);
	app.all('/testdb', site.testdb);

};