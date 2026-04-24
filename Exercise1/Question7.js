const maxNumber = (...nums) => {
  if (nums.length === 0) return null;
//Filtering the only passed numbers
  const validNumbers = nums.filter(n => typeof n === "number");
  if (validNumbers.length === 0) return null;
  return Math.max(...validNumbers);
};
console.log(maxNumber(1,3,6,7))//->7