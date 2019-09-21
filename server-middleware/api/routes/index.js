
const express = require('express')
const router = express.Router()
const data = require('../data')
const searchCache = require('memory-cache')

router.get('/search/:term/:kind', (req, res, next) => {
    
    // Middelware search
    let key = '__express__' + req.originalUrl || req.url
    let cache = searchCache.get(key)
    if (cache) {
        res.send(cache)        
    } else {
        next()
    }
})
router.get('/lookup/:id', (req, res) => {
    data.lookup(req.params.id).then(result => {
        res.send(result.data)
    })
})

router.get('/search/:term/:kind', (req, res) => {
    let key = '__express__' + req.originalUrl || req.url

    data.search(req.params.term).then(result => {        
        const data = result.data.results.filter(i => i.kind == req.params.kind )
        const value = { data, resultCount: data.length, cache: true }
        
        searchCache.put(key, value, 180000)
        res.send({ data, resultCount: data.length})
    })
})


module.exports = router