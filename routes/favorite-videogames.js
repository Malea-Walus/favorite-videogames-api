const express = require('express')
const favoriteVideogames = require('../dataAccess/favoriteVideogamesDataAccess')
const router = express.Router()

router.get('/', async (req, res) => {
    const data = await favoriteVideogames.getfavoriteVideogames()
    console.log ('gotdata', data)
    const a = JSON.stringify(data) 
    console.log(a)
    res.send(a)

})

module.exports = router