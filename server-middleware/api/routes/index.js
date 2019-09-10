
const express = require('express')
const router = express.Router()
const data = require('../data')

router.get('/', (req, res, next) => {
    next()
})
router.get('/lookup/:id', (req, res) => {
    data.lookup(req.params.id).then(result => {
        res.send(result.data)
    })
})

module.exports = router