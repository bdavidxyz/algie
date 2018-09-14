describe("Algie", function() {


  describe("algie_allMultiplyBy", function() {
    it("should convert [1,2,3] into [1,4,6] when all elements are multiplied by 2", function() {
      expect(allMultiplyBy([1,2,3], 2)).toEqual([2,4,6]);
    });
    it("should convert [3,7,9] into [9,21,27] when all elements are multiplied by 3", function() {
      expect(allMultiplyBy([3,7,9], 3)).toEqual([9,21,27]);
    });

  });

  describe("algie_42", function() {
    it("should return 42", function() {
      expect(algie_42()).toEqual(42);
    });
  });

});
