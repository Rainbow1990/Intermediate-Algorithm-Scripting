function dropElements(arr, func) {
    for (let i = 0; i < arr. length; i += 1) {
      if (func(arr[i])) { return arr.slice(i)}
    }
  
    return [];
  }
  
  let result = dropElements([1, 2, 3], function(n) {return n < 3; });
  
  console.log(result);