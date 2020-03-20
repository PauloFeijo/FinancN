const app = require('express')()
const db = require('./conf/db')
const consign = require('consign')
const config = require('./conf/config')

consign()
    .then('./src/conf/middlewares.js')
    .then('./src/controller')
    .then('./src/routes.js')
    .into(app)

app.db = db

app.listen(config.port, () => {
    console.log('Server at '+ config.port)
})