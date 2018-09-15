/*
============================================
; Title: Exercise 7.3
; Author: Professor Krasso
; Date: 15 Sept 2018
; Modified By: Jake Skaggs
; Description: chai-example-test
;===========================================
*/ 

var fruits = require("../skaggs-fruits");

var chai = require("chai");
var assert = chai.assert;


describe("fruits", function() {

    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });

});