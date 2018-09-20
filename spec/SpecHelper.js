beforeEach(function () {
  jasmine.addMatchers({

    toBeAmongst: function () {
      return {
        compare: function (actual, expected) {

          return {
            pass: expected.includes(actual)
          };
        }
      };
    },
    toBeArrayWithSameValuesAs: function () {
      return {
        compare: function (actual, expected) {

          function arraysEqual(_arr1, _arr2) {
            if (!Array.isArray(_arr1) || ! Array.isArray(_arr2) || _arr1.length !== _arr2.length) return false;
            var arr1 = _arr1.concat().sort();
            var arr2 = _arr2.concat().sort();
            for (var i = 0; i < arr1.length; i++) {
                if (arr1[i] !== arr2[i]) return false;
            }
            return true;
          }

          return {
            pass: arraysEqual(actual, expected)
          };
        }
      };
    },
    toBeConsonant: function () {
      return {
        compare: function (actual, expected) {

          return {
            pass: ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"].includes(actual)
          };
        }
      };
    },
    toBeVowel: function () {
      return {
        compare: function (actual, expected) {

          return {
            pass: ["a", "e", "i", "o", "u", "y"].includes(actual)
          };
        }
      };
    }

  });
});
