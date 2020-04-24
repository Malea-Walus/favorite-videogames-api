const express = require('express')
const favoriteVideogames = require('../dataAccess/favoriteVideogamesDataAccess')
const router = express.Router()

router.get('/', async (req, res) => {
    const data = await favoriteVideogames.getfavoriteVideogames()
    console.log ('gotdata')
    res.send(data)

})

module.exports = router