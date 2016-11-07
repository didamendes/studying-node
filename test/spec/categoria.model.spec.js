'use strict'

var assert = require('assert');
var should = require('chai').should();
var expect = require('chai').expect;
var mongoose = require('mongoose');

var Categoria = require('../../server/models/categoria')();

describe('Categoria Model', function(){
    before(function(done){
        mongoose.connect('mongodb://localhost/numap-dev');
            Categoria.remove().exec();
            done();
    });

        // Banco esta limpo
        it('Banco esta limpo', function(done){
            Categoria.count({}, function(err, response){
                should.not.exist(err);
            response.should.equal(0);
            done();
            });
        });

        // Criar
        describe('#create', function(){
            it('Salvar no banco', function(done){
                var categoria = new Categoria({'nome' : 'Importados'});
                categoria.save(function(err){
                    if (err) done(err);
                    else done();
                });
            });
        });


        //Pesquisa
        describe('#pesquisa', function(){
            it('Esta salvando', function(done){
                Categoria.count({}, function(err, response){
                    should.not.exist(err);
                    response.should.equal(1);
                    done();
                });
            });
        });

})