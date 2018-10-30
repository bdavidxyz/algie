function algie_42() {
  // This already works, but this is more a basic example than something you would encounter on real projects.
  return 42;
};

function algie_allMultiplyBy(array, number) {
  // Write function here
}

function algie_generateWord() {
  // return "zaropi"
}


function algie_sortByConsecutive(str) {
 var alphabet_array = "abcdefghijklmnopqrstuvwxyz".split("");
 return _.chain(str)
         .sortBy()
         .groupBy()
         .sortBy(_.size)
         .reverse()
         .sortBy(function(e){return (100*_.size(e)) + _.indexOf(alphabet_array, e[0]);})
         // .reduce(function(result, value){return result+value.join("")}, "")
         .value();
}
