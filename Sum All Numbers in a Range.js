function sumAll(arr) {
    let minimumNumber = Math.min(arr[0], arr[1]);
    let maximumNumber = Math.max(arr[0], arr[1]);
    var result = 0;
    for (var i = minimumNumber; i <= maximumNumber; i += 1) {
      result += i;
    }
    return result;
  }
  
  console.log(sumAll([1, 4]));