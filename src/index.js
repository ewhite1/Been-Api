const api = require('express')()
const bodyParser = require('body-parser')
const PORT = 8080
const hello = "Hello Been API!\n"
const html = "<h1>Whattt? HTML Successful</h1>"

api.use(bodyParser.json())
api.use(bodyParser.urlencoded({extended:true})
)

let posts = [
	{
		likes: 6,
		views: 100,
		description: 'Look at my morning routine and I pretend I look this good says every girl on IG',
		comments: [
			"you look you look dashing",
			"marry Me pls!",
			"nice post please check us out for marketing"
		]
	},
	{
		likes: 5,
		views: 1200,
		description: 'Look at my evening routine',
		comments: [
			"You look you look great girl. Thanks for being a great friend",
			"Marry Me pls!",
			"nice post please check us out for marketing"
		]
	}
]

api.get('/posts', (request, response) => {
	response.send({
		posts: posts
	})
})

api.post('/post', (req, res) => {
	posts.push(req.body.post)
	res.send(posts)
})



api.listen(PORT, () => {
	console.log(`Running Been API attempt 2 on port: ${PORT}`)
})



