module.exports = function(app){
    
    var controller = app.controllers.categoria;
    
    app.route('/categoria')
    .get(controller.findAll)
    .post(controller.create)
    .put(controller.update);
    
    app.route('/categoria/:id')
    .get(controller.findOne)
    .delete(controller.delete);
    
}