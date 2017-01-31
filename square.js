// This is the Square constructor function 
function Square(s1, s2, s3, s4) {
	// Checks to make sure that new is used
	if (!(this instanceof Square)) {
		return new Square(s1, s2, s3, s4);
	}

	this.s1 = s1;
	this.s2 = s2;
	this.s3 = s3;
	this.s4 = s4;
}


// this exports the code for use in other files
module.exports = Square;