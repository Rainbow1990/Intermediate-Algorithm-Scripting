function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingPosition = alphabet.indexOf(str[0]);
    let focusedAlphabet = alphabet.slice(startingPosition);
  
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] != focusedAlphabet[i]) {
        return focusedAlphabet[i]
      }
    }
  }
  
  let result = fearNotLetter("abce");
  console.log(result)