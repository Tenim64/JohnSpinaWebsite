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

app.get(['/', '/home'], (req, res) => {
    const theme = req.cookies.theme
    if (theme === null){
        theme = 'light';
        res.cookie('theme',theme,{
            secure: true,
            httpOnly: true,
            sameSite: 'lax'
        })
    }
    res.render('home/index.ejs', {theme: theme})
})

app.listen(80)