function calculateAverage(numbers) {
if(!Array.isArray(numbers)) return 0
  let sum = 0;
  let count = 0;
  for (const number of numbers) {
    sum += number;
    count++;
  }
  const average = sum / count;
  return average;
}


const Average=calculateAverage([1,2,3])
console.log(Average)