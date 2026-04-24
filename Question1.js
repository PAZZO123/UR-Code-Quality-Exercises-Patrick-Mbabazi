/*Write a function(s) that checks the level of nesting of an array.
 Then, use that function to flatten the array into a single-dimensional array*/


 function getNestingLevel(arr){
    if(!Array.isArray(arr)) return 0
    let depth=1
    for( const item of arr){
        if(Array.isArray(item)){
            depth=Math.max(depth, 1+getNestingLevel(item))
        }
    }
    return depth
 }
 const flattenArray=(arrayItems=[])=>{
    if(!Array.isArray(arrayItems)) return []
    let nestingLevel=getNestingLevel(arrayItems)
    console.log(nestingLevel)

    return arrayItems.flat(nestingLevel)
 }

const data = [1, [2, [3, [4]]], 5];
console.log(flattenArray(data))