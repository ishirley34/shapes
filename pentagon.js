// This is the Pentagon constructor function 
function Pentagon(s1, s2, s3 ,s4, s5) {
	// Checks to make sure that new is used
	if (!(this instanceof Pentagon)) {
		return new Pentagon(s1, s2, s3, s4, s5);
	}

	this.s1 = s1;
	this.s2 = s2;
	this.s3 = s3;
	this.s4 = s4;
	this.s5 = s5
}

// this exports the code for use in other files
module.exports = Pentagon;