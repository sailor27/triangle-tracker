

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
