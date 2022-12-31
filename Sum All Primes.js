function sumPrimes(num) {
    if (num <= 1) {
      return "Numbers lower than 0 don't work here"
    }
  
    let counter = 2;
    let sum = 0;
    while (counter <= num) {
      if (isPrime(counter)) {
        sum += counter;
      }
      counter += 1;
    }
    return sum;
  }
  
  function isPrime(singleNumber) {
    let counter = 2;
    while (counter < singleNumber) {
      if (singleNumber % counter === 0) {
        return false;
      }
      counter += 1;
    }
    return true;
  }
  
  let result = sumPrimes(10);
  console.log(result);