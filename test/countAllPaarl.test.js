const assert = require('assert');
let countAllPaarl = require("../countAllPaarl");

describe('The countAllPaarl function', function(){

    it('should return 1 registration number from Paarl', function(){
        var EXPECTED_COUNT = 1;
        assert.equal(EXPECTED_COUNT, countAllPaarl("CJ 213-213"));
    });
    it('should return no registration number from Paarl', function(){
        var EXPECTED_COUNT = 0;
        assert.equal(EXPECTED_COUNT, countAllPaarl("CL 213-213"));
    });

});
