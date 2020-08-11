const assert = require('assert');
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function', function(){

    it('should return items over', function(){
        var threshold = 10;
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        var results = [
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
        ];
        assert.deepEqual(results, findItemsOver(itemList, threshold));
    })

});