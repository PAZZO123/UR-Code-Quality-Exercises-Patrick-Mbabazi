/*
In this kata, your goal is to write a function which will reverse the vowels in a string. 
Any characters which are not vowels should remain in their original position. Here are some examples:*/


  function reverseVowels(str = "") {
  if (typeof str !== "string" || str.length === 0) return "";

  const isVowel = (ch) => "aeiouAEIOU".includes(ch);

  //first extract vowels
  const vowels = [...str].filter(isVowel).reverse();
//then rebuild string by replacing vowels with their reverse
  let index = 0;
  return [...str]
    .map((ch) => (isVowel(ch) ? vowels[index++] : ch))
    .join("");
}


console.log(reverseVowels("Koimil Gaya"))//=>Kaamil Giyo