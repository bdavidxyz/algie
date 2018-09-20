describe("For experienced developers only", function() {

  describe("algie_42", function() {
    it("should return 42", function() {
      expect(algie_42()).toEqual(42);
    });
  });

  describe("algie_connect4", function() {
    it("should return false for an default, empty 7x6 grid", function() {
      expect(algie_connect4(
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        )).toEqual(false);
    });
    it("should return false if there is no 4 consecutive coins in row, column or diagonal", function() {
      expect(algie_connect4(
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", "o", "x", "x", " "],
        ["x", "o", "x", "x", "x", "o"],
        ["o", "x", "o", "o", "x", "o"],
        ["o", "x", "o", "x", "o", "x"],
        ["x", "o", "x", "o", "x", "o"],
        )).toEqual(false);
    });
    it("should return false if there is no 4 consecutive coins in a diagonal", function() {
      expect(algie_connect4(
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", "o", "x", "x", " "],
        ["x", "o", "x", "x", "o", "o"],
        ["o", "x", "o", "o", "x", "o"],
        ["o", "x", "o", "x", "o", "x"],
        ["x", "o", "x", "o", "x", "o"],
        )).toEqual(false);
    });
    it("should return true if there is 4 consecutive non-empty element in a column", function() {
      expect(algie_connect4(
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", "x", " ", " ", " "],
        [" ", " ", "x", " ", " ", " "],
        [" ", " ", "x", " ", " ", " "],
        [" ", " ", "x", " ", " ", " "],
        )).toEqual(true);
    });
    it("should return true if there is 4 consecutive non-empty element in a column, even with multiple coins type", function() {
      expect(algie_connect4(
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", "x", " ", " ", " "],
        [" ", " ", "x", "x", " ", " "],
        [" ", " ", "x", "o", "o", " "],
        [" ", " ", "x", "o", "o", " "],
        [" ", " ", "o", "x", "o", " "],
        )).toEqual(true);
    });
    it("should return true if there is 4 consecutive non-empty element in a row", function() {
      expect(algie_connect4(
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", " ", " ", " ", " "],
        [" ", "o", "o", "o", "o", " "],
        )).toEqual(true);
    });
    it("should return true if there is 4 consecutive non-empty element in a row, even with multiple coins type", function() {
      expect(algie_connect4(
        [" ", " ", " ", " ", " ", " "],
        [" ", " ", "o", "x", "x", " "],
        ["x", "o", "x", "x", "o", "x"],
        ["o", "x", "o", "o", "o", "o"],
        ["o", "x", "o", "x", "o", "x"],
        ["x", "o", "x", "o", "x", "o"],
        )).toEqual(true);
    });
    it("should return true if there is 4 consecutive non-empty element in a diagonal, even with multiple coins type, in a 4x4 grid", function() {
      expect(algie_connect4(
        ["x", "o", "x", "x"],
        ["o", "x", "x", "o"],
        ["o", "x", "o", "x"],
        ["x", "o", "o", "o"],
        )).toEqual(true);
    });
  });


});
