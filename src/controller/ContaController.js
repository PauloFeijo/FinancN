const db = require('../conf/db')

module.exports = {
    find(req, res) {
        db('conta')
            .where({ id: req.params.id })
            .then(contas => res.json(contas))
            .catch(err => res.status(400).json(err))
    },

    list(req, res) {
        db('conta')
            .then(contas => res.json(contas))
            .catch(err => res.status(400).json(err))
    },

    insert(req, res) {
        console.log(req.body)
        db('conta')
            .insert(req.body)
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
    },

    delete(req, res) {
        db('conta')
            .where({ id: req.params.id })
            .del()
            .then(rowsDel => {
                if (rowsDel > 0) {
                    res.status(204).send()
                } else {
                    res.status(204).send(`Não encontrada conta com id ${req.params.id}.`)
                }
            })
            .catch(err => res.status(400).json(err))
    },

    update(req, res) {
        db('conta')
            .where({ id: req.params.id })
            .update(req.body)
            .then(rowsUp => {
                if (rowsUp > 0) {
                    res.status(204).send()
                } else {
                    res.status(204).send(`Não encontrada conta com id ${req.params.id}.`)
                }
            })
            .catch(err => res.status(400).json(err))
    },
}