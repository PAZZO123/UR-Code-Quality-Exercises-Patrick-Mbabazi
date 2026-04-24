const  calculateMatrixSum=(matrix=[])=>
    matrix.flat().reduce((acc, Element)=>acc+Element,0)

console.log(calculateMatrixSum([[1,2,3,4],[5,6,7,8]]))