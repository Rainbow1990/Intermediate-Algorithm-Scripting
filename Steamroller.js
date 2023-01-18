function steamrollArray(arr) {
  let newArray = [];

  arr.forEach(element => {
    if(Array.isArray(element)) {
      newArray.push(...steamrollArray(element));
    } else {
      newArray.push(element);
    }
  })
  return newArray;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));