/*
============================================
; Title: Exercise 5.3
; Author: Professor Krasso
; Date: 1 Sept 2018
; Modified By: Jake Skaggs
; Description: pug
;===========================================
*/ 

var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response) {
    response.render("index", {
        message: "Welcome everyone...the earth says hello!"
    });
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});