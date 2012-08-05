var site = require('./routes/site');

exports = module.exports = function(app) {
	// home page
	app.all('/', site.index);
	app.all('/index', site.index);
	app.all('/testdb', site.testdb);

};