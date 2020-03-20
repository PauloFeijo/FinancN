const app = require('express')()
const db = require('./conf/db')
const consign = require('consign')

consign()
    .then('./src/conf/middlewares.js')
    .then('./src/controller')
    .then('./src/routes.js')
    .into(app)

app.db = db

app.listen(4000, () => {
    console.log('Server at 4000')
})
