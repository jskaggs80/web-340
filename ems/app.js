/*
============================================
; Title: ems
; Author: Professor Krasso
; Date: 8 Sept 2018
; Modified By: Jake Skaggs
; Description: ems
;===========================================
*/ 

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");


var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));


app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"
    });
});


http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});