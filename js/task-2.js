function makeArray(firstArray, secondArray, maxLength) {
  const thirdArray = firstArray.concat(secondArray);
  if (thirdArray.length >= maxLength) {
    return;
  }
  return thirdArray;
}
