describe("Algie", function() {

  describe("(difficulty 0) algie_42", function() {
    it("should return 42", function() {
      expect(algie_42()).toEqual(42);
    });
  });

  describe("(difficulty 1) algie_ordinal_suffix", function() {
    it("should return 'st' if given number ends with 1", function() {
      expect(algie_ordinal_suffix(141)).toEqual('st');
    });
    it("should return 'nd' if given number ends with 2", function() {
      expect(algie_ordinal_suffix(242)).toEqual('nd');
    });
    it("should return 'rd' if given number ends with 3", function() {
      expect(algie_ordinal_suffix(7353)).toEqual('rd');
    });
    it("should return 'th' if given number ends with 4", function() {
      expect(algie_ordinal_suffix(44)).toEqual('th');
    });
    it("should return 'th' if given number ends with 7", function() {
      expect(algie_ordinal_suffix(5647)).toEqual('th');
    });
    it("should return 'th' if given number ends with 9", function() {
      expect(algie_ordinal_suffix(9)).toEqual('th');
    });
    it("should return '' if given arg is not a number", function() {
      expect(algie_ordinal_suffix(new Date())).toEqual('');
    });
  });


  describe("(difficulty 1) algie_is_array_of_string", function() {
    it("should return true if there are only strings in a simple array", function() {
      expect(algie_is_array_of_string(["a", "b", "c"])).toEqual(true);
    });
    it("should return true if there are only strings in a more complex array, with empty string and sentences", function() {
      expect(algie_is_array_of_string(["la", "do", "re", "", "fa", "a sentence", "another sentence"])).toEqual(true);
    });
    it("should return true if it is an empty array", function() {
      expect(algie_is_array_of_string([])).toEqual(true);
    });
    it("should return false if it is not an array", function() {
      expect(algie_is_array_of_string(42)).toEqual(false);
    });
    it("should return false if it there is something else than a String in the array", function() {
      expect(algie_is_array_of_string(["a", "b", 42, "c"])).toEqual(false);
    });
  });

  describe("(difficulty 1) algie_hide_that. Hides every char between first and last char.", function() {
    it("'hello' becomes 'h***o'", function() {
      expect(algie_hide_that('hello')).toEqual('h***o');
    });
    it("'funk' becomes 'f**k'", function() {
      expect(algie_hide_that('funk')).toEqual('f**k');
    });
    it("'a' becomes 'a'", function() {
      expect(algie_hide_that('a')).toEqual('a');
    });
    it("should hide a regexp, /^ImARegExp/, becomes '/*********/'", function() {
      expect(algie_hide_that(/^ImARegExp/)).toEqual('/*********/');
    });
    it("should hide a number, 4242, becomes '4**2'", function() {
      expect(algie_hide_that(4242)).toEqual('4**2');
    });
  });

  describe("(difficulty 1) algie_reversed_index", function() {
    it("should return the last element of array for index 0", function() {
      expect(algie_reversed_index([1, 2, 3, 4], 0)).toEqual(4);
    });
    it("should return the before-last element of array for index 1", function() {
      expect(algie_reversed_index([9, 32, 11, 9, 15, 87], 1)).toEqual(15);
    });
    it("should return the first element of array when index equals the length of the array minus 1", function() {
      var array = [3, 2, 5, 4, 0, 18, 43, 9];
      expect(algie_reversed_index(array, array.length - 1)).toEqual(3);
    });
  });

  describe("(difficulty 1) algie_none_of", function() {
    it("Should return true if all values inside array are false", function() {
      expect(algie_none_of([false, false, false])).toEqual(true);
    });
    it("Should return false if one value is true", function() {
      expect(algie_none_of([false, false, true])).toEqual(false);
    });
    it("Should return true if all values inside array are falsy", function() {
      expect(algie_none_of([undefined, null, false, 0])).toEqual(true);
    });
    it("Should return false if one value is truthy", function() {
      expect(algie_none_of([false, false, "a string", 0, undefined, null])).toEqual(false);
    });
    it("Should return false if multiple values are truthy", function() {
      expect(algie_none_of([false, false, "a string", 0, undefined, 42])).toEqual(false);
    });
    it("Should return false if all values are true", function() {
      expect(algie_none_of([true, true, true, true, true])).toEqual(false);
    });
    it("Should return true if array is empty", function() {
      expect(algie_none_of([])).toEqual(true);
    });
  });

  describe("(difficulty 1) algie_all_multiply_by", function() {
    it("should convert [1, 2, 3] into [2, 4, 6] when all elements are multiplied by 2", function() {
      expect(algie_all_multiply_by([1, 2, 3], 2)).toEqual([2, 4, 6]);
    });
    it("should convert [3, 7, 9, 11] into [9, 21, 27, 33] when all elements are multiplied by 3", function() {
      expect(algie_all_multiply_by([3, 7, 9, 11], 3)).toEqual([9, 21, 27, 33]);
    });
  });

  describe("(difficulty 1) algie_multiply_each", function() {
    it("[1, 2, 3] multiplied by [1, 2, 3] gives [1, 4, 9]", function() {
      expect(algie_multiply_each([1, 2, 3], [1, 2, 3])).toEqual([1, 4, 9]);
    });
    it("[2, 2, 2] multiplied by [1, 2, 3] gives [2, 4, 6]", function() {
      expect(algie_multiply_each([2, 2, 2], [1, 2, 3])).toEqual([2, 4, 6]);
    });
    it("[9, 41] multiplied by [6, 76] gives [54, 3116]", function() {
      expect(algie_multiply_each([9, 41], [6, 76])).toEqual([54, 3116]);
    });
  });

  describe("(difficulty 2) algie_camel_case_to_sentence", function() {
    it("should convert 'GlobalWarning' into 'global warning'", function() {
      expect(algie_camel_case_to_sentence('GlobalWarning')).toEqual('global warning');
    });
    it("should convert 'YouAreAnIncredibleDude' into 'i am an incredible dude'", function() {
      expect(algie_camel_case_to_sentence('YouAreAnIncredibleDude')).toEqual('you are an incredible dude');
    });
  });


  describe("(difficulty 2) algie_complete_with. Complete array until given size, with given constant", function() {
    it("For example, [1, 2, 3] must have a size of 5. If not, complete with 42. Therefore, the final result should be [1, 2, 3, 42, 42]", function() {
      expect(algie_complete_with([1, 2, 3], 5, 42)).toEqual([1, 2, 3, 42, 42]);
    });
    it("[4, 0, -3] must have a size of 8. If not, complete with boolean false. Therefore, The final result should be [4, 0, -3, false, false, false, false, false]", function() {
      expect(algie_complete_with([4, 0, -3], 8, false)).toEqual([4, 0, -3, false, false, false, false, false]);
    });
  });

  describe("(difficulty 2) algie_element_after", function() {
    it("element after 9 in array [8, 9, 33] is 33", function() {
      expect(algie_element_after([8, 9, 33], 9)).toEqual(33);
    });
    it("element after 42 in array [8, 9, 33, 42, 78, 13] is 78", function() {
      expect(algie_element_after([8, 9, 33, 42, 78, 13], 42)).toEqual(78);
    });
    it("element after 13 in array [8, 9, 33, 42, 78, 13] is 8 (yes ! in this exercise, element after the last one is the first one)", function() {
      expect(algie_element_after([8, 9, 33, 42, 78, 13], 42)).toEqual(78);
    });
  });

  describe("(difficulty 2) algie_insert_everywhere", function() {
    it("'me' with 'b' everywhere will become 'bmbeb'", function() {
      expect(algie_insert_everywhere('foo', 'A')).toEqual('AfAoAoA');
    });
    it("'foo' with 'A' everywhere will become 'AfAoAoA'", function() {
      expect(algie_insert_everywhere('foo', 'A')).toEqual('AfAoAoA');
    });
  });

  describe("(difficulty 2) algie_few_of", function() {
    it("Should return true if some (but not all) values inside array are true", function() {
      expect(algie_few_of([true, true, false])).toEqual(true);
    });
    it("Should return false if all values inside array are true", function() {
      expect(algie_few_of([true, true, true])).toEqual(false);
    });
    it("Should return true if some (but not all) values inside array are truthy", function() {
      expect(algie_few_of(["a string", null, {a:1}, true])).toEqual(true);
    });
    it("Should return false if all values inside array are truthy", function() {
      expect(algie_few_of(["a string", [1, 2], {a:1}, true])).toEqual(true);
    });
    it("Should return false if array is empty", function() {
      expect(algie_few_of([])).toEqual(false);
    });
  });

  describe("(difficulty 2) algie_before_max", function() {
    it("Should find a high number, the one before the maximum, in an array with numbers", function() {
      expect(algie_before_max([1, 5, 4, 3, 65, 23, 42, 55, 12])).toEqual(55);
    });
    it("Should find a high number, the one before the maximum, in an array with numbers and other types", function() {
      expect(algie_before_max(["1", "z", 4, 3, 65, /^/, 42, 51, 12])).toEqual(51);
    });
    it("Should find the high number, the one before the maximum, in an array with numbers, other types and null values", function() {
      expect(algie_before_max([1, null, 4, new Date(), undefined, 23, 42, "55", 12])).toEqual(23);
    });
  });

  describe("(difficulty 2) algie_generate_word", function() {
    it("A call to the function generate a word, size 6", function() {
      expect(algie_generate_word().length).toEqual(6);
    });
    it("Multiple call to the function always generate a different word", function() {
      expect(algie_generate_word()).not.toEqual(algie_generate_word());
    });
    it("1st char is always a lower-cased consonant (i.e. char others than a-e-i-o-u-y)", function() {
      expect(algie_generate_word().charAt(0)).toBeConsonant();
    });
    it("2nd char is always a lower-cased vowel (i.e. a-e-i-o-u-y)", function() {
      expect(algie_generate_word().charAt(1)).toBeVowel();
    });
    it("3rd char is always a lower-cased consonant", function() {
      expect(algie_generate_word().charAt(2)).toBeConsonant();
    });
    it("4th char is always a lower-cased vowel", function() {
      expect(algie_generate_word().charAt(3)).toBeVowel();
    });
    it("5th char is always a lower-cased consonant", function() {
      expect(algie_generate_word().charAt(4)).toBeConsonant();
    });
    it("6th char is always a lower-cased vowel", function() {
      expect(algie_generate_word().charAt(5)).toBeVowel();
    });
  });

  describe("(difficulty 2) algie_cut_and_multiply_number", function() {
    it("42 is made of 4 and 2. Therefore, function must return 8 (4*2)", function() {
      expect(algie_cut_and_multiply_number(42)).toEqual(8);
    });
    it("263 is made of 2, 6 and 3. Therefore, function must return 36 (2*6*3)", function() {
      expect(algie_cut_and_multiply_number(263)).toEqual(36);
    });
    it("630 is made of 6, 3 and 0. Therefore, function must return 0 (6*3*0)", function() {
      expect(algie_cut_and_multiply_number(630)).toEqual(0);
    });
    it("7211 is made of 7, 2, 1 and 1. Therefore, function must return 14 (7*2*1*1)", function() {
      expect(algie_cut_and_multiply_number(7211)).toEqual(14);
    });
  });

  describe("(difficulty 2) algie_string_to_hash", function() {
    it("should convert sentence 'hello abc' to hash {hello:{vowels:2, consonants:3}, abc:{vowels:1, consonants:2}}", function() {
      expect(algie_string_to_hash('hello abc')).toEqual({hello:{vowels:2, consonants:3}, abc:{vowels:1, consonants:2}});
    });
    it("should convert sentence 'uzero foo eh' to hash {uzero:{vowels:3, consonants:2}, foo:{vowels:2, consonants:1}, eh:{vowels:1, consonants:1}}", function() {
      expect(algie_string_to_hash('uzero foo eh')).toEqual({uzero:{vowels:3, consonants:2}, foo:{vowels:2, consonants:1}, eh:{vowels:1, consonants:1}});
    });
  });

  describe("(difficulty 2) algie_largest_string", function() {
    it("returns the largest String in an array of String (example 1)", function() {
      expect(algie_largest_string(["axel", "bob", "alice", "olaf"])).toEqual("alice");
    });
    it("returns the largest String in an array of String (example 2)", function() {
      expect(algie_largest_string(["hello", "how", "are", "you", "my", "friend"])).toEqual("friend");
    });
  });

  describe("(difficulty 2) algie_numbers_after", function() {
    it("returns the 6 next numbers after a given number (example 1)", function() {
      expect(algie_numbers_after(23)).toEqual([24, 25, 26, 27, 28, 29]);
    });
    it("returns the 6 next numbers after a given number (example 2)", function() {
      expect(algie_numbers_after(42)).toEqual([43, 44, 45, 46, 47, 48]);
    });
  });

  describe("(difficulty 2) algie_index_hash. It returns the element whose key is in nth position in the alphabetical order", function() {
    it("Should return 22 with hash {a:11, b:22, c:33}, and index 1", function() {
      expect(algie_index_hash({a:11, b:22, c:33}, 1)).toEqual(22);
    });
    it("Should return 33 with hash {d:44, f:66, e:55, a:11, b:22, c:33}, and index 2", function() {
      expect(algie_index_hash({d:44, f:66, e:55, a:11, b:22, c:33}, 2)).toEqual(33);
    });
    it("Should return 'amend' with hash {foo: 'foo', amend:'amend'}, and index 0", function() {
      expect(algie_index_hash({foo: 'foo', amend:'amend'}, 0)).toEqual("amend");
    });
    it("Should return 0 if hash is empty", function() {
      expect(algie_index_hash({}, 4)).toEqual(0);
    });
    it("Should return 0 when no arg given", function() {
      expect(algie_index_hash()).toEqual(0);
    });
  });


  describe("(difficulty 2) algie_dirty_string", function() {
    it("convert a badly formatted string in an array of ordered numbers without duplication (example 1)", function() {
      expect(algie_dirty_string(',4, 2 , 2,1,  ,')).toEqual([1, 2, 4]);
    });
    it("convert a badly formatted string in an array of ordered numbers without duplication (example 2)", function() {
      expect(algie_dirty_string('12 ,34, 41, 12, 22  , 2,')).toEqual([2, 12, 22, 34, 41]);
    });
    it("returns an empty array if something else than Integer is in the string", function() {
      expect(algie_dirty_string(',4, 2 , 2,1, 3, 5 ,1.1')).toEqual([]);
    });
    it("returns an empty array if something a wrong type is given", function() {
      expect(algie_dirty_string(new Date())).toEqual([]);
    });
  });

  describe("(difficulty 2) algie_is_decreasing", function() {
    it("returns true if the args are decreasing (example 1)", function() {
      expect(algie_is_decreasing(5, 4, 3, 2)).toEqual(true);
    });
    it("returns true if the args are decreasing (example 2)", function() {
      expect(algie_is_decreasing(15, 4, -3, -12, -22)).toEqual(true);
    });
    it("returns false if the args are NOT continuously decreasing", function() {
      expect(algie_is_decreasing(87, 54, 32, 43, 11, 5, 1)).toEqual(false);
    });
    it("returns false if the args are increasing", function() {
      expect(algie_is_decreasing(1, 2, 3, 4)).toEqual(false);
    });
  });

  describe('(difficulty 2) algie_last_will_be_first. Invert first and last element of an array', function() {
    it('f([1, 2, 3, 4]) => [4, 2, 3, 1]', function() {
      expect(algie_last_will_be_first("[1, 2, 3, 4]")).toEqual("[4, 2, 3, 1]");
    });
    it('f([12, 45, 8, 22, 89]) => [89, 45, 8, 22, 12]', function() {
      expect(algie_last_will_be_first("[12, 45, 8, 22, 89]")).toEqual("[89, 45, 8, 22, 12]");
    });
  });

  describe('(difficulty 2) algie_simplify_word. Returns first and last character of a string, and the number of character between.', function() {
    it('f("accessibility") => "a11y"', function() {
      expect(algie_simplify_word("accessibility")).toEqual("a11y");
    });
    it('f("internationalization") => "i18n"', function() {
      expect(algie_simplify_word("internationalization")).toEqual("i18n");
    });
    it('f("aaa") => "a1a"', function() {
      expect(algie_simplify_word("aaa")).toEqual("a1a");
    });
  });

  describe('(difficulty 2) algie_initials', function() {
    it('f("hello world") => "HW"', function() {
      expect(algie_initials("hello world")).toEqual("HW");
    });
    it('f("One great journey") => "OGJ"', function() {
      expect(algie_simplify_word("One great journey")).toEqual("OGJ");
    });
  });

  describe('(difficulty 2) algie_print_to_zero', function() {
    it('8 becomes "76543210"', function() {
      expect(algie_print_to_zero(8)).toEqual(76543210);
    });
    it('5 becomes "43210"', function() {
      expect(algie_print_to_zero(5)).toEqual(43210);
    });
    it('-12 becomes "-11-10-9-8-7-6-5-4-3-2-10"', function() {
      expect(algie_print_to_zero(-12)).toEqual("-11-10-9-8-7-6-5-4-3-2-10");
    });
  });

  describe("(difficulty 2) algie_find_multiplicators. Find the highest divisor of given number (excerpt itself), and return the 2 numbers, when multiplied, give the one given in parameter.", function() {
    it("10 can be divided by 1, 2, 5, 10. Therefore, f(10) return [5, 2]", function() {
      expect(algie_find_multiplicators(10)).toEqual([5, 2]);
    });
    it("33 can be divided by 1, 3, 11, 33. Therefore, f(33) return [11, 3]", function() {
      expect(algie_find_multiplicators(33)).toEqual([11, 3]);
    });
    it("49 and can be divided by 1, 7, 49. Therefore, f(49) return [7, 7]", function() {
      expect(algie_find_multiplicators(49)).toEqual([7, 7]);
    });
  });

  describe('(difficulty 2) algie_nice_draw', function() {
    it('f("*", "-", 2) => "*-"', function() {
      expect(algie_nice_draw("*", "-", 2)).toEqual("*-");
    });
    it('f("*", "-", 4) => "*-*-"', function() {
      expect(algie_nice_draw("*", "-", 4)).toEqual("*-*-");
    });
    it('f("o", "a", 3) => "oao"', function() {
      expect(algie_nice_draw("o", "a", 3)).toEqual("oao");
    });
    it('f("o", "b", "a", 6) => "obaoba"', function() {
      expect(algie_nice_draw("o", "b", "a", 6)).toEqual("obaoba");
    });
  });

  describe('(difficulty 2) algie_foo_bar_qix_zzz. Returns "foo" if number can be divided by 3, "bar" by 5, "qix" by 15, "zzz" in every other case', function() {
    it('should return "foo" for 3 or 9', function() {
      expect(algie_foo_bar_qix_zzz(3)).toEqual("foo");
      expect(algie_foo_bar_qix_zzz(9)).toEqual("foo");
    });
    it('should return "bar" for 5 or 50', function() {
      expect(algie_foo_bar_qix_zzz(5)).toEqual("bar");
      expect(algie_foo_bar_qix_zzz(50)).toEqual("bar");
    });
    it('should return "qix" for 15 or 60', function() {
      expect(algie_foo_bar_qix_zzz(15)).toEqual("qix");
      expect(algie_foo_bar_qix_zzz(60)).toEqual("qix");
    });
    it('should return "zzz" for 0, or null, or 7', function() {
      expect(algie_foo_bar_qix_zzz(0)).toEqual("zzz");
      expect(algie_foo_bar_qix_zzz(null)).toEqual("zzz");
      expect(algie_foo_bar_qix_zzz(7)).toEqual("zzz");
    });
  });

  describe("(difficulty 3) algie_strip_common_path", function() {
    it("['/myDir/a.txt', '/myDir/b.txt', '/myDir/c.txt'] becomes ['/a.txt', '/b.txt', '/c.txt'] because /myDir is the common path", function() {
      expect(algie_strip_common_path(['/myDir/a.txt', '/myDir/b.txt', '/myDir/c.txt'])).toEqual(['/a.txt', '/b.txt', '/c.txt']);
    });
    it("['/www/workspace/zz.txt', '/www/user/zz.txt'] becomes ['/workspace/zz.txt', '/user/zz.txt'] because /www is the common path", function() {
      expect(algie_strip_common_path(['/www/workspace/zz.txt', '/www/user/zz.txt'])).toEqual(['/workspace/zz.txt', '/user/zz.txt']);
    });
  });

  describe("(difficulty 3) algie_to_prop_array", function() {
    it("transforms {a:11, b:42} into [{prop:'a', value:11}, {prop:'b', value:42}]", function() {
      expect(algie_to_prop_array({a:11, b:42})).toEqual([{prop:'a', value:11}, {prop:'b', value:42}]);
    });
    it("transforms {foo:'sth', bar:'z', me:'too'} into [{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]", function() {
      expect(algie_to_prop_array({foo:"sth", bar:"z", me:"too"})).toEqual([{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]);
    });
  });

  describe("(difficulty 3) algie_from_prop_array", function() {
    it("transforms [{prop:'a', value:'11'}, {prop:'b', value:'42'}] into {a:11, b:42}", function() {
      expect(algie_from_prop_array([{prop:'a', value:'11'}, {prop:'b', value:'42'}])).toEqual({a:11, b:42});
    });
    it("transforms {foo:'sth', bar:'z', me:'too'} into [{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]", function() {
      expect(algie_from_prop_array({foo:"sth", bar:"z", me:"too"})).toEqual([{prop:'foo', value:'sth'}, {prop:'bar', value:'z'}, {prop:'me', value:'too'}]);
    });
  });

  describe("(difficulty 3) algie_missing_number", function() {
    it("In the 2-dimensional array [['-1', '-2', '1'], [], ['2']], the missing number is 0", function() {
      expect(algie_missing_number([['-1', '-2', '1'], [], ['2']])).toEqual(0);
    });
    it("In the 2-dimensional array [['0', '-1','1', '2', null, '4'], ['3', '6']], the missing number is 5", function() {
      expect(algie_missing_number([['0', '-1', '1', '2', null, '4'], ['3', '6']])).toEqual(5);
    });
    it("In the 2-dimensional array [['9', null, '7', '6'], [null, '5', '4', '3', '1', '2']], the missing number is 8", function() {
      expect(algie_missing_number([['9', null, '7', '6'], [null, '5', '4', '3', '1', '2']])).toEqual(8);
    });
  });

  describe('(difficulty 3) algie_closest_of2000. Find the Date that is closest to the 1st Jan. 2000', function() {
    it('03.13.2006, 06.13.1995, 12.08.2012, 05.03.2019 => The 2nd Date is closest to 1st Jan. 2000', function() {
      var found_date = algie_closest_of2000([new Date('March 13, 2006 03:24:00'), new Date('June 13, 1995 03:24:00'), new Date('December 8, 2012 03:24:00'), new Date('May 3, 2019 03:24:00')]);
      expect(found_date.getTime()).toEqual(803006640000); // June 13, 1995 03:24:00
    });
    it('02.02.1997, 02.02.1998, 02.02.1999, 01.01.1999 => The 3rd Date is closest to 1st Jan. 2000', function() {
      var found_date = algie_closest_of2000([new Date('February 02, 1997 03:24:00'), new Date('February 02, 1998 03:24:00'), new Date('February 02, 1999 03:24:00'), new Date('January 01, 1999 03:24:00')]);
      expect(found_date.getTime()).toEqual(917922240000); // February 02, 1999 03:24:00
    });
  });

  describe("(difficulty 3) algie_array_with_same_values", function() {
    it("Should return true if given arrays are the same", function() {
      expect(algie_array_with_same_values([1, 5, 2], [1, 5, 2])).toEqual(true);
    });
    it("Should return true if given arrays are the same, but with elements in different order (example with Integer)", function() {
      expect(algie_array_with_same_values([1, 5, 2], [5, 2, 1])).toEqual(true);
    });
    it("Should return true if given arrays are the same, but with elements in different order (example with String)", function() {
      expect(algie_array_with_same_values(["ef", "ab", "zz", "ty"], ["ty", "ab", "ef", "zz"])).toEqual(true);
    });
    it("Should return false if given arrays are not the same (easy example)", function() {
      expect(algie_array_with_same_values([1, 5, 2], ["a", "b"])).toEqual(false);
    });
    it("Should return false if given arrays are not the same (tricky example)", function() {
      expect(algie_array_with_same_values([1, 5, 2, null], [1, 5, 2, undefined])).toEqual(false);
    });
    it("Should return false if wrong types are given as parameter", function() {
      expect(algie_array_with_same_values(/^/, /^/)).toEqual(false);
    });
    it("Should return false if no array are given", function() {
      expect(algie_array_with_same_values()).toEqual(false);
    });
  });

  describe('(difficulty 3) algie_reset_all_keys_but. Reset all keys of a hash, excerpt one', function() {
    it('f({a:1, b:2, c:3}, "b", 0) should be {a:0, b:2, c:0}', function() {
      expect(algie_reset_all_keys_but({a:1, b:2, c:3}, "b", 0)).toEqual({a:0, b:2, c:0});
    });
    it('f({foo:"yes", bar:"no", qix:"maybe", not: "not"}, "qix", "z") should be {foo:"z", bar:"z", qix:"maybe", not: "z"}', function() {
      expect(algie_reset_all_keys_but({foo:"yes", bar:"no", qix:"maybe", not: "not"}, "qix", "z")).toEqual({foo:"z", bar:"z", qix:"maybe", not: "z"});
    });
    it('Should return empty object if first param is not a plain object', function() {
      expect(algie_reset_all_keys_but([], "qix", "z")).toEqual({});
    });
    it('Should return empty object if second param is not a String', function() {
      expect(algie_reset_all_keys_but({a:1, b:2, c:3}, 42, 0)).toEqual({});
    });
    it('Last param is optional', function() {
      expect(algie_reset_all_keys_but({a:1, b:2, c:3}, "c")).toEqual({a:undefined, b:undefined, c:3});
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

  describe('(difficulty 3) algie_occurences_of', function() {
    it('"aba" should be converted into {a:2, b:1}', function() {
      expect(algie_occurences_of("aba")).toEqual({a:2, b:1});
    });
    it('"hello" should be converted into {h:1, e:1, l:2, o:1}', function() {
      expect(algie_occurences_of("hello")).toEqual({h:1, e:1, l:2, o:1});
    });
    it('"Abba" should be converted into {a:2, b:2}', function() {
      expect(algie_occurences_of("Abba")).toEqual({a:2, b:2});
    });
  });

  describe("(difficulty 3) algie_swap_by_pair", function() {
    it("['a', 'b'] becomes ['b', 'a']", function() {
      expect(algie_swap_by_pair(['a', 'b'])).toEqual(['b', 'a']);
    });
    it("['a', 'b', 'c', 'd'] becomes ['b', 'a', 'd', 'c']", function() {
      expect(algie_swap_by_pair(['a', 'b', 'c', 'd'])).toEqual(['b', 'a', 'd', 'c']);
    });
    it("[1, 2, 3, 4, 5, 6] becomes [2, 1, 4, 3, 6, 5]", function() {
      expect(algie_swap_by_pair([1, 2, 3, 4, 5, 6])).toEqual([2, 1, 4, 3, 6, 5]);
    });
  });

  describe('(difficulty 3) algie_add2_dates', function() {
    it('1st january 2000, added to 1st january 2000, gives 1st january 4000', function() {
      var first_jan_2000 = new Date('January 1, 2000 00:00:01')
      var year0 = new Date(first_jan_2000.getTime());
      year0.setFullYear(0);
      expect(algie_add2_dates(first_jan_2000, first_jan_2000)).toEqual("foo");
    });
    it('1st january 2000, added to 1st january 3000, gives 1st january 5000', function() {
      var first_jan_2000 = new Date('January 1, 2000 00:00:01')
      var first_jan_3000 = new Date('January 1, 3000 00:00:01')
      expect(algie_add2_dates(first_jan_2000, first_jan_3000)).toEqual("foo");
    });
  });

  describe('(difficulty 3) algie_merge_hashes. For two hashes of the same size, whose keys are sorted in alphabetical order, return a hash that have keys of 1st hash but values of second hash', function() {
    it('f({a:1}, {e:8}) => {a:8}', function() {
      expect(algie_merge_hashes({a:1}, {e:8})).toEqual({a:8});
    });
    it('f({z:1, j:3}, {m:4,b:9}) => {j:9,z:4}', function() {
      expect(algie_merge_hashes({a:1}, {e:8})).toEqual({a:8});
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

  describe('(difficulty 3) algie_encrypt_sentence', function() {
    it('"a bc" is transformed into "1 2-3"', function() {
      expect(algie_encrypt_sentence("a bc")).toEqual("1 2-3");
    });
    it('"aa BBB" is transformed into "1-1 2-2-2"', function() {
      expect(algie_encrypt_sentence("aa BBB")).toEqual("1-1 2-2-2");
    });
    it('"e êÉ" is transformed into "5 5-5"', function() {
      expect(algie_encrypt_sentence("e êÉ")).toEqual("5 5-5");
    });
  });

  describe("(difficulty 3) algie_array_of_boolean. Given an array of numbers, returns an array of boolean. If the number exist in the first array, then resulting_array[number] = true. All other elements in resulting array are false.", function() {
    it("[0, 2] becomes [true, false, true]", function() {
      expect(algie_array_of_boolean([0, 2])).toEqual([true, false, true]);
    });
    it("[0, 1, 4] becomes [true, true, false, false, true]", function() {
      expect(algie_array_of_boolean([0, 1, 4])).toEqual([true, true, false, false, true]);
    });
    it("[5] becomes [false, false, false, false, false, true]", function() {
      expect(algie_array_of_boolean([5])).toEqual([false, false, false, false, false, true]);
    });
  });

  describe("(difficulty 3) algie_max_of_consecutive_in_array", function() {
    it("should return 3 when there is 3 consecutive elements in array", function() {
      expect(algie_max_of_consecutive_in_array(["a", "a", "c", "c", "c", "z"])).toEqual(3);
    });
    it("should return 5 when there is 5 consecutive elements in array, with same element in multiple places", function() {
      expect(algie_max_of_consecutive_in_array(["a", "a", "c", "a", "a", "a", "a", "a"])).toEqual(5);
    });
    it("should return 4 when there is only the 4 same elements in array", function() {
      expect(algie_max_of_consecutive_in_array(["a", "a", "a", "a"])).toEqual(4);
    });
    it("should return 0 when array is empty", function() {
      expect(algie_max_of_consecutive_in_array([])).toEqual(4);
    });
  });

  describe('(difficulty 3) algie_fire_langage. After each vowel, add a "f", followed by the vowel', function() {
    it('f("a") => "afa"', function() {
      expect(algie_fire_langage("a")).toEqual("afa");
    });
    it('f("hello") => "hefellofo"', function() {
      expect(algie_fire_langage("hello")).toEqual("hefellofo");
    });
    it('f("hello world") => "hefellofo woforld"', function() {
      expect(algie_fire_langage("hello world")).toEqual("hefellofo woforld");
    });
  });

  describe('(difficulty 3) algie_robust_array. The function returns true only each element of the given array, is greater than the sum of the remaining elements', function() {
    it('Returns true for an array with 7, 3, 2 (because 7 is greater than 3+2, and 3 is greater than 2)', function() {
      expect(algie_robust_array([7, 3, 2])).toEqual(true);
    });
    it('Returns false for an array with 4, 3, 2 (because 4 is not greater than 3+2)', function() {
      expect(algie_robust_array([4, 3, 2])).toEqual(false);
    });
    it('Returns true for an array with 17, 9, 4, 2, 1', function() {
      expect(algie_robust_array([17, 9, 4, 2, 1])).toEqual(true);
    });
    it('Returns false for an array with 1, 2, 4, 9, 17 - increasing suit cannot work', function() {
      expect(algie_robust_array([1, 2, 4, 9, 17])).toEqual(false);
    });
    it('Returns false for an array with 17, 9, "4.1", 2, 1.01 - wrong type inside array not permitted', function() {
      expect(algie_robust_array([17, 9, "4.1", 2, 1.01])).toEqual(false);
    });
    it('Returns false for a wrong type (a Date is given instead of an array)', function() {
      expect(algie_robust_array(new Date())).toEqual(false);
    });
    it('Returns true for an array with 17, 9, 4.1, 2, 1.01 - floats are ok', function() {
      expect(algie_robust_array([17, 9, 4.1, 2, 1.01])).toEqual(true);
    });
    it('Returns true for an array with 21, 8, 3, 2, 0, -4, -45 (negatives are ok)', function() {
      expect(algie_robust_array([21, 8, 3, 2, 0, -4, -45])).toEqual(true);
    });
    it('Returns false for an array with 21, 8, 3, -2, 2', function() {
      expect(algie_robust_array([21, 8, 3, -2, 2])).toEqual(false);
    });
    it('Returns true for an empty array', function() {
      expect(algie_robust_array([])).toEqual(true);
    });
    it('Returns true for an array with one element', function() {
      expect(algie_robust_array([23])).toEqual(true);
    });
    it('Returns true for an array with two element, whose first element is greater, for ex. 54 and 21', function() {
      expect(algie_robust_array([54, 21])).toEqual(true);
    });
    it('Returns false for an array with two element, whose last element is greater, for ex. 19 and 89', function() {
      expect(algie_robust_array([19, 89])).toEqual(false);
    });
    it('Returns false for an array with two same elements, for ex. 34 and 34', function() {
      expect(algie_robust_array([34, 34])).toEqual(false);
    });
    it('Returns false for an array with three same elements, for ex. 56, 56, 56', function() {
      expect(algie_robust_array([56, 56, 56])).toEqual(false);
    });
  });

  describe('(difficulty 4) algie_actual_matches. Returns the number of elements that exactly match (i.e. same value same position), and the number of element that doesn\'t (ie value match, but not position)', function() {
    it('f([1, 2, 2, 1, 0], [1, 3, 3, 4, 5]) => "1 exact match and 0 incorrect match"', function() {
      expect(algie_actual_matches([1, 2, 2, 1, 0], [1, 3, 3, 4, 5])).toEqual("1 exact match and 0 incorrect match");
    });
    it('f([1, 2, 2], [2, 1, 2]) => "1 exact match and 2 incorrect match"', function() {
      expect(algie_actual_matches([1, 2, 2], [2, 1, 2])).toEqual("1 exact match and 2 incorrect match");
    });
    it('f([0, 1], [2, 2]) => "0 exact match and 0 incorrect match"', function() {
      expect(algie_actual_matches([0, 1], [2, 2])).toEqual("0 exact match and 0 incorrect match");
    });
    it('f([0, 1], [1, 2]) => "0 exact match and 1 incorrect match"', function() {
      expect(algie_actual_matches([0, 1], [1, 2])).toEqual("0 exact match and 1 incorrect match");
    });
  });

  describe('(difficulty 4) algie_sort_by_consecutive. Sort a string so that char that have the most consecutive elements appears first.', function() {
    it('f("bbaaa") => "aaabb"', function() {
      expect(algie_sort_by_consecutive("bbaaa")).toEqual("aaabb");
    });
    it('f("zzooooppammmmmm") => "mmmmmmooooppzza"', function() {
      expect(algie_sort_by_consecutive("zzooooppammmmmm")).toEqual("mmmmmmooooppzza");
    });
    it('f("zac") => "acz"', function() {
      expect(algie_sort_by_consecutive("zac")).toEqual("acz");
    });
    it('f("zacc") => "ccaz"', function() {
      expect(algie_sort_by_consecutive("zacc")).toEqual("ccaz");
    });
  });

  describe('(difficulty 4) algie_sort_by_then_by.', function() {
    it('Should sort by status first, if equal, should sort by salary, if equal, should sort by name', function() {
      expect(algie_sort_by_then_by()).toEqual();
    });
  });

  describe('(difficulty 4) algie_string_weight. Returns the sum of each letter in a sentence. "a" is 1, "b" is 2, etc.', function() {
    it('Should return 6 for String "abc", because "a" has a weight of 1, "b" a weight of 2, and "c" a weight of 3. Sum of 1, 2, 3 is 6', function() {
      expect(algie_string_weight("abc")).toEqual(6);
    });
    it('Should return 6 for String "a b c", because spaces count as 0', function() {
      expect(algie_string_weight("a b c")).toEqual(6);
    });
    it('Should return 6 for String "A B c", because uppercase is same weight as lowercase', function() {
      expect(algie_string_weight("A B c")).toEqual(6);
    });
    it('Should return 6 for String "â B c", because a letter with an accent is same weight as without accent.', function() {
      expect(algie_string_weight("â B c")).toEqual(6);
    });
    it('Should return 6 for String "â8B9c", because numbers do not count', function() {
      expect(algie_string_weight("â8B9c")).toEqual(6);
    });
    it('Should return 124 for String "Hello Wörld 3"', function() {
      expect(algie_string_weight("Hello Wörld 3")).toEqual(124);
    });
    it('Should return 0 for unexpected type (a regexp for example)', function() {
      expect(algie_string_weight(/^/)).toEqual(0);
    });
  });

  describe('(difficulty 4) algie_roll2_same_dices(nbOfFaces). Returns an object where keys are sum of 2 dices, and values the probability (a float, as percentage) of the key to occur.', function() {
    it('For 2 dices with 2 faces, shoud return {2: 25, 3: 50, 4: 25} ', function() {
      expect(algie_roll2_same_dices(2)).toEqual({2: 25, 3: 50, 4: 25});
    });
    it('For 2 dices with 3 faces, shoud return {2: 11.11, 3: 22.22, 4: 33.33, 5: 22.22, 6: 11.11} ', function() {
      expect(algie_roll2_same_dices(3)).toEqual({2: 11.11, 3: 22.22, 4: 33.33, 5: 22.22, 6: 11.11});
    });
    it('For 2 dices with 6 faces, shoud return {2: 2.78, 3: 5.56, 4: 8.33, 5: 11.11, 6: 13.89, 7: 16.67, 8: 13.89, 9: 11.11, 10: 8.33, 11: 5.56, 12: 2.78}', function() {
      expect(algie_roll2_same_dices(6)).toEqual({2: 2.78, 3: 5.56, 4: 8.33, 5: 11.11, 6: 13.89, 7: 16.67, 8: 13.89, 9: 11.11, 10: 8.33, 11: 5.56, 12: 2.78});
    });
    it('For a wrong input, return an empty object', function() {
      expect(algie_roll2_same_dices(new Date())).toEqual({});
    });
  });

  describe('(difficulty 4) algie_uniq_anagrams. Find the number of anagrams that are a palindrom for a given String', function() {
    it('should return 0 for empty String', function() {
      expect(algie_uniq_anagrams("")).toEqual(0);
    });
    it('should return 0 for unexpected argument', function() {
      expect(algie_uniq_anagrams(new Date())).toEqual(0);
    });
    it('should return 1 for "a"', function() {
      expect(algie_uniq_anagrams("a")).toEqual(1);
    });
    it('should return 2 for "abba"', function() {
      expect(algie_uniq_anagrams("abba")).toEqual(2);
    });
    it('should return 6 for "okayako"', function() {
      expect(algie_uniq_anagrams("okayako")).toEqual(6);
    });
  });

  describe("(difficulty 4) algie_cups_repartition", function() {
    it("Should give each kid the same number of cups, for example 2 kids with 8 cups", function() {
      expect(algie_cups_repartition([
          {name: "bob", cups:1},
          {name: "jen", cups:7}
        ])).toEqual([
          {name: "bob", cups:4},
          {name: "jen", cups:4}
        ]);
    });
    it("Should give each kid the same number of cups, for example 3 kids with 9 cups", function() {
      expect(algie_cups_repartition([
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
      expect(algie_cups_repartition([
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

