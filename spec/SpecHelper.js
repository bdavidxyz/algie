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
    }

  });
});
