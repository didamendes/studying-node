module.exports = function(app){
    
    var controller = app.controllers.produto;
    
    app.route('/produto')
    .get(controller.findAll)
    .post(controller.create)
    .put(controller.update);
    
    app.route('/produto/:id')
    .get(controller.findOne)
    .delete(controller.delete);
    
    app.route('/produto/nome/:nome')
    .get(controller.findNome);

    app.route('/produto/codigo/:codigoBarra')
    .get(controller.findCodigo);
    
}