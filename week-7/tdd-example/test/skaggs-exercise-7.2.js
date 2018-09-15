/*
============================================
; Title: Exercise 7.2
; Author: Professor Krasso
; Date: 15 Sept 2018
; Modified By: Jake Skaggs
; Description: tdd-example
;===========================================
*/ 

var assert = require("assert");

describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});