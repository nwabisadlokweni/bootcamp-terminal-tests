const assert = require('assert');
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){

    it('should show the current year', function(){
        assert.equal(2020, yearsAgo("0"));
    });

    it('should show the age of 1969 year', function(){
        assert.equal(1969, yearsAgo("51"));
    });
});
