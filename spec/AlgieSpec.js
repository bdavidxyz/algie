describe("Algie", function() {

  describe("algie_42", function() {
    it("should return 42", function() {
      expect(algie_42()).toEqual(42);
    });
  });


  describe("algie_camelCaseToSentence", function() {
    it("should convert 'GlobalWarning' into 'global warning'", function() {
      expect(algie_camelCaseToSentence('GlobalWarning')).toEqual('global warning');
    });
    it("should convert 'IAmAnIncredibleDude' into 'i am an incredible dude'", function() {
      expect(algie_camelCaseToSentence('IAmAnIncredibleDude')).toEqual('i am an incredible dude');
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

  describe("algie_reversedIndex", function() {
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

  describe("algie_none", function() {
    it("Should return true if all values inside array are false", function() {
      expect(algie_none([false, false, false])).toEqual(true);
    });
    it("Should return false if one value is true", function() {
      expect(algie_none([false, false, true])).toEqual(false);
    });
    it("Should return true if all values inside array are falsy", function() {
      expect(algie_none([undefined, null, false, 0])).toEqual(true);
    });
    it("Should return false if one value is truthy", function() {
      expect(algie_none([false, false, "a string", 0, undefined, null])).toEqual(false);
    });
    it("Should return false if multiple values are truthy", function() {
      expect(algie_none([false, false, "a string", 0, undefined, 42])).toEqual(false);
    });
    it("Should return false if all values are true", function() {
      expect(algie_none([true, true, true, true, true])).toEqual(false);
    });
    it("Should return true if array is empty", function() {
      expect(algie_none([])).toEqual(true);
    });
  });

  describe("algie_extractApi. An API returns a huge number of localities. Extract unique postcode and cityname from this API.", function() {
    it('Look at this gist : https://bit.ly/api_1. algie_extractApi should return an array with same values as ["43000 Le Puy-en-Velay", "43000 Espaly-Saint-Marcel", "43000 Polignac", "43000 Ceyssac", "43000 Aiguilhe"]', function() {
      expect(algie_extractApi( { "type": "FeatureCollection", "limit": 20, "version": "draft", "licence": "ODbL 1.0", "attribution": "BAN", "features": [ { "type": "Feature", "properties": { "importance": 0.6466, "type": "municipality", "adm_weight": 4, "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43157", "population": 18.8, "x": 769600, "y": 6438600, "name": "Le Puy-en-Velay", "citycode": "43157", "label": "Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.8769636363636364 }, "geometry": { "coordinates": [ 3.883955, 45.043141 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.0867, "type": "municipality", "adm_weight": 1, "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43089", "population": 3.6, "x": 767600, "y": 6438900, "name": "Espaly-Saint-Marcel", "citycode": "43089", "label": "Espaly-Saint-Marcel", "city": "Espaly-Saint-Marcel", "score": 0.8260636363636362 }, "geometry": { "coordinates": [ 3.858597, 45.046041 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.0767, "type": "municipality", "adm_weight": 1, "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43152", "population": 2.8, "x": 767600, "y": 6441500, "name": "Polignac", "citycode": "43152", "label": "Polignac", "city": "Polignac", "score": 0.8251545454545454 }, "geometry": { "coordinates": [ 3.858957, 45.06945 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.075, "type": "municipality", "adm_weight": 1, "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43045", "population": 0.4, "x": 765800, "y": 6437900, "name": "Ceyssac", "citycode": "43045", "label": "Ceyssac", "city": "Ceyssac", "score": 0.825 }, "geometry": { "coordinates": [ 3.835603, 45.037211 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.075, "type": "municipality", "adm_weight": 1, "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43002", "population": 1.6, "x": 769600, "y": 6439400, "name": "Aiguilhe", "citycode": "43002", "label": "Aiguilhe", "city": "Aiguilhe", "score": 0.825 }, "geometry": { "coordinates": [ 3.884069, 45.050344 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3792, "type": "street", "postcode": "43000", "name": "Avenue Maréchal Foch", "id": "43157_XXXX_68a415", "x": 769840.5, "y": 6437684.7, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Avenue Maréchal Foch 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6708363636363635 }, "geometry": { "coordinates": [ 3.886879, 45.034876 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.359, "type": "street", "postcode": "43000", "name": "Avenue Baptiste Marcet", "id": "43157_XXXX_e4846a", "x": 769815, "y": 6436476.6, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Avenue Baptiste Marcet 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6689999999999999 }, "geometry": { "coordinates": [ 3.886383, 45.024002 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3535, "type": "street", "postcode": "43000", "name": "Boulevard Gambetta", "id": "43157_XXXX_47e921", "x": 769097.8, "y": 6438790, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Gambetta 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6684999999999999 }, "geometry": { "coordinates": [ 3.877604, 45.044902 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3495, "type": "street", "postcode": "43000", "name": "Boulevard Carnot", "id": "43157_XXXX_d211a5", "x": 769239.8, "y": 6438896.1, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Carnot 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6681363636363635 }, "geometry": { "coordinates": [ 3.879497, 45.045753 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.347, "type": "street", "postcode": "43000", "name": "Boulevard Saint-Louis", "id": "43157_XXXX_ac3fce", "x": 769362.8, "y": 6438553, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Saint-Louis 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6679090909090908 }, "geometry": { "coordinates": [ 3.880936, 45.042742 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3446, "type": "street", "postcode": "43000", "name": "Avenue du Val Vert", "id": "43157_XXXX_b9ec45", "x": 769659.5, "y": 6437321.7, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Avenue du Val Vert 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.667690909090909 }, "geometry": { "coordinates": [ 3.884529, 45.031626 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3377, "type": "street", "postcode": "43000", "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "id": "43157_XXXX_414a86", "x": 770521.1, "y": 6439104.2, "name": "Avenue des Belges", "citycode": "43157", "label": "Avenue des Belges 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6670636363636362, "alias": "route de brives" }, "geometry": { "coordinates": [ 3.895725, 45.047587 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3354, "type": "street", "postcode": "43000", "name": "Boulevard Maréchal Fayolle", "id": "43157_XXXX_d84781", "x": 769847.5, "y": 6438505.7, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Maréchal Fayolle 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6668545454545454 }, "geometry": { "coordinates": [ 3.887085, 45.042267 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3354, "type": "street", "postcode": "43000", "name": "Boulevard Bertrand de Doue", "id": "43157_XXXX_273513", "x": 770576.5, "y": 6438707.7, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Bertrand de Doue 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6668545454545454 }, "geometry": { "coordinates": [ 3.896001, 45.043812 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3346, "type": "street", "postcode": "43000", "name": "Place du Breuil", "id": "43157_XXXX_496c82", "x": 769559.9, "y": 6438477.6, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Place du Breuil 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6667818181818181 }, "geometry": { "coordinates": [ 3.883428, 45.042043 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3297, "type": "street", "postcode": "43000", "name": "Boulevard de la République", "id": "43157_XXXX_f85cce", "x": 770103.3, "y": 6438751, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard de la République 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6663363636363635 }, "geometry": { "coordinates": [ 3.890368, 45.04445 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3282, "type": "street", "postcode": "43000", "name": "Avenue d\'Ours Mons", "id": "43157_XXXX_39f371", "x": 770484.7, "y": 6438266.4, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Avenue d\'Ours Mons 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6661999999999999 }, "geometry": { "coordinates": [ 3.895142, 45.040048 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3268, "type": "street", "postcode": "43000", "name": "Avenue Antonin Raffier", "id": "43157_XXXX_ad3a62", "x": 772173.2, "y": 6437756.9, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Avenue Antonin Raffier 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6660727272727273 }, "geometry": { "coordinates": [ 3.916509, 45.035286 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.325, "type": "street", "postcode": "43000", "name": "Boulevard Maréchal Joffre", "id": "43157_XXXX_8eeef5", "x": 770337.3, "y": 6439134.9, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Boulevard Maréchal Joffre 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6659090909090908 }, "geometry": { "coordinates": [ 3.893395, 45.047882 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.3219, "type": "street", "postcode": "43000", "name": "Rue Pannessac", "id": "43157_1550_5151ab", "x": 769394.5, "y": 6438688.3, "context": "43, Haute-Loire, Auvergne-Rhône-Alpes (Auvergne)", "citycode": "43157", "label": "Rue Pannessac 43000 Le Puy-en-Velay", "city": "Le Puy-en-Velay", "score": 0.6656272727272727 }, "geometry": { "coordinates": [ 3.881358, 45.043957 ], "type": "Point" } } ], "query": "43000" } ))
        .toBeArrayWithSameValuesAs(["43000 Le Puy-en-Velay", "43000 Espaly-Saint-Marcel", "43000 Polignac", "43000 Ceyssac", "43000 Aiguilhe"]);
    });
    it('Look at this gist : https://bit.ly/api_2. algie_extractApi should return an array with same values as ["95000 Cergy", "34140 Mèze", "44380 Pornichet", "66420 Le Barcarès", "80000 Amiens"] ', function() {
      expect(algie_extractApi({ "type": "FeatureCollection", "limit": 5, "version": "draft", "licence": "ODbL 1.0", "attribution": "BAN", "features": [ { "type": "Feature", "properties": { "importance": 0.3526, "type": "housenumber", "postcode": "80000", "name": "8 Boulevard du Port", "housenumber": "8", "street": "Boulevard du Port", "id": "ADRNIVX_0000000260875032", "x": 648952.6, "y": 6977867.2, "context": "80, Somme, Hauts-de-France (Picardie)", "citycode": "80021", "label": "8 Boulevard du Port 80000 Amiens", "city": "Amiens", "score": 0.4626765550239234 }, "geometry": { "coordinates": [ 2.290084, 49.897443 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.2076, "type": "housenumber", "postcode": "95000", "name": "8 Boulevard du Port", "housenumber": "8", "street": "Boulevard du Port", "id": "ADRNIVX_0000002010754592", "x": 631466.4, "y": 6881718.8, "context": "95, Val-d'Oise, Île-de-France", "citycode": "95127", "label": "8 Boulevard du Port 95000 Cergy", "city": "Cergy", "score": 0.4494947368421052 }, "geometry": { "coordinates": [ 2.062794, 49.0317 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.2, "type": "housenumber", "postcode": "34140", "name": "8 Boulevard du Port", "housenumber": "8", "street": "Boulevard du Port", "id": "ADRNIVX_0000000284423783", "x": 749085.3, "y": 6258645.4, "context": "34, Hérault, Occitanie (Languedoc-Roussillon)", "citycode": "34157", "label": "8 Boulevard du Port 34140 Mèze", "city": "Mèze", "score": 0.44880382775119615 }, "geometry": { "coordinates": [ 3.605884, 43.425225 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.0495, "type": "housenumber", "postcode": "44380", "name": "8 Boulevard du Port", "housenumber": "8", "street": "Boulevard du Port", "id": "ADRNIVX_0000000280022748", "x": 296410.1, "y": 6697933.5, "context": "44, Loire-Atlantique, Pays-de-la-Loire", "citycode": "44132", "label": "8 Boulevard du Port 44380 Pornichet", "city": "Pornichet", "score": 0.43512200956937797 }, "geometry": { "coordinates": [ -2.34098, 47.258819 ], "type": "Point" } }, { "type": "Feature", "properties": { "importance": 0.0469, "type": "housenumber", "postcode": "66420", "name": "8 Boulevard du Port", "housenumber": "8", "street": "Boulevard du Port", "id": "ADRNIVX_0000000263992135", "x": 703008.6, "y": 6187933.1, "context": "66, Pyrénées-Orientales, Occitanie (Languedoc-Roussillon)", "citycode": "66017", "label": "8 Boulevard du Port 66420 Le Barcarès", "city": "Le Barcarès", "score": 0.4348856459330143 }, "geometry": { "coordinates": [ 3.036731, 42.79091 ], "type": "Point" } } ], "query": "8 bd du port" }))
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
    it("In the 2-dimensional array [['0', '-1','1', '2', null, '4'], ['3', '6']], the missing number is 5", function() {
      expect(algie_missingNumber([['0', '-1', '1', '2', null, '4'], ['3', '6']])).toEqual(5);
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

  describe("algie_stringToHash", function() {
    it("should convert sentence 'hello abc' to hash {hello:{vowels:2, consonants:3}, abc:{vowels:1, consonants:2}}", function() {
      expect(algie_stringToHash('hello abc')).toEqual({hello:{vowels:2, consonants:3}, abc:{vowels:1, consonants:2}});
    });
    it("should convert sentence 'uzero foo eh' to hash {uzero:{vowels:3, consonants:2}, foo:{vowels:2, consonants:1}, eh:{vowels:1, consonants:1}}", function() {
      expect(algie_stringToHash('uzero foo eh')).toEqual({uzero:{vowels:3, consonants:2}, foo:{vowels:2, consonants:1}, eh:{vowels:1, consonants:1}});
    });
  });

  describe("algie_indexHash. It returns the element whose key is in nth position in the alphabetical order", function() {
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

  describe("algie_stripCommonPath", function() {
    it("['/myDir/a.txt', '/myDir/b.txt', '/myDir/c.txt'] becomes ['/a.txt', '/b.txt', '/c.txt'] because /myDir is the common path", function() {
      expect(algie_stripCommonPath(['/myDir/a.txt', '/myDir/b.txt', '/myDir/c.txt'])).toEqual(['/a.txt', '/b.txt', '/c.txt']);
    });
    it("['/www/workspace/zz.txt', '/www/user/zz.txt'] becomes ['/workspace/zz.txt', '/user/zz.txt'] because /www is the common path", function() {
      expect(algie_stripCommonPath(['/www/workspace/zz.txt', '/www/user/zz.txt'])).toEqual(['/workspace/zz.txt', '/user/zz.txt']);
    });
  });

  describe("algie_swapByPair", function() {
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

  describe("algie_hideThat. Hides every char between first and last char.", function() {
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

  describe("algie_ordinalSuffix", function() {
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

  describe("algie_largestString", function() {
    it("returns the largest String in an array of String (example 1)", function() {
      expect(algie_largestString(["axel", "bob", "alice", "olaf"])).toEqual("alice");
    });
    it("returns the largest String in an array of String (example 2)", function() {
      expect(algie_largestString(["hello", "how", "are", "you", "my", "friend"])).toEqual("friend");
    });
  });

  describe("algie_arrayOfBoolean. Given an array of numbers, returns an array of boolean. If the number exist in the first array, then resulting_array[number] = true. All other elements in resulting array are false.", function() {
    it("[0, 2] becomes [true, false, true]", function() {
      expect(algie_arrayOfBoolean([0, 2])).toEqual([true, false, true]);
    });
    it("[0, 1, 4] becomes [true, true, false, false, true]", function() {
      expect(algie_arrayOfBoolean([0, 1, 4])).toEqual([true, true, false, false, true]);
    });
  });

  describe("algie_numbersAfter", function() {
    it("returns the 6 next numbers after a given number (example 1)", function() {
      expect(algie_numbersAfter(23)).toEqual([24, 25, 26, 27, 28, 29]);
    });
    it("returns the 6 next numbers after a given number (example 2)", function() {
      expect(algie_numbersAfter(42)).toEqual([43, 44, 45, 46, 47, 48]);
    });
  });

  describe("algie_dirtyString", function() {
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

  describe("algie_isDecreasing", function() {
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

  describe("algie_divisorsOf. Find the highest divisor of a number (excerpt itself), and return the multiplication of the 2 numbers", function() {
    it("10 can be divided by 1, 2, 5, 10. Therefore, f(10) return [[5, 2]]", function() {
      expect(algie_divisorsOf(10)).toEqual([[5, 2]]);
    });
    it("33 can be divided by 1, 3, 11, 33. Therefore, f(33) return [[11, 3]]", function() {
      expect(algie_divisorsOf(33)).toEqual([[11, 3]]);
    });
    it("49 and can be divided by [1, 7, 49]. And 9 can be divided by [1, 3, 9]. Therefore, f(49, 9) return [[7, 7], [3, 3]]", function() {
      expect(algie_divisorsOf(49, 9)).toEqual([[7, 7], [3, 3]]);
    });
    it("2 and can be divided by [1, 2]. And 4 can be divided by [1, 2, 4]. Therefore, f(2, 4) return [[1, 2], [2, 2]]", function() {
      expect(algie_divisorsOf(2, 4)).toEqual([[1, 2], [2, 2]]);
    });
  });

});

