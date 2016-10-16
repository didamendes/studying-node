module.exports = function (app){
    
    var Categoria = app.models.categoria;
    
    var controller = {}
    
    controller.findAll = function (req, res) {
        
        Categoria.find().exec().then(
            function(response){
                res.json(response);
            },
            function(error){
                res.status(500).json(error);
            }
        );
    };
    
    controller.findOne = function (req, res) {
        var id = req.params.id;
        
        Categoria.findById(id).exec().then(
            function(response){
                if(!response){
                    res.status(404).json("Categoria não foi encontrada!");
                }
                res.json(response);
            },
            function(error){
                res.status(500).json(error);
            }
        );
    };
    
    controller.delete = function (req, res){
        var id = req.params.id;
        
        Categoria.remove({"_id": id}).exec().then(
            function(){
                res.status(204).end();
            }, 
            function(error){
                res.status(500).json(error);
            }
        );
    };
    
    controller.update = function(req, res){
        var id = req.body.id;
        
        Categoria.findByIdAndUpdate(id, req.body).exec().then(
            function(response){
                res.json(response);
            },
            function(error){
                res.status(500).json(error);
            }
        );
    };
    
   controller.create = function(req, res){
        
        Categoria.create(req.body).then(
            function(response) {
                res.status(201).json(response);
            },
            function(error){
                res.status(500).json(error);
            }
        );
        
    };
    
    return controller;
    
}