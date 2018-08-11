/*
============================================
; Title: Assignment 2.4
; Author: Professor Krasso
; Date: 11 Aug 2018
; Modified By: Jake Skaggs
; Description: views
;===========================================
*/ 

var http = require("http");
var express = require("express");
var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs"); // Tell Express to use the EJS view engine

app.get("/", function(request, response) {

   response.render("index.ejs", {

       firstName : "Ted",
       lastName : "Brogan",
       address : "123 Main st"

   });

});

http.createServer(app).listen(8080, function() {

    console.log("EJS-Views app started on port 8080.");

});

