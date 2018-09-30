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

//initialize the app
var app = express();

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
app.set("port", process.env.PORT || 8080);


//http calls
app.get("/", function (request, response) {
    response.render("index", {
        title: "Home page"
    });
});

app.get("/new", function (request, response) {
    response.render("new", {
        title: "New Employee"
    });
});




//post
app.post("/process", function(request, response) {
     console.log(request.body.txtName); 
    if (!request.body.txtName) { 
        response.status(400).send("Entries must have a name"); 
        return; 
    }
 
    // get the request's form data 
    var fName = request.body.txtName; 
    console.log(fName);
 
    // create a employee model 
    var employee = new Employee({ 
        name: fName 
    });
 
    // save 
    employee.save(function (error) { 
        if (error) throw error; 
        console.log(employee + " saved successfully!"); 
    }); 
    response.redirect("/list"); 
 });

 app.get("/list", function(request, response) {
    Employee.find({}, function(error, employees) {
       if (error) throw error;

       response.render("list", {
           title: "Employee List",
           employees: employees
       });
    });
});

app.get("/view/:queryName", function (request, response) {
    var queryName = request.params.queryName;

    Employee.find({'name': queryName}, function(error, employees) {
        if (error) throw error;

        console.log(employees);

        if (employees.length > 0) {
            response.render("view", {
                title: "Employee Record",
                employee: employees
            })
        }
        else {
            response.redirect("/list")
        }

    });
});

//create server
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});