module.exports = app => {
    app.route('/conta')
        .get(app.src.controller.ContaController.list)
        .post(app.src.controller.ContaController.insert)

    app.route('/conta/:id')
        .delete(app.src.controller.ContaController.delete)
        .put(app.src.controller.ContaController.update)
        .get(app.src.controller.ContaController.find)
}