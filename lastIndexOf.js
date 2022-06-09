function lastIndexOf(array, num) {
  let isPresent = false;
  let index;
  for (let i = array.length; i >= 0; i--) {
    if (array[i] === num) {
      index = i;
      ispresent = true;
      break;
    }
  }
  if (index >= 0) {
    return index;
  } else {

    return -1;
  }
}