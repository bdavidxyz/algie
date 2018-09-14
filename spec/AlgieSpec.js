describe("Algie", function() {
  var algie;

  beforeEach(function() {
    algie = new Algie();
  });

  describe("allMultiplyBy", function() {
    beforeEach(function() {
    });

    it("should convert [1,2,3] into [1,4,6] when all elements are multiplied by 2", function() {
      expect(algie.allMultiplyBy([1,2,3], 2)).toEqual([2,4,6]);
    });
    it("should convert [3,7,9] into [9,21,27] when all elements are multiplied by 3", function() {
      expect(algie.allMultiplyBy([3,7,9], 3)).toEqual([9,21,27]);
    });

  });

  describe("allMultiplyBy, robust version", function() {
    beforeEach(function() {
    });

    it("should convert [1,2,3] into [1,4,6] when all elements are multiplied by 2", function() {
      expect(algie.allMultiplyBy([1,2,3], 2)).toEqual([2,4,6]);
    });
    it("should convert [3,7,9] into [9,21,27] when all elements are multiplied by 3", function() {
      expect(algie.allMultiplyBy([3,7,9], 3)).toEqual([9,21,27]);
    });
    it("should convert [2] into [14] when all elements are multiplied by 7", function() {
      expect(algie.allMultiplyBy([2], 3)).toEqual([14]);
    });
    it("should return 'foo' if 'foo' is given, because it is not an expected argument", function() {
      expect(algie.allMultiplyBy("foo")).toEqual("foo");
    });
    it("should return 42 if 42 is given, because it is not an expected argument", function() {
      expect(algie.allMultiplyBy(42)).toEqual(42);
    });

  });

});
