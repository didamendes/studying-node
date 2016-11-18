var mongoose = require("mongoose");

module.exports = function(){
    
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        codigoBarra: {
            type: Number,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        precoVenda: {
            type: Number,
            required: true
        },
        fornecedor: {
            type: String,
            required: true
        },
        urlFoto: {
            type: String,
            required: true
        }, 
        categoria: {
            type: String,
            required: true
        }
        
    });
    
    return mongoose.model('Produto', schema);
    
};