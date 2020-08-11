const assert = require('assert');
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function', function(){

    it('should return 1 registration number from town', function(){
        var EXPECTED_COUNT = 1;
        assert.equal(EXPECTED_COUNT, countAllFromTown("CA 213-213"));
    });
    it('should return no registration number from town', function(){
        var EXPECTED_COUNT = 0;
        assert.equal(EXPECTED_COUNT, countAllFromTown("CL 213-213"));
    });
});
