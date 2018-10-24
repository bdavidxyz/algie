describe("Algie", function() {

  describe("(difficulty 0) algie_42", function() {
    it("should return 42", function() {
      expect(algie_42()).toEqual(42);
    });
  });

  describe("(difficulty 1) algie_ordinalSuffix", function() {
    it("should return 'st' if given number ends with 1", function() {
      expect(algie_ordinalSuffix(141)).toEqual('st');
    });
    it("should return 'nd' if given number ends with 2", function() {
      expect(algie_ordinalSuffix(242)).toEqual('nd');
    });
    it("should return 'rd' if given number ends with 3", function() {
      expect(algie_ordinalSuffix(7353)).toEqual('rd');
    });
    it("should return 'th' if given number ends with 4", function() {
      expect(algie_ordinalSuffix(44)).toEqual('th');
    });
    it("should return 'th' if given number ends with 7", function() {
      expect(algie_ordinalSuffix(5647)).toEqual('th');
    });
    it("should return 'th' if given number ends with 9", function() {
      expect(algie_ordinalSuffix(9)).toEqual('th');
    });
    it("should return '' if given arg is not a number", function() {
      expect(algie_ordinalSuffix(new Date())).toEqual('');
    });
  });

  describe("(difficulty 1) algie_hideThat. Hides every char between first and last char.", function() {
    it("'hello' becomes 'h***o'", function() {
      expect(algie_hideThat('hello')).toEqual('h***o');
    });
    it("'funk' becomes 'f**k'", function() {
      expect(algie_hideThat('funk')).toEqual('f**k');
    });
    it("'a' becomes 'a'", function() {
      expect(algie_hideThat('a')).toEqual('a');
    });
    it("should hide a regexp, /^ImARegExp/, becomes '/*********/'", function() {
      expect(algie_hideThat(/^ImARegExp/)).toEqual('/*********/');
    });
    it("should hide a number, 4242, becomes '4**2'", function() {
      expect(algie_hideThat(4242)).toEqual('4**2');
    });
  });

  describe("(difficulty 1) algie_reversedIndex", function() {
    it("should return the last element of array for index 0", function() {
      expect(algie_reversedIndex([1, 2, 3, 4], 0)).toEqual(4);
    });
    it("should return the before-last element of array for index 1", function() {
      expect(algie_reversedIndex([9, 32, 11, 9, 15, 87], 1)).toEqual(15);
    });
    it("should return the first element of array when index equals the length of the array minus 1", function() {
      var array = [3, 2, 5, 4, 0, 18, 43, 9];
      expect(algie_reversedIndex(array, array.length - 1)).toEqual(3);
    });
  });

  describe("(difficulty 1) algie_noneOf", function() {
    it("Should return true if all values inside array are false", function() {
      expect(algie_noneOf([false, false, false])).toEqual(true);
    });
    it("Should return false if one value is true", function() {
      expect(algie_noneOf([false, false, true])).toEqual(false);
    });
    it("Should return true if all values inside array are falsy", function() {
      expect(algie_noneOf([undefined, null, false, 0])).toEqual(true);
    });
    it("Should return false if one value is truthy", function() {
      expect(algie_noneOf([false, false, "a string", 0, undefined, null])).toEqual(false);
    });
    it("Should return false if multiple values are truthy", function() {
      expect(algie_noneOf([false, false, "a string", 0, undefined, 42])).toEqual(false);
    });
    it("Should return false if all values are true", function() {
      expect(algie_noneOf([true, true, true, true, true])).toEqual(false);
    });
    it("Should return true if array is empty", function() {
      expect(algie_noneOf([])).toEqual(true);
    });
  });

  describe("(difficulty 1) algie_allMultiplyBy", function() {
    it("should convert [1, 2, 3] into [2, 4, 6] when all elements are multiplied by 2", function() {
      expect(algie_allMultiplyBy([1, 2, 3], 2)).toEqual([2, 4, 6]);
    });
    it("should convert [3, 7, 9, 11] into [9, 21, 27, 33] when all elements are multiplied by 3", function() {
      expect(algie_allMultiplyBy([3, 7, 9, 11], 3)).toEqual([9, 21, 27, 33]);
    });
  });

  describe("(difficulty 1) algie_multiplyEach", function() {
    it("[1, 2, 3] multiplied by [1, 2, 3] gives [1, 4, 9]", function() {
      expect(algie_multiplyEach([1, 2, 3], [1, 2, 3])).toEqual([1, 4, 9]);
    });
    it("[2, 2, 2] multiplied by [1, 2, 3] gives [2, 4, 6]", function() {
      expect(algie_multiplyEach([2, 2, 2], [1, 2, 3])).toEqual([2, 4, 6]);
    });
    it("[9, 41] multiplied by [6, 76] gives [54, 3116]", function() {
      expect(algie_multiplyEach([9, 41], [6, 76])).toEqual([54, 3116]);
    });
  });

  describe("(difficulty 2) algie_camelCaseToSentence", function() {
    it("should convert 'GlobalWarning' into 'global warning'", function() {
      expect(algie_camelCaseToSentence('GlobalWarning')).toEqual('global warning');
    });
    it("should convert 'YouAreAnIncredibleDude' into 'i am an incredible dude'", function() {
      expect(algie_camelCaseToSentence('YouAreAnIncredibleDude')).toEqual('you are an incredible dude');
    });
  });


  describe("(difficulty 2) algie_completeWith. Complete array until given size, with given constant", function() {
    it("For example, [1, 2, 3] must have a size of 5. If not, complete with 42. Therefore, the final result should be [1, 2, 3, 42, 42]", function() {
      expect(algie_completeWith([1, 2, 3], 5, 42)).toEqual([1, 2, 3, 42, 42]);
    });
    it("[4, 0, -3] must have a size of 8. If not, complete with boolean false. Therefore, The final result should be [4, 0, -3, false, false, false, false, false]", function() {
      expect(algie_completeWith([4, 0, -3], 8, false)).toEqual([4, 0, -3, false, false, false, false, false]);
    });
  });

  describe("(difficulty 2) algie_elementAfter", function() {
    it("element after 9 in array [8, 9, 33] is 33", function() {
      expect(algie_elementAfter([8, 9, 33], 9)).toEqual(33);
    });
    it("element after 42 in array [8, 9, 33, 42, 78, 13] is 78", function() {
      expect(algie_elementAfter([8, 9, 33, 42, 78, 13], 42)).toEqual(78);
    });
    it("element after 13 in array [8, 9, 33, 42, 78, 13] is 8 (yes ! in this exercise, element after the last one is the first one)", function() {
      expect(algie_elementAfter([8, 9, 33, 42, 78, 13], 42)).toEqual(78);
    });
  });

  describe("(difficulty 2) algie_insertEverywhere", function() {
    it("'me' with 'b' everywhere will become 'bmbeb'", function() {
      expect(algie_insertEverywhere('foo', 'A')).toEqual('AfAoAoA');
    });
    it("'foo' with 'A' everywhere will become 'AfAoAoA'", function() {
      expect(algie_insertEverywhere('foo', 'A')).toEqual('AfAoAoA');
    });
  });

  describe("(difficulty 2) algie_fewOf", function() {
    it("Should return true if some (but not all) values inside array are true", function() {
      expect(algie_fewOf([true, true, false])).toEqual(true);
    });
    it("Should return false if all values inside array are true", function() {
      expect(algie_fewOf([true, true, true])).toEqual(false);
    });
    it("Should return true if some (but not all) values inside array are truthy", function() {
      expect(algie_fewOf(["a string", null, {a:1}, true])).toEqual(true);
    });
    it("Should return false if all values inside array are truthy", function() {
      expect(algie_fewOf(["a string", [1, 2], {a:1}, true])).toEqual(true);
    });
    it("Should return false if array is empty", function() {
      expect(algie_fewOf([])).toEqual(false);
    });
  });

  describe("(difficulty 2) algie_beforeMax", function() {
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

  describe("(difficulty 2) algie_generateWord", function() {
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

  describe("(difficulty 2) algie_cutAndMultiplyNumber", function() {
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

  describe("(difficulty 1) algie_isArrayOfString", function() {
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

  describe("(difficulty 2) algie_stringToHash", function() {
    it("should convert sentence 'hello abc' to hash {hello:{vowels:2, consonants:3}, abc:{vowels:1, consonants:2}}", function() {
      expect(algie_stringToHash('hello abc')).toEqual({hello:{vowels:2, consonants:3}, abc:{vowels:1, consonants:2}});
    });
    it("should convert sentence 'uzero foo eh' to hash {uzero:{vowels:3, consonants:2}, foo:{vowels:2, consonants:1}, eh:{vowels:1, consonants:1}}", function() {
      expect(algie_stringToHash('uzero foo eh')).toEqual({uzero:{vowels:3, consonants:2}, foo:{vowels:2, consonants:1}, eh:{vowels:1, consonants:1}});
    });
  });

  describe("(difficulty 2) algie_largestString", function() {
    it("returns the largest String in an array of String (example 1)", function() {
      expect(algie_largestString(["axel", "bob", "alice", "olaf"])).toEqual("alice");
    });
    it("returns the largest String in an array of String (example 2)", function() {
      expect(algie_largestString(["hello", "how", "are", "you", "my", "friend"])).toEqual("friend");
    });
  });

  describe("(difficulty 2) algie_numbersAfter", function() {
    it("returns the 6 next numbers after a given number (example 1)", function() {
      expect(algie_numbersAfter(23)).toEqual([24, 25, 26, 27, 28, 29]);
    });
    it("returns the 6 next numbers after a given number (example 2)", function() {
      expect(algie_numbersAfter(42)).toEqual([43, 44, 45, 46, 47, 48]);
    });
  });

  describe("(difficulty 2) algie_indexHash. It returns the element whose key is in nth position in the alphabetical order", function() {
    it("Should return 22 with hash {a:11, b:22, c:33}, and index 1", function() {
      expect(algie_indexHash({a:11, b:22, c:33}, 1)).toEqual(22);
    });
    it("Should return 33 with hash {d:44, f:66, e:55, a:11, b:22, c:33}, and index 2", function() {
      expect(algie_indexHash({d:44, f:66, e:55, a:11, b:22, c:33}, 2)).toEqual(33);
    });
    it("Should return 'amend' with hash {foo: 'foo', amend:'amend'}, and index 0", function() {
      expect(algie_indexHash({foo: 'foo', amend:'amend'}, 0)).toEqual("amend");
    });
    it("Should return 0 if hash is empty", function() {
      expect(algie_indexHash({}, 4)).toEqual(0);
    });
    it("Should return 0 when no arg given", function() {
      expect(algie_indexHash()).toEqual(0);
    });
  });


  describe("(difficulty 2) algie_dirtyString", function() {
    it("convert a badly formatted string in an array of ordered numbers without duplication (example 1)", function() {
      expect(algie_dirtyString(',4, 2 , 2,1,  ,')).toEqual([1, 2, 4]);
    });
    it("convert a badly formatted string in an array of ordered numbers without duplication (example 2)", function() {
      expect(algie_dirtyString('12 ,34, 41, 12, 22  , 2,')).toEqual([2, 12, 22, 34, 41]);
    });
    it("returns an empty array if something else than Integer is in the string", function() {
      expect(algie_dirtyString(',4, 2 , 2,1, 3, 5 ,1.1')).toEqual([]);
    });
    it("returns an empty array if something a wrong type is given", function() {
      expect(algie_dirtyString(new Date())).toEqual([]);
    });
  });

  describe("(difficulty 2) algie_isDecreasing", function() {
    it("returns true if the args are decreasing (example 1)", function() {
      expect(algie_isDecreasing(5, 4, 3, 2)).toEqual(true);
    });
    it("returns true if the args are decreasing (example 2)", function() {
      expect(algie_isDecreasing(15, 4, -3, -12, -22)).toEqual(true);
    });
    it("returns false if the args are NOT continuously decreasing", function() {
      expect(algie_isDecreasing(87, 54, 32, 43, 11, 5, 1)).toEqual(false);
    });
    it("returns false if the args are increasing", function() {
      expect(algie_isDecreasing(1, 2, 3, 4)).toEqual(false);
    });
  });

  describe("(difficulty 2) algie_findMultiplicators. Find the highest divisor of given number (excerpt itself), and return the 2 numbers, when multiplied, give the one given in parameter.", function() {
    it("10 can be divided by 1, 2, 5, 10. Therefore, f(10) return [5, 2]", function() {
      expect(algie_findMultiplicators(10)).toEqual([5, 2]);
    });
    it("33 can be divided by 1, 3, 11, 33. Therefore, f(33) return [11, 3]", function() {
      expect(algie_findMultiplicators(33)).toEqual([11, 3]);
    });
    it("49 and can be divided by 1, 7, 49. Therefore, f(49) return [7, 7]", function() {
      expect(algie_findMultiplicators(49)).toEqual([7, 7]);
    });
  });

  describe('(difficulty 2) algie_niceDraw', function() {
    it('f("*", "-", 2) => "*-"', function() {
      expect(algie_niceDraw("*", "-", 2)).toEqual("*-");
    });
    it('f("*", "-", 4) => "*-*-"', function() {
      expect(algie_niceDraw("*", "-", 4)).toEqual("*-*-");
    });
    it('f("o", "a", 3) => "oao"', function() {
      expect(algie_niceDraw("o", "a", 3)).toEqual("oao");
    });
    it('f("o", "b", "a", 6) => "obaoba"', function() {
      expect(algie_niceDraw("o", "b", "a", 6)).toEqual("obaoba");
    });
  });

  describe('(difficulty 2) algie_fooBarQixZzz. Returns "foo" if number can be divided by 3, "bar" by 5, "qix" by 15, "zzz" in every other case', function() {
    it('should return "foo" for 3 or 9', function() {
      expect(algie_fooBarQixZzz(3)).toEqual("foo");
      expect(algie_fooBarQixZzz(9)).toEqual("foo");
    });
    it('should return "bar" for 5 or 50', function() {
      expect(algie_fooBarQixZzz(5)).toEqual("bar");
      expect(algie_fooBarQixZzz(50)).toEqual("bar");
    });
    it('should return "qix" for 15 or 60', function() {
      expect(algie_fooBarQixZzz(15)).toEqual("qix");
      expect(algie_fooBarQixZzz(60)).toEqual("qix");
    });
    it('should return "zzz" for 0, or null, or 7', function() {
      expect(algie_fooBarQixZzz(0)).toEqual("zzz");
      expect(algie_fooBarQixZzz(null)).toEqual("zzz");
      expect(algie_fooBarQixZzz(7)).toEqual("zzz");
    });
  });

  describe("(difficulty 3) algie_stripCommonPath", function() {
    it("['/myDir/a.txt', '/myDir/b.txt', '/myDir/c.txt'] becomes ['/a.txt', '/b.txt', '/c.txt'] because /myDir is the common path", function() {
      expect(algie_stripCommonPath(['/myDir/a.txt', '/myDir/b.txt', '/myDir/c.txt'])).toEqual(['/a.txt', '/b.txt', '/c.txt']);
    });
    it("['/www/workspace/zz.txt', '/www/user/zz.txt'] becomes ['/workspace/zz.txt', '/user/zz.txt'] because /www is the common path", function() {
      expect(algie_stripCommonPath(['/www/workspace/zz.txt', '/www/user/zz.txt'])).toEqual(['/workspace/zz.txt', '/user/zz.txt']);
    });
  });

  describe("(difficulty 3) algie_toPropArray", function() {
    it("transforms {a:11, b:42} into [{prop:'a', value:11}, {prop:'b', value:42}]", function() {
      expect(algie_toPropArray({a:11, b:42})).toEqual([{prop:'a', value:11}, {prop:'b', value:42}]);
    });
    it("transforms {foo:'sth', bar:'z', me:'too'} into [{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]", function() {
      expect(algie_toPropArray({foo:"sth", bar:"z", me:"too"})).toEqual([{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]);
    });
  });

  describe("(difficulty 3) algie_fromPropArray", function() {
    it("transforms [{prop:'a', value:'11'}, {prop:'b', value:'42'}] into {a:11, b:42}", function() {
      expect(algie_fromPropArray([{prop:'a', value:'11'}, {prop:'b', value:'42'}])).toEqual({a:11, b:42});
    });
    it("transforms {foo:'sth', bar:'z', me:'too'} into [{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]", function() {
      expect(algie_fromPropArray({foo:"sth", bar:"z", me:"too"})).toEqual([{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]);
    });
  });

  describe("(difficulty 3) algie_missingNumber", function() {
    it("In the 2-dimensional array [['-1', '-2', '1'], [], ['2']], the missing number is 0", function() {
      expect(algie_missingNumber([['-1', '-2', '1'], [], ['2']])).toEqual(0);
    });
    it("In the 2-dimensional array [['0', '-1','1', '2', null, '4'], ['3', '6']], the missing number is 5", function() {
      expect(algie_missingNumber([['0', '-1', '1', '2', null, '4'], ['3', '6']])).toEqual(5);
    });
    it("In the 2-dimensional array [['9', null, '7', '6'], [null, '5', '4', '3', '1', '2']], the missing number is 8", function() {
      expect(algie_missingNumber([['9', null, '7', '6'], [null, '5', '4', '3', '1', '2']])).toEqual(8);
    });
  });

  describe('(difficulty 2) algie_lastWillBeFirst. Invert first and last element of an array', function() {
    it('f([1, 2, 3, 4]) => [4, 2, 3, 1]', function() {
      expect(algie_lastWillBeFirst("[1, 2, 3, 4]")).toEqual("[4, 2, 3, 1]");
    });
    it('f([12, 45, 8, 22, 89]) => [89, 45, 8, 22, 12]', function() {
      expect(algie_lastWillBeFirst("[12, 45, 8, 22, 89]")).toEqual("[89, 45, 8, 22, 12]");
    });
  });

  describe('(difficulty 2) algie_simplifyWord. Returns first and last character of a string, and the number of character between.', function() {
    it('f("accessibility") => "a11y"', function() {
      expect(algie_simplifyWord("accessibility")).toEqual("a11y");
    });
    it('f("internationalization") => "i18n"', function() {
      expect(algie_simplifyWord("internationalization")).toEqual("i18n");
    });
    it('f("aaa") => "a1a"', function() {
      expect(algie_simplifyWord("aaa")).toEqual("a1a");
    });
  });

  describe('(difficulty 2) algie_initials', function() {
    it('f("hello world") => "HW"', function() {
      expect(algie_initials("hello world")).toEqual("HW");
    });
    it('f("One great journey") => "OGJ"', function() {
      expect(algie_simplifyWord("One great journey")).toEqual("OGJ");
    });
  });

  describe('(difficulty 2) algie_printToZero', function() {
    it('8 becomes "76543210"', function() {
      expect(algie_printToZero(8)).toEqual(76543210);
    });
    it('5 becomes "43210"', function() {
      expect(algie_printToZero(5)).toEqual(43210);
    });
    it('-12 becomes "-11-10-9-8-7-6-5-4-3-2-10"', function() {
      expect(algie_printToZero(-12)).toEqual("-11-10-9-8-7-6-5-4-3-2-10");
    });
  });

  describe('(difficulty 3) algie_closestOf2000. Find the Date that is closest to the 1st Jan. 2000', function() {
    it('03.13.2006, 06.13.1995, 12.08.2012, 05.03.2019 => The 2nd Date is closest to 1st Jan. 2000', function() {
      var found_date = algie_closestOf2000([new Date('March 13, 2006 03:24:00'), new Date('June 13, 1995 03:24:00'), new Date('December 8, 2012 03:24:00'), new Date('May 3, 2019 03:24:00')]);
      expect(found_date.getTime()).toEqual(803006640000); // June 13, 1995 03:24:00
    });
    it('02.02.1997, 02.02.1998, 02.02.1999, 01.01.1999 => The 3rd Date is closest to 1st Jan. 2000', function() {
      var found_date = algie_closestOf2000([new Date('February 02, 1997 03:24:00'), new Date('February 02, 1998 03:24:00'), new Date('February 02, 1999 03:24:00'), new Date('January 01, 1999 03:24:00')]);
      expect(found_date.getTime()).toEqual(917922240000); // February 02, 1999 03:24:00
    });
  });

  describe("(difficulty 3) algie_arrayWithSameValues", function() {
    it("Should return true if given arrays are the same", function() {
      expect(algie_arrayWithSameValues([1, 5, 2], [1, 5, 2])).toEqual(true);
    });
    it("Should return true if given arrays are the same, but with elements in different order (example with Integer)", function() {
      expect(algie_arrayWithSameValues([1, 5, 2], [5, 2, 1])).toEqual(true);
    });
    it("Should return true if given arrays are the same, but with elements in different order (example with String)", function() {
      expect(algie_arrayWithSameValues(["ef", "ab", "zz", "ty"], ["ty", "ab", "ef", "zz"])).toEqual(true);
    });
    it("Should return false if given arrays are not the same (easy example)", function() {
      expect(algie_arrayWithSameValues([1, 5, 2], ["a", "b"])).toEqual(false);
    });
    it("Should return false if given arrays are not the same (tricky example)", function() {
      expect(algie_arrayWithSameValues([1, 5, 2, null], [1, 5, 2, undefined])).toEqual(false);
    });
    it("Should return false if wrong types are given as parameter", function() {
      expect(algie_arrayWithSameValues(/^/, /^/)).toEqual(false);
    });
    it("Should return false if no array are given", function() {
      expect(algie_arrayWithSameValues()).toEqual(false);
    });
  });

  describe('(difficulty 3) algie_resetAllKeysBut. Reset all keys of a hash, excerpt one', function() {
    it('f({a:1, b:2, c:3}, "b", 0) should be {a:0, b:2, c:0}', function() {
      expect(algie_resetAllKeysBut({a:1, b:2, c:3}, "b", 0)).toEqual({a:0, b:2, c:0});
    });
    it('f({foo:"yes", bar:"no", qix:"maybe", not: "not"}, "qix", "z") should be {foo:"z", bar:"z", qix:"maybe", not: "z"}', function() {
      expect(algie_resetAllKeysBut({foo:"yes", bar:"no", qix:"maybe", not: "not"}, "qix", "z")).toEqual({foo:"z", bar:"z", qix:"maybe", not: "z"});
    });
    it('Should return empty object if first param is not a plain object', function() {
      expect(algie_resetAllKeysBut([], "qix", "z")).toEqual({});
    });
    it('Should return empty object if second param is not a String', function() {
      expect(algie_resetAllKeysBut({a:1, b:2, c:3}, 42, 0)).toEqual({});
    });
    it('Last param is optional', function() {
      expect(algie_resetAllKeysBut({a:1, b:2, c:3}, "c")).toEqual({a:undefined, b:undefined, c:3});
    });
  });

  describe('(difficulty 3) algie_zodiac', function() {
    it('13th of march is pisces', function() {
      var date = new Date('March 13, 1995 03:24:00');
      expect(algie_zodiac(date)).toEqual("pisces");
    });
    it('15th of august is lion', function() {
      var date = new Date('August 15, 1995 03:24:00');
      expect(algie_zodiac(date)).toEqual("lion");
    });
  });

  describe('(difficulty 3) algie_occurencesOf', function() {
    it('"aba" should be converted into {a:2, b:1}', function() {
      expect(algie_occurencesOf("aba")).toEqual({a:2, b:1});
    });
    it('"hello" should be converted into {h:1, e:1, l:2, o:1}', function() {
      expect(algie_occurencesOf("hello")).toEqual({h:1, e:1, l:2, o:1});
    });
    it('"Abba" should be converted into {a:2, b:2}', function() {
      expect(algie_occurencesOf("Abba")).toEqual({a:2, b:2});
    });
  });

  describe("(difficulty 3) algie_swapByPair", function() {
    it("['a', 'b'] becomes ['b', 'a']", function() {
      expect(algie_swapByPair(['a', 'b'])).toEqual(['b', 'a']);
    });
    it("['a', 'b', 'c', 'd'] becomes ['b', 'a', 'd', 'c']", function() {
      expect(algie_swapByPair(['a', 'b', 'c', 'd'])).toEqual(['b', 'a', 'd', 'c']);
    });
    it("[1, 2, 3, 4, 5, 6] becomes [2, 1, 4, 3, 6, 5]", function() {
      expect(algie_swapByPair([1, 2, 3, 4, 5, 6])).toEqual([2, 1, 4, 3, 6, 5]);
    });
  });

  describe('(difficulty 3) algie_add2Dates', function() {
    it('1st january 2000, added to 1st january 2000, gives 1st january 4000', function() {
      var first_jan_2000 = new Date('January 1, 2000 00:00:01')
      var year0 = new Date(first_jan_2000.getTime());
      year0.setFullYear(0);
      expect(algie_add2Dates(first_jan_2000, first_jan_2000)).toEqual("foo");
    });
    it('1st january 2000, added to 1st january 3000, gives 1st january 5000', function() {
      var first_jan_2000 = new Date('January 1, 2000 00:00:01')
      var first_jan_3000 = new Date('January 1, 3000 00:00:01')
      expect(algie_add2Dates(first_jan_2000, first_jan_3000)).toEqual("foo");
    });
  });

  describe('(difficulty 3) algie_mergeHashes. For two hashes of the same size, whose keys are sorted in alphabetical order, return a hash that have keys of 1st hash but values of second hash', function() {
    it('f({a:1}, {e:8}) => {a:8}', function() {
      expect(algie_mergeHashes({a:1}, {e:8})).toEqual({a:8});
    });
    it('f({z:1, j:3}, {m:4,b:9}) => {j:9,z:4}', function() {
      expect(algie_mergeHashes({a:1}, {e:8})).toEqual({a:8});
    });
  });

  describe('(difficulty 3) algie_mendeleiev. Return the symbol of a periodic table.', function() {
    it('f("Hydrogen") => "H"', function() {
      expect(algie_mendeleiev("Hydrogen")).toEqual("H");
    });
    it('f("Silicon") => "Si"', function() {
      expect(algie_mendeleiev("Silicon")).toEqual("Si");
    });
    it('f("Scandium") => "Sc"', function() {
      expect(algie_mendeleiev("Scandium")).toEqual("Sc");
    });
    it('f("Cesium") => "Cs"', function() {
      expect(algie_mendeleiev("Cesium")).toEqual("Cs");
    });
  });

  describe('(difficulty 3) algie_encryptSentence', function() {
    it('"a bc" is transformed into "1 2-3"', function() {
      expect(algie_encryptSentence("a bc")).toEqual("1 2-3");
    });
    it('"aa BBB" is transformed into "1-1 2-2-2"', function() {
      expect(algie_encryptSentence("aa BBB")).toEqual("1-1 2-2-2");
    });
    it('"e êÉ" is transformed into "5 5-5"', function() {
      expect(algie_encryptSentence("e êÉ")).toEqual("5 5-5");
    });
  });

  describe("(difficulty 3) algie_arrayOfBoolean. Given an array of numbers, returns an array of boolean. If the number exist in the first array, then resulting_array[number] = true. All other elements in resulting array are false.", function() {
    it("[0, 2] becomes [true, false, true]", function() {
      expect(algie_arrayOfBoolean([0, 2])).toEqual([true, false, true]);
    });
    it("[0, 1, 4] becomes [true, true, false, false, true]", function() {
      expect(algie_arrayOfBoolean([0, 1, 4])).toEqual([true, true, false, false, true]);
    });
    it("[5] becomes [false, false, false, false, false, true]", function() {
      expect(algie_arrayOfBoolean([5])).toEqual([false, false, false, false, false, true]);
    });
  });

  describe("(difficulty 3) algie_maxOfConsecutiveInArray", function() {
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

  describe('(difficulty 3) algie_fireLangage. After each vowel, add a "f", followed by the vowel', function() {
    it('f("a") => "afa"', function() {
      expect(algie_fireLangage("a")).toEqual("afa");
    });
    it('f("hello") => "hefellofo"', function() {
      expect(algie_fireLangage("hello")).toEqual("hefellofo");
    });
    it('f("hello world") => "hefellofo woforld"', function() {
      expect(algie_fireLangage("hello world")).toEqual("hefellofo woforld");
    });
  });

  describe('(difficulty 4) algie_actualMatches. Returns the number of elements that exactly match (i.e. same value same position), and the number of element that doesn\'t (ie value match, but not position)', function() {
    it('f([1, 2, 2, 1, 0], [1, 3, 3, 4, 5]) => "1 exact match and 0 incorrect match"', function() {
      expect(algie_actualMatches([1, 2, 2, 1, 0], [1, 3, 3, 4, 5])).toEqual("1 exact match and 0 incorrect match");
    });
    it('f([1, 2, 2], [2, 1, 2]) => "1 exact match and 2 incorrect match"', function() {
      expect(algie_actualMatches([1, 2, 2], [2, 1, 2])).toEqual("1 exact match and 2 incorrect match");
    });
    it('f([0, 1], [2, 2]) => "0 exact match and 0 incorrect match"', function() {
      expect(algie_actualMatches([0, 1], [2, 2])).toEqual("0 exact match and 0 incorrect match");
    });
    it('f([0, 1], [1, 2]) => "0 exact match and 1 incorrect match"', function() {
      expect(algie_actualMatches([0, 1], [1, 2])).toEqual("0 exact match and 1 incorrect match");
    });
  });

  describe('(difficulty 4) algie_sortByConsecutive. Sort a string so that char that have the most consecutive elements appears first.', function() {
    it('f("bbaaa") => "aaabb"', function() {
      expect(algie_sortByConsecutive("bbaaa")).toEqual("aaabb");
    });
    it('f("zzooooppammmmmm") => "mmmmmmooooppzza"', function() {
      expect(algie_sortByConsecutive("zzooooppammmmmm")).toEqual("mmmmmmooooppzza");
    });
    it('f("zac") => "acz"', function() {
      expect(algie_sortByConsecutive("zac")).toEqual("acz");
    });
    it('f("zacc") => "acz"', function() {
      expect(algie_sortByConsecutive("zacc")).toEqual("ccaz");
    });
  });

  describe("(difficulty 4) algie_cupsRepartition", function() {
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
          {name: "cod", cups:3},
          {name: "alf", cups:4},
          {name: "ben", cups:4}
        ]);
    });
  });
});

