/*
============================================
; Title: Assignment 7.4
; Author: Professor Krasso
; Date: 15 Sept 2018
; Modified By: Jake Skaggs
; Description: ems/employee
;===========================================
*/ 

// required
var mongoose = require("mongoose");
var Schema = mongoose.Schema;


// define the employeeSchema
var employeeSchema = new Schema({
    fName: String,
    lName: String
});


// define the employee model
var Employee = mongoose.model("Employee", employeeSchema);


// expose the employee to calling files
module.exports = Employee;