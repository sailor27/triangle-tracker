
var Triangle = require('./../js/scripts.js').triangleModule;

$(document).ready(function() {
  $("form#triangle-form").submit(function(event){
    event.preventDefault();
    var side1val = parseInt($("#side1").val());
    var side2val = parseInt($("#side2").val());
    var side3val = parseInt($("#side3").val());
    var assessTriangle = new Triangle(side1val, side2val, side3val);
    console.log(assessTriangle);
    assessTriangle.isTriangle();
  });


});
