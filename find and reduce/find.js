// const array = [5, 12, 8, 130, 44];

// const finds = array.find((element) => element > 12);

// console.log(finds);

// const arrays = [33, 46, 25, 84, 19, 62, 48, 3, 2, 65, 73, 84, 99, 90];
// const founds = arrays.find(function(item){
//   return item > 60;
// })
// console.log(founds);

// const arrays = [33, 46, 25, 84, 19, 62, 48, 3, 2, 65, 73, 84, 99, 90];
// const founds = arrays.find((item) => item > 60);
// console.log(founds);

const array1 = [1, 2, 3, 4, 5, 6  ,7 ,8 ,9];
const num = 7;
const result = array1.reduce((a, b) => a + b, num);

console.log(result);