var express = require('express');
var expressSession = require('express-session');

var app = express();

app.use(expressSession({
	secret: 'key',
}));

app.get('/', function(req, res) {
	var sess = req.session;
	if(sess.views) {
		sess.views++;
		res.send('views: '+sess.views);
	} else {
		sess.views = 1;
		res.send('views: '+sess.views);
	}
});

app.get('/views', function(req, res) {
	var views = req.session.views || '0';
	res.send('views: '+views);
})

app.listen(8000, function() {
	console.log('listening on 8000');
});