'use strict';



var controller  = function (app) {
    
    
    var Usuario = app.models.usuario;
    
    var controller = {}
    
    controller.findAll = function (req, res) {
        
      Usuario.find().exec().then(
        function(response){
            res.json(response);
        },
          function(error){
              res.status(500).json(error);
          }
      );  
        
    };
    
    
    controller.findOne = function (req, res){
        var id = req.params.id;
        
        Usuario.findById(id).exec().then(
            function(response){
                if(!response){
                    res.status(404).json("Usuário não foi encontrado");
                }
                res.json(response);
            },
                function(error){
                    res.status(500).json(error);
                }
        );
    };
    
    controller.delete = function (req, res) {
        var id = req.params.id;
        
        Usuario.remove({"_id": id}).exec().then(
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
        
        Usuario.findByIdAndUpdate(id, req.body).exec().then(
            function(response) {
                res.json(response);
            },
            function(error) {
                res.status(500).json(error);
            }
        );
    };
    
    controller.create = function(req, res){
        
        Usuario.create(req.body).then(
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

module.exports = controller;