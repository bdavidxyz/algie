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

  describe("algie_completeWith. Complete array until given size, with given constant", function() {
    it("For example, [1, 2, 3] must have a size of 5. If not, complete with 42. Therefore, the final result should be [1, 2, 3, 42, 42]", function() {
      expect(algie_completeWith([1, 2, 3], 5, 42)).toEqual([1, 2, 3, 42, 42]);
    });
    it("[4, 0, -3] must have a size of 8. If not, complete with boolean false. Therefore, The final result should be [4, 0, -3, false, false, false, false, false]", function() {
      expect(algie_completeWith([4, 0, -3], 8, false)).toEqual([4, 0, -3, false, false, false, false, false]);
    });
  });

  describe("algie_elementAfter", function() {
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

  describe("algie_insertEverywhere", function() {
    it("'me' with 'b' everywhere will become 'bmbeb'", function() {
      expect(algie_insertEverywhere('foo', 'A')).toEqual('AfAoAoA');
    });
    it("'foo' with 'A' everywhere will become 'AfAoAoA'", function() {
      expect(algie_insertEverywhere('foo', 'A')).toEqual('AfAoAoA');
    });
  });

  describe("algie_extractApi. An API returns a huge number of localities. Extract unique postcode and cityname from this API.", function() {
    it('Look at this gist : https://bit.ly/api_1. The method should return an array with values ["43000 Le Puy-en-Velay", "43000 Espaly-Saint-Marcel", "43000 Polignac", "43000 Ceyssac", "43000 Aiguilhe"]', function() {
      expect(algie_extractApi( { "type": "FeatureCollection", "limit": 20, "version": "draft", "licence": "ODbL 1.0", "attribution": "BAN", "features": [ { "type": "Feature", "properties": { "importance": 0.6466, "type": "municipality", "adm_weight": 4, "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43157", "population": 18.8, "x": 769600, "y": 6438600, "name": "Le Puy-en-Velay", "citycode": "43157", "label": "Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.8769636363636364 }, "geometry": { "coordinates": [ 3.883955, 45.043141 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.0867, "type": "municipality", "adm_weight": 1, "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43089", "population": 3.6, "x": 767600, "y": 6438900, "name": "Espaly-Saint-Marcel", "citycode": "43089", "label": "Espaly-Saint-Marcel", "city": "Espaly-Saint-Marcel", "score": 0.8260636363636362 }, "geometry": { "coordinates": [ 3.858597, 45.046041 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.0767, "type": "municipality", "adm_weight": 1, "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43152", "population": 2.8, "x": 767600, "y": 6441500, "name": "Polignac", "citycode": "43152", "label": "Polignac", "city": "Polignac", "score": 0.8251545454545454 }, "geometry": { "coordinates": [ 3.858957, 45.06945 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.075, "type": "municipality", "adm_weight": 1, "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43045", "population": 0.4, "x": 765800, "y": 6437900, "name": "Ceyssac", "citycode": "43045", "label": "Ceyssac", "city": "Ceyssac", "score": 0.825 }, "geometry": { "coordinates": [ 3.835603, 45.037211 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.075, "type": "municipality", "adm_weight": 1, "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43002", "population": 1.6, "x": 769600, "y": 6439400, "name": "Aiguilhe", "citycode": "43002", "label": "Aiguilhe", "city": "Aiguilhe", "score": 0.825 }, "geometry": { "coordinates": [ 3.884069, 45.050344 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3792, "type": "street", "postcode": "43000", "name": "Avenue Maréchal Foch", "id": "43157_XXXX_68a415", "x": 769840.5, "y": 6437684.7, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Avenue Maréchal Foch 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6708363636363635 }, "geometry": { "coordinates": [ 3.886879, 45.034876 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.359, "type": "street", "postcode": "43000", "name": "Avenue Baptiste Marcet", "id": "43157_XXXX_e4846a", "x": 769815, "y": 6436476.6, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Avenue Baptiste Marcet 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6689999999999999 }, "geometry": { "coordinates": [ 3.886383, 45.024002 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3535, "type": "street", "postcode": "43000", "name": "Boulevard Gambetta", "id": "43157_XXXX_47e921", "x": 769097.8, "y": 6438790, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Gambetta 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6684999999999999 }, "geometry": { "coordinates": [ 3.877604, 45.044902 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3495, "type": "street", "postcode": "43000", "name": "Boulevard Carnot", "id": "43157_XXXX_d211a5", "x": 769239.8, "y": 6438896.1, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Carnot 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6681363636363635 }, "geometry": { "coordinates": [ 3.879497, 45.045753 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.347, "type": "street", "postcode": "43000", "name": "Boulevard Saint-Louis", "id": "43157_XXXX_ac3fce", "x": 769362.8, "y": 6438553, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Saint-Louis 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6679090909090908 }, "geometry": { "coordinates": [ 3.880936, 45.042742 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3446, "type": "street", "postcode": "43000", "name": "Avenue du Val Vert", "id": "43157_XXXX_b9ec45", "x": 769659.5, "y": 6437321.7, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Avenue du Val Vert 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.667690909090909 }, "geometry": { "coordinates": [ 3.884529, 45.031626 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3377, "type": "street", "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43157_XXXX_414a86", "x": 770521.1, "y": 6439104.2, "name": "Avenue des Belges", "citycode": "43157", "label": "Avenue des Belges 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6670636363636362, "alias": "route de brives" }, "geometry": { "coordinates": [ 3.895725, 45.047587 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3354, "type": "street", "postcode": "43000", "name": "Boulevard Maréchal Fayolle", "id": "43157_XXXX_d84781", "x": 769847.5, "y": 6438505.7, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Maréchal Fayolle 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6668545454545454 }, "geometry": { "coordinates": [ 3.887085, 45.042267 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3354, "type": "street", "postcode": "43000", "name": "Boulevard Bertrand de Doue", "id": "43157_XXXX_273513", "x": 770576.5, "y": 6438707.7, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Bertrand de Doue 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6668545454545454 }, "geometry": { "coordinates": [ 3.896001, 45.043812 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3346, "type": "street", "postcode": "43000", "name": "Place du Breuil", "id": "43157_XXXX_496c82", "x": 769559.9, "y": 6438477.6, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Place du Breuil 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6667818181818181 }, "geometry": { "coordinates": [ 3.883428, 45.042043 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3297, "type": "street", "postcode": "43000", "name": "Boulevard de la République", "id": "43157_XXXX_f85cce", "x": 770103.3, "y": 6438751, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard de la République 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6663363636363635 }, "geometry": { "coordinates": [ 3.890368, 45.04445 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3282, "type": "street", "postcode": "43000", "name": "Avenue d\'Ours Mons", "id": "43157_XXXX_39f371", "x": 770484.7, "y": 6438266.4, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Avenue d\'Ours Mons 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6661999999999999 }, "geometry": { "coordinates": [ 3.895142, 45.040048 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3268, "type": "street", "postcode": "43000", "name": "Avenue Antonin Raffier", "id": "43157_XXXX_ad3a62", "x": 772173.2, "y": 6437756.9, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Avenue Antonin Raffier 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6660727272727273 }, "geometry": { "coordinates": [ 3.916509, 45.035286 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.325, "type": "street", "postcode": "43000", "name": "Boulevard Maréchal Joffre", "id": "43157_XXXX_8eeef5", "x": 770337.3, "y": 6439134.9, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Maréchal Joffre 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6659090909090908 }, "geometry": { "coordinates": [ 3.893395, 45.047882 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3219, "type": "street", "postcode": "43000", "name": "Rue Pannessac", "id": "43157_1550_5151ab", "x": 769394.5, "y": 6438688.3, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Rue Pannessac 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6656272727272727 }, "geometry": { "coordinates": [ 3.881358, 45.043957 ], "type": "Point" } } ], "query": "43000" } ))
      .toBeArrayWithSameValuesAs(["43000 Le Puy-en-Velay", "43000 Espaly-Saint-Marcel", "43000 Polignac", "43000 Ceyssac", "43000 Aiguilhe"]);
    });
    it('Look at this gist : https://bit.ly/api_2. The method should return an array with same values as ["95000 Cergy", "34140 Mèze", "44380 Pornichet", "66420 Le Barcarès", "80000 Amiens"] ', function() {
      expect(algie_extractApi())
      .toBeArrayWithSameValuesAs(["95000 Cergy", "34140 Mèze", "44380 Pornichet", "66420 Le Barcarès", "80000 Amiens"]);
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

  describe("algie_arrayWithSameValues", function() {
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
