function convertCharacter(letter) {
    if (letter === "&") {
      return "&amp;";
    } else if (letter === "<") {
      return "&lt;";
    } else if (letter === ">") {
      return "&gt;";
    } else if (letter === '"') {
      return "&quot;";
    } else if (letter === "'") {
      return "&apos;";
    }
  }
  
  function convertHTML(str) {
    let charactersToCheckFor = ["&", "<", ">", '"', "'"];
    for(let i = 0; i < str.length; i += 1) {
      if (charactersToCheckFor.indexOf(str[i]) != -1) {
        let symbolToConvert = str[i];
        str = str.slice(0, i) +
            convertCharacter(symbolToConvert) +
            str.slice(i + 1);
      };
    }
    return str;
  }
  
  let result = convertHTML("Dolce & Gabbana");
  console.log(result);