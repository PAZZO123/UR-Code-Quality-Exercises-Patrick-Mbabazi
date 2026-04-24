
function sumArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Expected an array");
  }
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    if (typeof arr[0] !== "number") {
      throw new TypeError("Array must contain only numbers");
    }
    return arr[0];
  }
  const [first, ...rest] = arr;

  if (typeof first !== "number") {
    throw new TypeError("Array must contain only numbers");
  }

  return first + sumArray(rest);
}
console.log(sumArray([1,2,3,4]))