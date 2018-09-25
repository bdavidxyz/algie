var a = 7;
function f(a) {

  return _.chain(a)
            .thru((e) => _.isInteger(e) ? e : "zzz")
            .thru((e) => _.isInteger(e) && e % 15 === 0 ? "qix" : e)
            .thru((e) => _.isInteger(e) && e % 5 === 0 ? "bar" : e)
            .thru((e) => _.isInteger(e) && e % 3 === 0 ? "foo" : e)
            .thru((e) => _.isString(e) ? e : "zzz")
            .value();

} 
