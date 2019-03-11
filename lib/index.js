'use strict';

var api = require('express')();
var bodyParser = require('body-parser');
var PORT = 8080;
var hello = "Hello Been API!\n";

api.get('/first-get', function (request, response) {
	response.send(hello);
});

api.listen(PORT, function () {
	console.log('Running Been API attempt 2 on port: ' + PORT);
});