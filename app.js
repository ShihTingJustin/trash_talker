const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const trashTalker = require('./trash_talker')
const helpers = require('handlebars-helpers')()
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const role = options.role
  console.log(options)
  const trashTalk = trashTalker(options)
  //把資料從伺服器帶到樣板引擎
  res.render('index', { trashTalk, role })
})

app.listen(port, () => {
  console.log(`The Express server is running on http://localhost:${port}`)
})