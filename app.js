var express = require('express');
var path =  require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan')

var favoriteVideogames = require('./routes/favorite-videogames')

var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Orgin', '*')
    res.header('Acess-Control-Allow-Methods', 'Post, Get, Put, Delete, Options')
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization')

        next()
})

app.use(express.urlencoded({extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/favoriteVideogames', favoriteVideogames);

app.get('/health', (req, res) => {
    res.send({
        status: 'alive and well',
        message:'all systems nomial'


    })


})

module.exports = app;