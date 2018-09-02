/*
============================================
; Title: Exercise 5.2
; Author: Professor Krasso
; Date: 1 Sept 2018
; Modified By: Jake Skaggs
; Description: if-else-render
;===========================================
*/ 

var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var k = [
  "John",
  "Jacob",
  "Jason",
  "James"
];

app.get("/", function(request, response) {
    response.render("index", {
        names: k
    })
});

http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});