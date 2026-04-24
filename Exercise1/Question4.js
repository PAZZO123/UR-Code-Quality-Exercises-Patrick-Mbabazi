const findEvenNumbers=(numbers=[])=>
  Array.isArray(numbers)?numbers.filter(num=>num%2===0):[]

console.log(findEvenNumbers([1,2,3,4,5,6]))