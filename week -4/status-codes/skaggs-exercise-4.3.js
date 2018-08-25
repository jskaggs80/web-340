/*
============================================
; Title: Exercise 4.3
; Author: Professor Krasso
; Date: 18 Aug 2018
; Modified By: Jake Skaggs
; Description: Status Codes
;===========================================
*/ 

var express = require("express");
var http = require("http");
var logger = require('morgan');

var app = express();

//request using status codes

app.get("/not-found", function(request, response) {
    response.status(404);
    response.json({
        error: "What you are looking for does not exist."
    })
});

app.get("/ok", function(request, response) {
    response.status(200);
    response.json({
        message: "We got it!"
    })
});

app.get("/not-implemented", function(request, response) {
    response.status(501);
    response.json({
        error: "Well this is embarrasing...something broke"
    })
});

http.createServer(app).listen(8080, function() {
   console.log("Application is rocking and rolling on port 8080!");
});