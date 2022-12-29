function translatePigLatin(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    function isVowel(letter) {
      return vowels.indexOf(letter);
    }
    for (let i = 0; i < str.length; i += 1) {
      let individualLetter = str[i];
      if (isVowel(individualLetter) != -1 && i === 0) {
        return str + "way";
      }
      if (isVowel(individualLetter) != -1) {
        return str.slice(i) + str.slice(0, i) + "ay";
      }
    }
    return str + "ay"
  }
  
  let result = translatePigLatin("califrnia");
  
  console.log(result);