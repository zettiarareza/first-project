require('newrelic');
const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)

app.get('/', (req, res, next) => {
    res.send('Hello World')
})

app.get('/json', (req, res, next) => {
    const data = {
        greeting:'hello, good morning'
    }
    res.json({
        confirmation: 'success',
        data: data
    })
})
app.get('/home', (req, res, next)=> {
    res.render('home', null)
})


app.listen(3000) // 3000, 5000, 8000, 8080
