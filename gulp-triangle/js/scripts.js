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
