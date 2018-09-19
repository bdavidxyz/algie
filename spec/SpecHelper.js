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
