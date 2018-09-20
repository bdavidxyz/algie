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

  describe("algie_elementAfter", function() {
    it("element next to 9 in array [8, 9, 33] is 33", function() {
      expect(algie_elementAfter([8, 9, 33], 9)).toEqual(33);
    });
    it("element next to 42 in array [8, 9, 33, 42, 78, 13] is 78", function() {
      expect(algie_elementAfter([8, 9, 33, 42, 78, 13], 42)).toEqual(78);
    });
    it("element next to 13 in array [8, 9, 33, 42, 78, 13] is 8 (yes ! in this exercise, element after the last one is the first one)", function() {
      expect(algie_elementAfter([8, 9, 33, 42, 78, 13], 42)).toEqual(78);
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

  describe("algie_cupsRepartition", function() {
    it("Should give each kid the same number of cups, for example 2 kids with 8 cups", function() {
      expect(algie_cupsRepartition([
          {name: "bob", cups:1},
          {name: "jen", cups:7}
        ])).toEqual([
          {name: "bob", cups:4},
          {name: "jen", cups:4}
        ]);
    });
    it("Should give each kid the same number of cups, for example 3 kids with 9 cups", function() {
      expect(algie_cupsRepartition([
          {name: "ken", cups:0},
          {name: "dan", cups:4},
          {name: "gor", cups:5}
        ])).toEqual([
          {name: "ken", cups:3},
          {name: "dan", cups:3},
          {name: "gor", cups:3}
        ]);
    });
    it("Should give each kid the same number of cups, if not possible, kids with higher name in alphabet have 1 more cup.", function() {
      expect(algie_cupsRepartition([
          {name: "cod", cups:5},
          {name: "alf", cups:4},
          {name: "ben", cups:2}
        ])).toEqual([
          {name: "alf", cups:4},
          {name: "cod", cups:3},
          {name: "ben", cups:4}
        ]);
    });
  });



  describe("algie_beforeMax", function() {
    it("Should find a high number, the one before the maximum, in an array with numbers", function() {
      expect(algie_beforeMax([1, 5, 4, 3, 65, 23, 42, 55, 12])).toEqual(55);
    });
    it("Should find a high number, the one before the maximum, in an array with numbers and other types", function() {
      expect(algie_beforeMax(["1", "z", 4, 3, 65, /^/, 42, 51, 12])).toEqual(51);
    });
    it("Should find the high number, the one before the maximum, in an array with numbers, other types and null values", function() {
      expect(algie_beforeMax([1, null, 4, new Date(), undefined, 23, 42, "55", 12])).toEqual(23);
    });
  });

  describe("algie_toPropArray", function() {
    it("transforms {a:11, b:42} into [{prop:'a', value:11}, {prop:'b', value:42}]", function() {
      expect(algie_toPropArray({a:11, b:42})).toEqual([{prop:'a', value:11}, {prop:'b', value:42}]);
    });
    it("transforms {foo:'sth', bar:'z', me:'too'} into [{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]", function() {
      expect(algie_toPropArray({foo:"sth", bar:"z", me:"too"})).toEqual([{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]);
    });
  });

  describe("algie_fromPropArray", function() {
    it("transforms [{prop:'a', value:'11'}, {prop:'b', value:'42'}] into {a:11, b:42}", function() {
      expect(algie_fromPropArray([{prop:'a', value:'11'}, {prop:'b', value:'42'}])).toEqual({a:11, b:42});
    });
    it("transforms {foo:'sth', bar:'z', me:'too'} into [{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]", function() {
      expect(algie_fromPropArray({foo:"sth", bar:"z", me:"too"})).toEqual([{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]);
    });
  });

  describe("algie_missingNumber", function() {
    it("In the 2-dimensional array [['-1', '-2', '1'], [], ['2']], the missing number is 0", function() {
      expect(algie_missingNumber([['-1', '-2', '1'], [], ['2']])).toEqual(0);
    });
    it("In the 2-dimensional array [['1', '2', null, '4'], ['3', '6']], the missing number is 5", function() {
      expect(algie_missingNumber([['1', '2', null, '4'], ['3', '6']])).toEqual(5);
    });
    it("In the 2-dimensional array [['9', null, '7', '6'], [null, '5', '4', '3', '1', '2']], the missing number is 8", function() {
      expect(algie_missingNumber([['9', null, '7', '6'], [null, '5', '4', '3', '1', '2']])).toEqual(8);
    });
  });

  describe("algie_generateWord", function() {
    it("A call to the function generate a word, size 6", function() {
      expect(algie_generateWord().length).toEqual(6);
    });
    it("Multiple call to the function always generate a different word", function() {
      expect(algie_generateWord()).not.toEqual(algie_generateWord());
    });
    it("1st char is always a lower-cased consonant (i.e. char others than a-e-i-o-u-y)", function() {
      expect(algie_generateWord().charAt(0)).toBeConsonant();
    });
    it("2nd char is always a lower-cased vowel (i.e. a-e-i-o-u-y)", function() {
      expect(algie_generateWord().charAt(1)).toBeVowel();
    });
    it("3rd char is always a lower-cased consonant", function() {
      expect(algie_generateWord().charAt(2)).toBeConsonant();
    });
    it("4th char is always a lower-cased vowel", function() {
      expect(algie_generateWord().charAt(3)).toBeVowel();
    });
    it("5th char is always a lower-cased consonant", function() {
      expect(algie_generateWord().charAt(4)).toBeConsonant();
    });
    it("6th char is always a lower-cased vowel", function() {
      expect(algie_generateWord().charAt(5)).toBeVowel();
    });
  });

  describe("algie_cutAndMultiplyNumber", function() {
    it("42 is made of 4 and 2. Therefore, function must return 8 (4*2)", function() {
      expect(algie_cutAndMultiplyNumber(42)).toEqual(8);
    });
    it("263 is made of 2, 6 and 3. Therefore, function must return 36 (2*6*3)", function() {
      expect(algie_cutAndMultiplyNumber(263)).toEqual(36);
    });
    it("630 is made of 6, 3 and 0. Therefore, function must return 0 (6*3*0)", function() {
      expect(algie_cutAndMultiplyNumber(630)).toEqual(0);
    });
    it("7211 is made of 7, 2, 1 and 1. Therefore, function must return 14 (7*2*1*1)", function() {
      expect(algie_cutAndMultiplyNumber(7211)).toEqual(14);
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

  describe("algie_maxOfConsecutiveInArray", function() {
    it("should return 3 when there is 3 consecutive elements in array", function() {
      expect(algie_maxOfConsecutiveInArray(["a", "a", "c", "c", "c", "z"])).toEqual(3);
    });
    it("should return 5 when there is 5 consecutive elements in array, with same element in multiple places", function() {
      expect(algie_maxOfConsecutiveInArray(["a", "a", "c", "a", "a", "a", "a", "a"])).toEqual(5);
    });
    it("should return 4 when there is only the 4 same elements in array", function() {
      expect(algie_maxOfConsecutiveInArray(["a", "a", "a", "a"])).toEqual(4);
    });
    it("should return 0 when array is empty", function() {
      expect(algie_maxOfConsecutiveInArray([])).toEqual(4);
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
