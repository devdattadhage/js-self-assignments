const copy = function (element) {
  if (Array.isArray(element)) {
    return element.map(copy);
  }

  return element;
}

const deepCopy = function (array) {
  return array.map(copy);
}