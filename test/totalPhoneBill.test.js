const assert = require('assert');
let totalPhoneBill = require("../totalPhoneBill");

describe("The totalPhoneBill function", function () {
    it("should return total amount of calls made", function () {
        assert.equal("R5.50", totalPhoneBill("call, call"));
    })
    it("should return total amount of sms's made", function () {
        assert.equal("R1.95", totalPhoneBill("sms, sms, sms"));
    })
    it("should return total amount of calls and sms's made", function () {
        assert.equal("R7.45", totalPhoneBill("call, call, sms, sms, sms "));
    })
});
