const assert = require('assert');
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should return TRUE for Bellville registration number', function(){
        assert.equal(true, isFromBellville("CY"));
    });
    it('should return FALSE if registraion number is not from Bellville', function(){
     assert.equal(false, isFromBellville("CL"));
    });
});
