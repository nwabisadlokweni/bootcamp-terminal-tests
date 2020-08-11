const assert = require('assert');
let fromWhere = require("../fromWhere");

describe('The fromWhere function', function () {

    it('should return TRUE for Bellville registration number', function () {
        assert.equal("Bellville", fromWhere("CY"));
    });
    it('should return TRUE for Paarl registration number', function () {
        assert.equal("Paarl", fromWhere("CJ"));
    });
    it('should return TRUE for Cape Town registration number', function () {
        assert.equal("Cape Town", fromWhere("CA"));
    });
 
});