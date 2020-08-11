const assert = require('assert');
let isWeekday = require("../isWeekday");

describe('The isWeekday function', function () {
    it('should return TRUE if its weekday', function () {
        assert.equal(true, isWeekday("Monday"));
    });
    it('should return TRUE if its weekday', function () {
        assert.equal(true, isWeekday("Tuesday"));
    });
    it('should return TRUE if its weekday', function () {
        assert.equal(true, isWeekday("Wednesday"));
    });
    it('should return TRUE if its weekday', function () {
        assert.equal(true, isWeekday("Thursday"));
    });
    it('should return TRUE if its weekday', function () {
        assert.equal(true, isWeekday("Friday"));
    });
    it('should return FALSE if its weekend', function () {
        assert.equal(false, isWeekday("S"));
    });

});

