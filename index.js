function map(sourceArray, callback) {
    let newArray = []
    for (let i = 0; i < sourceArray.length; i++ ) {
        const element = sourceArray[i]
     newArray.push(callback(element)) 
    }
    return newArray
  }




  function reduce(sourceArray, callback, startingPoint) {
    let value
    if (startingPoint) {
      value = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
      value = callback(sourceArray[i], value)
    } 
    return value
  } else {
    value = sourceArray[0]
    for (let i = 0; i < sourceArray.length; i++ ) {
      value = callback(sourceArray[i], value)
    } 
    return value
  }
}