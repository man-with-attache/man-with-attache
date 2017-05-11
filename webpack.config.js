// webpack.config.js
(function () {
	module.exports = {
		entry: {
			index: "/src/js/index.js",
			vendor: "/src/js/vendor.js"
		}
	}
}());

/*
	OTHER WAYS OF CONFIGURING THE WEBPACK CONFIG FILE

	module.exports = {

	}

	var config = function () {

	}

	module.exports = config;
*?
