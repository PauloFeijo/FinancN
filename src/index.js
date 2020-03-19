const app = require('express')()
const routes = require('./routes')

app.use(routes)

app.listen(4000, () => {
    console.log('Server at 4000')
})
