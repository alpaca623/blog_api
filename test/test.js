const assert = require('assert');
// const service = require('../server/api/v1/services/menu.service');

describe("Array", function(){
  describe("#indexOf()", function(){
    it("should return -1 when the value is not present", function(){
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

// describe("Service", function(){
//   it("[menu service] - request menu get function", async function(){
    
//   })
// })