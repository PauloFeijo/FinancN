const { Router } = require('express')

const routes = Router()

routes.get('/test', (req, res) => {
    console.log('Call route test')
    return res.json('test')
})

module.exports = routes