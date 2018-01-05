(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Triangle(side1, side2, side3, status){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.status = status;
}

Triangle.prototype.isTriangle = function() {
  if (this.side1 + this.side2  <= this.side3) {
    return this.status = "not";
  } else{
    return this.status = "triangle";
  }
};

exports.triangleModule = Triangle;

},{}],2:[function(require,module,exports){


var Triangle = require('./../js/scripts.js').triangleModule;
// function Triangle(side1, side2, side3, status){
//   this.side1 = side1;
//   this.side2 = side2;
//   this.side3 = side3;
//   this.status = status;
// }
//
// Triangle.prototype.isTriangle = function() {
//   if ((this.side1 + this.side2 > this.side3) || (this.side2 + this.side3 > this.side1) || (this.side3 + this.side1 > this.side2)) {
//     return this.status = "triangle";
//   } else{
//     return this.status = "not triangle";
//   }
// };
//
$(document).ready(function() {
  $("form#triangle-form").submit(function(event){
    event.preventDefault();
    var side1val = parseInt($("#side1").val());
    var side2val = parseInt($("#side2").val());
    var side3val = parseInt($("#side3").val());
    var assessTriangle = new Triangle(side1val, side2val, side3val, status);
    assessTriangle.isTriangle();
    console.log(assessTriangle);
  });


});

},{"./../js/scripts.js":1}]},{},[2]);
