// This is the Triangle constructor function 
function Triangle(s1, s2, s3) {
	// Checks to make sure that new is used
	if (!(this instanceof Triangle)) {
		return new Triangle(s1, s2, s3);
	}

	this.s1 = s1;
	this.s2 = s2;
	this.s3 = s3;
}

// this exports the code for use in other files
module.exports = Triangle;