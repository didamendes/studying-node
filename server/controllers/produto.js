module.exports = function (app){
    
    var Produto = app.models.produto;
    
    var controller = {}
    
    controller.findAll = function (req, res){
        
        Produto.find().exec().then(
            function(response){
                res.json(response);
            },
            function(error){
                res.status(500).json(error);
            }
        );
        
    };
    
    
    controller.findOne = function(req, res){
        var id = req.params.id;
        
        Produto.findById(id).exec().then(
            function(response){
                if(!response){
                    res.status(404).json("Produto não foi encontrado!");
                }
                res.json(response);
            },
            function(error){
                res.status(500).json(error);
            }
        );
    };
    
    controller.delete = function(req, res){
        var id = req.params.id;
        
        Produto.remove({"_id": id}).exec().then(
            function(){
                res.status(204).end();
            },
            function(error){
                res.status(500).json(error);
            }
        );
    };
    
    controller.findNome = function(req, res){
        var nome = req.params.nome;

        Produto.find({"nome": nome}).exec().then(
            function(response){
                if(!response){
                    res.status(404).json("Produto não encontrado!");
                }
                res.json(response);
            },
            function(error){
                res.status(500).json(error);
            }
        );
    };

    controller.findCodigo = function(req, res){
        var codigoBarra = req.params.codigoBarra;

        Produto.find({"codigoBarra": codigoBarra}).exec().then(
            function(response){
                if(!response){
                    res.status(404).json("Produto não encontrado!");
                }
                res.json(response);
            },
            function(error){
                res.status(500).json(error);
            }
        );
    };
    
    controller.update = function(req, res){
      var id = req.body.id;
        
        Produto.findByIdAndUpdate(id, req.body).exec().then(
            function(response){
                res.json(response);
            },
            function(error){
                res.status(500).json(error);
            }
        );
    };
    
    controller.create = function(req, res){
        
        Produto.create(req.body).then(
            function(response){
                res.status(201).json(response);
            },
            function(error){
                res.status(500).json(error);
            }
        );
    };
    
    return controller;
    
}