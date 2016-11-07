'use strict'

var assert = require('assert'),
    expect = require('chai').expect,
    sinon = require('sinon'),
    mongoose = require('mongoose');

require('sinon-as-promised');
require('sinon-mongoose');

var ProdutoModel = require('../../server/models/produto')();

describe("Produto Controller", function(){

    describe("findAll()", function(){

        it("Teste de find", function(done){
            
            var ProdutoMock = sinon.mock(ProdutoModel);

            ProdutoMock
                .expects("find")
                .chain('exec')
                .resolves('RESULT');

                ProdutoModel.find()
                .then(
                    function(response){
                        ProdutoMock.verify();
                        ProdutoMock.restore();
                        assert.equal(response, 'RESULT');
                        done();
                    }
                );

        });

    });
	
	describe('Teste de Post', function(){
		
		/*it('Salvo com sucesso', function(){
			var saveProduto = sinon.stub();
			function Book(){
				this.save = saveProduto
			}
			var req = {
				body: {
					nome: "teste",
					codigoBarra: "123",
					descricao: "Novo",
					precoVenda:"120",
					fornecedor: "Nestle",
					urlFoto: "www.globo.com",
					categoria: "57d2f8eba9e7f7b41974cbed"
				}
			}
			var res = {}, next = {};
			var TodoController = require('../../server/controllers/produto')(Book);
			TodoController.create(req, res);
			sinon.assert.calledOnce(saveProduto);
		}); */
		
		it('Teste save Produto', function (done){
			var ProdutoMock = sinon.mock(new ProdutoModel({nome: 'teste', codigoBarra: '123455', descricao: 'Novo', precoVenda: '123', fornecedor: 'Nestle', urlFoto: 'www.google.com.br', categotia: '57d2f8eba9e7f7b41974cbed'}));
			var todo = ProdutoMock.object;
			
			ProdutoMock
				.expects('save')
				.yields(null, 'SAVED');
				
			todo.save(function(err, result){
				ProdutoMock.verify();
				ProdutoMock.restore();
				assert.equal("SAVED", result, "Teste errou")
				done();
			});
		});
		
	});
	
	describe('Teste de Update Produto', function(){
		
		it('Deve atualizar o Produto com o novo valor', function(done){
			var produtoMock = sinon.mock(new ProdutoModel({nome: 'Diogo', codigoBarra: '123455', descricao: 'Novo', precoVenda: '123', fornecedor: 'Nestle', urlFoto: 'www.google.com.br', categotia: '57d2f8eba9e7f7b41974cbed'}));
			var produto = produtoMock.object;
			
			produtoMock
				.expects('save')
				.withArgs({_id: 12345})
				.yields(null, 'UPDATED');
				
			produto.save({_id: 12345}, function(err, result){
				produtoMock.verify();
				produtoMock.restore();
				done();
			})
		});
		
	});
	
	describe('Teste de Delete de Produto', function(){
		
		it('Detetar produto passando o id', function(done){
			var produtoMock = sinon.mock(ProdutoModel);
			
			produtoMock
				.expects('remove')
				.withArgs({_id: 12345})
				.yields(null, 'Delete')
				
			ProdutoModel.remove({_id: 12345}, function(err, result){
				produtoMock.verify();
				produtoMock.restore();
				done();
			})
		});
		
	});

});