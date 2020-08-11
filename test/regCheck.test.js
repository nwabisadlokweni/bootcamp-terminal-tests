const assert = require('assert');
let regCheck = require("../regCheck");

describe('The regCheck function', function () {
    it('should check the registration number and return its location', function () {
       var registration = "DV 23 NB GP";
       var location = "GP";
        assert.equal(true, regCheck(registration,location));
    });

});