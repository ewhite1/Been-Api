'use strict';

var api = require('express')();
var bodyParser = require('body-parser');
var PORT = 8080;
var hello = "Hello Been API!\n";
var html = "<h1>Whattt? HTML Successful</h1>";

api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: true }));

var posts = [{
	likes: 6,
	views: 100,
	description: 'Look at my morning routine and I pretend I look this good says every girl on IG',
	comments: ["you look you look dashing", "marry Me pls!", "nice post please check us out for marketing"]
}, {
	likes: 5,
	views: 1200,
	description: 'Look at my evening routine',
	comments: ["You look you look great girl. Thanks for being a great friend", "Marry Me pls!", "nice post please check us out for marketing"]
}];

api.get('/posts', function (request, response) {
	response.send({
		posts: posts
	});
});

api.post('/post', function (req, res) {
	posts.push(req.body.post);
});

api.listen(PORT, function () {
	console.log('Running Been API attempt 2 on port: ' + PORT);
});