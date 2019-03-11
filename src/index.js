const api = require('express')()
const bodyParser = require('body-parser')
const PORT = 8080
var hello = "Hello Been API!\n"

api.get('/first-get', (request, response) => {
	response.send(hello)
})



api.listen(PORT, () => {
	console.log(`Running Been API attempt 2 on port: ${PORT}`)
})



