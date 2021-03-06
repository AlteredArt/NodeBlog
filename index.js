
const path = require('path')
const express = require('express')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')

const app = new express()

mongoose.connect('mongodb://localhosat/node-js-blog')

app.use(express.static('public'))
app.use(expressEdge.engine)

app.set('views', `${__dirname}/views`)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/post', (req, res) => {
    res.render('post')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(4000, () => {
    console.log('port 4000 for app')
})

