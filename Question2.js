//Write a JavaScript function to check if a given number is prime or not.

function isPrime(num){
if(num <=2) return false
if(num%2===0) return false
for(i=3; i<=Math.sqrt(num);i=i+2){
    if(num%i===0) return false
}
return true
}
console.log(isPrime(17))