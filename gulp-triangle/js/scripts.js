function Triangle(side1, side2, side3, status){
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
  this.status = status;
}

Triangle.prototype.isTriangle = function() {
  if (this.side1 + this.side2  <= this.side3){
    console.log("Not a triangle");
  } else{
    console.log("Triangle");
  }
};



exports.triangleModule = Triangle;
