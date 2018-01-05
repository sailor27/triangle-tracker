var Triangle = require('./../js/scripts.js').triangleModule;

it('should test whether a Triangle has three sides', function() {
   var triangle = new Triangle(3,4,5)
   expect(triangle.side1).toEqual(3)
   expect(triangle.side2).toEqual(4)
   expect(triangle.side3).not.toEqual(6)
 });


describe('isTriangle', function(){
  it('should test whether a triangle where the sum of side1 and side2 is less than or equal to side3', function(){
    var newTriangle = new Triangle(1, 1, 100 "not");
    expect(newTriangle.status).toEqual("not");
  });
});
