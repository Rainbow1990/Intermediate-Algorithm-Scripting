function uniteUnique(arr) {
    let finalCollection = [];
    let values = Object.values(arguments);
  
    values.forEach(groupOfGroups => {
      groupOfGroups.forEach(individualValues => {
        if (finalCollection.indexOf(individualValues) === -1) {
          finalCollection.push(individualValues);
        }
      });
    });
    return finalCollection;
  }
  
  let result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
  console.log(result);