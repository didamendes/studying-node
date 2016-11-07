'use strict';

var assert = require('assert'),
	expect = require('chai').expect,
	should = require('chai').should(),
	sinon = require('sinon'),
	mongoose = require('mongoose'),
	request = require('supertest'),
	app = require("../../server.js"),
	agent = request.agent(app);
	
describe("Usuario CRUD integration testing", function(){
	
	describe("Get ALL", function(done){
		
		it("GET /usuario", function(done){
			request(app)
				.get('/usuario')
				.set('Accept', 'application/json')
				.end(function(err, result){
					
					assert.equal(result.status, 200);
					
					console.log("STATUS = ", result.status);
					done();
				})
		});
		
	});


	
});
