function destroyer(arr) {
  let survivingElements = [];
  let battleField = Object.values(arguments)[0];
  let elementsToDestroy = Object.values(arguments).splice(1);

  battleField.forEach(positionToRecon => {
    if (elementsToDestroy.indexOf(positionToRecon) === -1) {
      survivingElements.push(positionToRecon);
    }
  });
  return survivingElements;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));