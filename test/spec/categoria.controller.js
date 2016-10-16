'use strict'

var assert = require('assert'),
	expect = require('chai').expect,
	sinon = require('sinon'),
	mongoose = require('mongoose');
	
require('sinon-as-promised');
require('sinon-mongoose');

var CategoriaModel = require('../../server/models/categoria')();

describe("Categoria Controller", function(){
	
	describe("FindAll()", function(){
		
		it("Teste de find", function(){
			
			var CategoriaMock = sinon.mock(CategoriaModel);
			
			CategoriaMock
				.expects("find")
				.chain("exec")
				.resolves("RESULT");
				
				CategoriaModel.find()
				.then(
					function(response){
						CategoriaMock.verify();
						CategoriaMock.restore();
						assert.equal(response, "RESULT");
						done();
					}
				);
			
		});
		
	});
	
	describe("Teste de Post", function(){
		
		it("Teste Save Categoria", function(done){
			
			var CategoriaMock = sinon.mock(new CategoriaModel({nome: "Outros"}));
			var categoria = CategoriaMock.object;
			
			CategoriaMock
				.expects("save")
				.yields(null, "SAVED");
				
				categoria.save(function(err, result){
					CategoriaMock.verify();
					CategoriaMock.restore();
					assert.equal("SAVED", result);
					done();
				})
			
		});
		
	});
	
	describe("Teste de Update Categoria", function(){
		
		it("Deve atualizar a Categoria com o nova valor", function(done){
			
			var CategoriaMock = sinon.mock(new CategoriaModel({nome: "Frios"}));
			var categoria = CategoriaMock.object;
			
			CategoriaMock
				.expects("save")
				.withArgs({_id: 12345})
				.yields(null, "UPDATED");
				
				categoria.save({_id: 12345}, function(err, result){
					CategoriaMock.verify();
					CategoriaMock.restore();
					assert.equal("UPDATED", result);
					done();
				})
			
		});
		
	});
	
	describe("Teste de Delete de Categoria", function(){
		
		it("Deletar categoria passando o id", function(done){
			
			var CategoriaMock = sinon.mock(CategoriaModel);
			
			CategoriaMock
				.expects("remove")
				.withArgs({_id: 12345})
				.yields(null, "Delete");
				
				CategoriaModel.remove({_id: 12345}, function(err, response){
					CategoriaMock.verify();
					CategoriaMock.restore();
					assert.equal("Delete", response);
					done();
				})
			
		});
		
	});
	
});