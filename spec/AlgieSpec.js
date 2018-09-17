describe("Algie", function() {

  describe("algie_42", function() {
    it("should return 42", function() {
      expect(algie_42()).toEqual(42);
    });
  });

  describe("algie_allMultiplyBy", function() {
    it("should convert [1, 2, 3] into [2, 4, 6] when all elements are multiplied by 2", function() {
      expect(algie_allMultiplyBy([1, 2, 3], 2)).toEqual([2, 4, 6]);
    });
    it("should convert [3, 7, 9, 11] into [9, 21, 27, 33] when all elements are multiplied by 3", function() {
      expect(algie_allMultiplyBy([3, 7, 9, 11], 3)).toEqual([9, 21, 27, 33]);
    });
  });

  describe("algie_multiplyEach", function() {
    it("[1, 2, 3] multiplied by [1, 2, 3] gives [1, 4, 9]", function() {
      expect(algie_multiplyEach([1, 2, 3], [1, 2, 3])).toEqual([1, 4, 9]);
    });
    it("[2, 2, 2] multiplied by [1, 2, 3] gives [2, 4, 6]", function() {
      expect(algie_multiplyEach([2, 2, 2], [2, 4, 6])).toEqual([2, 4, 6]);
    });
    it("[9, 41] multiplied by [6, 76] gives [54, 3116]", function() {
      expect(algie_multiplyEach([9, 41], [6, 76])).toEqual([54, 3116]);
    });
  });

  describe("algie_completeWith", function() {
    it("[1, 2, 3] must have a size of 5. If not, complete with 42", function() {
      expect(algie_completeWith([1, 2, 3], 5, 42)).toEqual([1, 2, 3, 42, 42]);
    });
    it("[4, 0, -3] must have a size of 8. If not, complete with boolean false", function() {
      expect(algie_completeWith([4, 0, -3], 8, false)).toEqual([4, 0, -3, false, false, false, false, false]);
    });
  });

  describe("algie_elementNext", function() {
    it("element next to 9 in array [8, 9, 33] is 33", function() {
      expect(algie_elementNext([8, 9, 33], 9)).toEqual(33);
    });
    it("element next to 42 in array [8, 9, 33, 42, 78, 13] is 78", function() {
      expect(algie_elementNext([8, 9, 33, 42, 78, 13], 42)).toEqual(78);
    });
    it("element next to 13 in array [8, 9, 33, 42, 78, 13] is 8 (yes ! element after the last one is the first one)", function() {
      expect(algie_elementNext([8, 9, 33, 42, 78, 13], 42)).toEqual(78);
    });
  });

  describe("algie_insertEverywhere", function() {
    it("'me' with 'b' everywhere will become 'bmbeb'", function() {
      expect(algie_insertEverywhere('foo', 'A')).toEqual('AfAoAoA');
    });
    it("'foo' with 'A' everywhere will become 'AfAoAoA'", function() {
      expect(algie_insertEverywhere('foo', 'A')).toEqual('AfAoAoA');
    });
  });

  describe("algie_isArrayOfString", function() {
    it("should return true if there are only strings in a simple array", function() {
      expect(algie_isArrayOfString(["a", "b", "c"])).toEqual(true);
    });
    it("should return true if there are only strings in a more complex array, with empty string and sentences", function() {
      expect(algie_isArrayOfString(["la", "do", "re", "", "fa", "a sentence", "another sentence"])).toEqual(true);
    });
    it("should return true if it is an empty array", function() {
      expect(algie_isArrayOfString([])).toEqual(true);
    });
    it("should return false if it is not an array", function() {
      expect(algie_isArrayOfString(42)).toEqual(false);
    });
    it("should return false if it there is something else than a String in the array", function() {
      expect(algie_isArrayOfString(["a", "b", 42, "c"])).toEqual(false);
    });
  });


});
