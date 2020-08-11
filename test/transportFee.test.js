const assert = require('assert');
let transportFee = require("../transportFee");

describe('The transportFee function', function () {

    it('should return the transport fee fot the shift', function () {
        assert.equal("R20", transportFee("morning"));
    });
    it('should return the transport fee for the shift', function () {
        assert.equal("R10", transportFee("afternoon"));
    });
    it('should return the transport fee for the shift', function () {
        assert.equal("free", transportFee("nightshift"));
    });
    // it('should return the transport fee for the shift', function () {
    //     assert.equal("nightshift", transportFee("free"));
    // });
 
});