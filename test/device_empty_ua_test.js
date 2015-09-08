var device = require('../'),
    assert = require('assert');

describe('Missing User Agent', function () {

    describe('No user agent',function(){
        it('should get device type undefined', function(){
            var type = device.useragent_is(undefined);
            assert.equal(type, undefined);
        });
    });
    describe('Empty user agent',function(){
        it('should get device type undefined', function(){
            var type = device.useragent_is('');
            assert.equal(type, undefined);
        });
    });

});