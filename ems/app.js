/*
============================================
; Title: ems
; Author: Professor Krasso
; Date: 15 Sept 2018
; Modified By: Jake Skaggs
; Description: ems
;===========================================
*/ 

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");

// setup csrf protection
var csrfProtection = csrf({cookie: true});

var app = express();
var logger = require("morgan");
var Employee = require("./models/employee");

// mLab connection
var mongoDB = "mongodb://jskaggs:Sarah!80@ds147942.mlab.com:47942/ems";
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
    console.log("Application connected to mLab MongoDB instance");
});

// intitialize the app
var app = express();

//use statements
app.use(logger("short"));
app.use(helmet.xssFilter());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cookieParser());
app.use(csrfProtection);
app.use(function(request, response, next) {
    var token = request.csrfToken();
    response.cookie('XSRF-TOKEN', token);
    response.locals.csrfToken = token;
    next();
});


// model
var employee = new Employee({
    fName: "John",
    lName: "Johns"
});

//set statements
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");


//http calls
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page",
        message: "CSRF Example"
    });
});

//post
app.post("/process", function(request, response) {
    // console.log(request.body.txtName); 
    if (!request.body.txtName) { 
        response.status(400).send("Entries must have a name"); 
        return; 
    }
 
    // get the request's form data 
    var fruitName = request.body.txtName; 
    console.log(fruitName);
 
    // create a fruit model 
    var fruit = new Fruit({ 
        name: fruitName 
    });
 
    // save 
    fruit.save(function (error) { 
        if (error) throw error; 
        console.log(fruitName + " saved successfully!"); 
    }); 
    response.redirect("/"); 
 });

//create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});