# device - useragent device detection based on express-device

## usage

To install:
	$ npm install device

Example use:
```javascript
var device = require('device');
device.useragent_is("Mozilla/5.0 (iPad; CPU OS 5_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B176 Safari/7534.48.3");
```

will return 'tablet'
