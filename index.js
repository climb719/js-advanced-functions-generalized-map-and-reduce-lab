function map(sourceArray, callback) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        const element = sourceArray[i]
     newArray.push(callback(element)) 
    }
    return newArray
  }




  function reduce(sourceArray, callback, startingPoint) {
    let total;
    if (startingPoint) {
      total = startingPoint;
      for (let i = 0; i < sourceArray.length; i++) {
        total = callback(sourceArray[i], total);
      }
      return total;
    } else {
      total = sourceArray[0];
      for (let i = 1; i < sourceArray.length; i++) {
        total = callback(sourceArray[i], total);
      }
      return total;
    }
  }