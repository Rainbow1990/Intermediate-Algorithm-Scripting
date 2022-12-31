function smallestCommons(arr) {
    let lowerNum = Math.min(...arr);
    let higherNum = Math.max(...arr);
  
    let range = getRange(lowerNum, higherNum);
  
    let multiple = 1;
    while (multiple < 1000000) {
      let higherCommonMultiple = (lowerNum * multiple) * higherNum;
      
      let trueCount = 0;
      for (let i = 0; i < range.length; i += 1) {
        
        if (higherCommonMultiple % range[i] === 0) {
          trueCount += 1;
  
          if (trueCount === range.length) {
            return higherCommonMultiple;
          }
        }
      }
  
      multiple += 1;
    }
  
    return arr;
  }
  
  function getRange(lowN, highN) {
      let resultRange = [];
      for (let i = lowN; i <= highN; i += 1) {
        resultRange.push(i);
      }
      return resultRange;
  }
  
  let result = smallestCommons([23, 18]);
  console.log(result);
  
  smallestCommons([1,5]);