var express_device = require('express-device');

var deviceParser = new express_device.Parser();
deviceParser.user_agent = function() {
	return this.ua_string;
};

module.exports.useragent_is = function (ua) {
	deviceParser.ua_string = ua;
	return deviceParser.get_type();
};
