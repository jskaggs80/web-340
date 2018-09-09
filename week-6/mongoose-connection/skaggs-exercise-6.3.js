/*
============================================
; Title: Exercise 6.3
; Author: Professor Krasso
; Date: 8 Sept 2018
; Modified By: Jake Skaggs
; Description: mongoose
;===========================================
*/ 

var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");


// mLab connection
var mongoDB = "mongodb://jskaggs:Sarah!80@ds147942.mlab.com:47942/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
    console.log("Application connected to mLab");
});


// application
var app = express();
app.use(logger("dev"));


// create server
http.createServer(app).listen(5000, function() {
    console.log("Application stated and listening on port 5000");
});