module.exports = function(app){
    
    var controller = app.controllers.usuario;
    
    app.route('/usuario')
    .get(controller.findAll)
    .post(controller.create)
    .put(controller.update);
    
    app.route('/usuario/:id')
    .get(controller.findOne)
    .delete(controller.delete);
    
}