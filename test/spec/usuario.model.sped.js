'use strict'

var assert = require('assert');
var should = require('chai').should();
var expect = require('chai').expect;
var mongoose = require('mongoose');

var Usuario = require('../../server/models/marca')();

describe('Usuario Model', function(){
    before(function(done){
            mongoose.connect('mongodb://localhost/numap-dev');
            Usuario.remove().exec();
            done();
    });

    it("Banco esta limpo", function(done){
        Usuario.count({}, function(err, response){
            should.not.exist(err);
            response.should.equal(0);
            done();
        });
    });

        describe('#create', function(){
            it('Salvar no banco', function(done){
                var usuario = new Usuario({'nome' : 'Diogo Mendes' , 'email' : 'didamendes@hotmail.com', 'login' : 'didamendes', 'senha' : '123456'});
                usuario.save(function(err){
                    if (err) done(err);
                    else done();
                });
            });
        });

        describe('#pesquisa', function(){
            it("Esta salvando", function(done){
                Usuario.count({}, function(err, response){
                should.not.exist(err);
                response.should.equal(1);
                done();
                });
            });
        });

});