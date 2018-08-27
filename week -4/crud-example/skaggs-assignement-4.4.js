/*
============================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 26 Aug 2018
; Modified By: Jake Skaggs
; Description: cURL
;===========================================
*/ 

var express = require("express");
var http = require("http");
var logger = require("morgan");

var app = express();

//cURL for GET, POST, PUT, and DELETE
app.get("/get", function(req, res) {
    res.send("API invoked as an HTTP GET request.");
});

app.post("/post", function(req, res) {
    res.send("API invoked as an HTTP POST request.");
});

app.put("/put", function(req, res) {
    res.send("API invoked as an HTTP PUT request.");
});

app.delete("/delete", function(req, res) {
    res.send("API invoked as a HTTP DELETE request");
});

//create server
http.createServer(app).listen(3000, function() {
    console.log("Application running on port 3000!");
})
