'use strict'

var assert = require('assert'),
	expect = require('chai').expect,
	sinon = require('sinon'),
	mongoose = require('mongoose');
	
require('sinon-as-promised');
require('sinon-mongoose');

var UsuarioModel = require('../../server/models/usuario')();

describe("Usuario Controller", function(){
	
	describe("FindAll()", function(){
		
		it("Teste de find", function(){
			
			var UsuarioMock = sinon.mock(UsuarioModel);
			
			UsuarioMock
				.expects('find')
				.chain('exec')
				.resolves('RESULT');
				
				UsuarioModel.find()
				.then(
					function(response){
							UsuarioMock.verify();
							UsuarioMock.restore();
							assert.equal(response, 'RESULT');
							done();
					}
				);
			
		});
		
	});
	
	describe("Teste de Post", function(){
		
		it("Teste save Usuario", function(done){
			
			var UsuarioMock = sinon.mock(new UsuarioModel({nome: "Diogo Mendes", email: "didamendes@hotmail.com", login: "didamendes", senha: "123456"}));
			var todo = UsuarioMock.object;
			
			UsuarioMock
				.expects("save")
				.yields(null, "SAVED");
				
				todo.save(function(err, result){
					UsuarioMock.verify();
					UsuarioMock.restore();
					assert.equal("SAVED", result, "Teste errou")
					done();
				});
			
		});
		
	});
	
	describe("Teste de Update Usuario", function(){
		
		it("Deve atualizar o Usuario com o novo valor", function(done){
			
			var UsuarioMock = sinon.mock(new UsuarioModel({nome: "Vasco", email: "vasco@hotmail.com", login: "vasco", senha: "123456"}));
			var todo = UsuarioMock.object;
			
			UsuarioMock
				.expects("save")
				.withArgs({_id: 12345})
				.yields(null, "UPDATED");
				
				todo.save({_id: 12345}, function(err, result){
					UsuarioMock.verify();
					UsuarioMock.restore();
					assert.equal("UPDATED", result);
					done();
				})
			
		});
		
	});
	
	describe("Teste de Delete de Usuario", function(){
		
		it("Deletar usuario passando o id", function(done){
			
			var UsuarioMock = sinon.mock(UsuarioModel);
			
			UsuarioMock
				.expects("remove")
				.withArgs({_id: 12345})
				.yields(null, "Delete");
				
				UsuarioModel.remove({_id: 12345}, function(err, response){
					UsuarioMock.verify();
					UsuarioMock.restore();
					assert.equal("Delete", response);
					done();
				})
			
		});
		
	});
	
});