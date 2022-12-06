const express = require('express')
const app = express()
const favicon = require('serve-favicon')
const localPath = require('path')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')

app.use(helmet())
app.use(cookieParser())
app.set('view-engine', 'ejs')
app.set('views', localPath.join(__dirname, 'views/pages'))
app.use(express.static(__dirname + '/public'))
app.use(favicon(localPath.join(__dirname,'/public/images/favicon.ico')))

app.all('/*', (req, res, next) => {
    let theme = req.cookies.theme
    let themeOptions = {
        maxAge: 5000,
        // expires works the same as the maxAge
        expires: new Date('01 12 2021'),
        secure: true,
        sameSite: 'lax'
    };
    if (theme === undefined){
        theme = 'light';
        res.cookie('theme',theme,themeOptions)
    }
    req.theme = theme
    req.themeOptions = themeOptions
    next()
})

app.get(['/', '/home'], (req, res) => {
    res.render('home/index.ejs', {'theme': req.theme})
})
app.get('/producten', (req, res) => {
    res.render('producten/index.ejs', {'theme': req.theme})
})
app.get('/workshops', (req, res) => {
    res.render('workshops/index.ejs', {'theme': req.theme})
})
app.get('/contact', (req, res) => {
    res.render('contact/index.ejs', {'theme': req.theme})
})

app.listen(80)