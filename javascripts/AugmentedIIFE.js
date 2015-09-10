
var FruitMaker =function(Slicer) {
  Slicer.slices = function(fruit, numslices) {
    var slicedFruit = [];
    for (var i = 0; i < numslices; i++) {
      slicedFruit.push(fruit);
    }
    return slicedFruit;
  };
  return Slicer;

}(FruitMaker);

