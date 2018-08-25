/*
============================================
; Title: Exercise 4.2
; Author: Professor Krasso
; Date: 24 Aug 2018
; Modified By: Jake Skaggs
; Description: JSON APIs
;===========================================
*/ 

var express = require("express");
var http = require("http");

var app = express();

app.get("/customer/:id", function (request, response) {
    var id = parseInt(request.params.id, 10);

    response.json({
        firstName: "Marty",
        lastName: "McFly",
        employeeId: id
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started and listening on port 8080");
});