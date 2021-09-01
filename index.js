function map(sourceArray, callback) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        const element = sourceArray[i]
     newArray.push(callback(element)) 
    }
    return newArray
  }




  function reduce(sourceArray, callback, startingPoint) {
    if (startingPoint) {
    for (let i = 0; i < sourceArray.length; i++ ) {
      
    }
    }
  }