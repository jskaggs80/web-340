/*
============================================
; Title: Exercise 3.2
; Author: Professor Krasso
; Date: 15 Aug 2018
; Modified By: Jake Skaggs
; Description: Morgan
;===========================================
*/ 

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.get('/', function(req, res) {
    res.render('index', {
        message: 'You found something cool!'
    });
});

http.createServer(app).listen(3000, function(){
    console.log('Application started and listening on prot %s', 3000)
});