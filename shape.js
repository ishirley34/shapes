// Creates the main constructor call Shape

function Shape() {
	// Checks to make sure new was used
	if (!(this instanceof Shape)) {
		return new Shape();
	}
}

// This will add inherited porperties
Shape.prototype.get_type = function() {
	return this.__proto__.constructor;
};

module.exports = Shape;