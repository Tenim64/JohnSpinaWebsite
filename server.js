const express = require('express')
const app = express()
const favicon = require('serve-favicon')
const localPath = require('path')

app.set('view-engine', 'ejs')
app.set('views', localPath.join(__dirname, 'views/pages'))
app.use(express.static(__dirname + '/public'))
app.use(favicon(localPath.join(__dirname,'/public/images/favicon.ico')))

app.get(['/', '/home'], (req, res) => {
    res.render('home/index.ejs')
})

app.listen(80)