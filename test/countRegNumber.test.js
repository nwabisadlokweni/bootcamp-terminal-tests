const assert = require('assert');
let countRegNumber = require("../countRegNumber");

describe('The countRegNumber function', function(){

    it('should return 1 registration number', function(){
        var EXPECTED_COUNT = 1;
        assert.equal(EXPECTED_COUNT, countRegNumber("CJ 213-213"));
    });
    it('should return 5 registration numbers', function(){
        var EXPECTED_COUNT = 5;
        assert.equal(EXPECTED_COUNT, countRegNumber("CL 213-213, CJ 213-213, CA 213-213, CAA 213-213, CL 213"));
    });

});
