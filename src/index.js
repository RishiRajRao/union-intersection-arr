function unionArr(arr1, arr2) {
  const tempMap = new Map(),
    tempArr = [];
  for (let i = 0; i < arr1.length; i++) {
    tempMap.set(arr1[i], arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (tempMap.get(arr2[i])) {
      tempMap.delete(arr2[i]);
      tempArr.push(arr2[i]);
      continue;
    }
    tempArr.push(arr2[i]);
  }

  for (var [key, val] of tempMap.entries()) {
    tempArr.push(val);
  }
  console.log("res==", tempArr);
}

unionArr([85, 25, 1, 32, 54, 6], [85, 2]);

// can be done using set which only stores unique value. Also map also storw with uunique key.
