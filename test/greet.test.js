const assert = require('assert');
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Nwabisa correctly', function(){
        assert.equal('Hello, Nwabisa', greet('Nwabisa'));
    });

    it('should greet Mvelo correctly', function(){
        assert.equal('Hello, Mvelo', greet('Mvelo'));
    });
});
