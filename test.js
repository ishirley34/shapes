"use strict";

// Imports data from other files
var Triangle = require("./triangle");
var Square = require("./square");
var Pentagon = require("./pentagon");
var Shape = require("./shape");

// Adds get_type method
Shape.prototype.get_type = function(){
	return this.__proto__.constructor;
};
// Updates prototype
Square.prototype = new Shape();
Square.prototype.constructor = Square;
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;
Pentagon.prototype = new Shape();
Pentagon.prototype.constructor = Pentagon;

// Here we create our shapes
var triangle = new Triangle(1, 2, 3);
var square = new Square(1, 2, 3, 4);
var pentagon = new Pentagon(1, 2, 3, 4, 5);
var shape = new Shape();
console.log("var triangle = new Triangle(1, 2, 3);");
console.log("var square = new Square(1, 2, 3, 4);");
console.log("var pentagon = new Pentagon(1, 2, 3, 4, 5);");
console.log("var shape = new Shape();");
console.log("-------------------------------------------------------------");

// use the get_type method to verify they are all types of Shape
console.log("triangle.get_type:");
console.log(triangle.get_type());
console.log("square.get_type:");
console.log(square.get_type());
console.log("pentagon.get_type:");
console.log(pentagon.get_type());
console.log("shape.get_type:");
console.log(shape.get_type());
console.log("-------------------------------------------------------------");

// Here we print everything to the console to verify that they are all instances of each other.

console.log("triangle instanceof Triangle");
console.log(triangle instanceof Triangle);
console.log("triangle instanceof Shape");
console.log(triangle instanceof Shape);
console.log("-------------------------------------------------------------");
console.log("square instanceof Square");
console.log(square instanceof Square);
console.log("square instanceof Shape");
console.log(square instanceof Shape);
console.log("-------------------------------------------------------------");
console.log("pentagon instanceof Pentagon");
console.log(pentagon instanceof Pentagon);
console.log("pentagon instanceof Shape");
console.log(pentagon instanceof Shape);
console.log("-------------------------------------------------------------");
console.log("shape instanceof Shape");
console.log(shape instanceof Shape);
