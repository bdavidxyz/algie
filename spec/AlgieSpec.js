describe("Algie", function() {
  var algie;

  beforeEach(function() {
    algie = new Algie();
  });

  describe("allMultiplyBy", function() {
    beforeEach(function() {
    });

    it("should convert [1,2,3] into [1,4,6] when all elements are multiplied by 2", function() {
      expect(algie.allMultiplyBy([1,2,3], 2)).toEqual([1,4,6]);
    });
    it("should convert [3,7,9] into [9,21,27] when all elements are multiplied by 3", function() {
      expect(algie.allMultiplyBy([3,7,9], 2)).toEqual([9,21,27]);
    });

  });

});
