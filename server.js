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
app.use(
    helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'", "https://www.google.com", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"],
          scriptSrc: ["'self'", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"],
        },
    })
)

app.all('/*', (req, res, next) => {
    let theme = req.cookies.theme
    let themeOptions = {
        maxAge: 5000,
        secure: true,
        sameSite: 'lax'
    };
    if (theme === undefined){
        theme = 'light';
        res.cookie('theme',theme,themeOptions)
    }
    req.theme = theme
    req.themeOptions = themeOptions
    res.header("Cross-Origin-Embedder-Policy", "cross-origin")
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