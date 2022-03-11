let arr = [1, 2, [3, 4, [5]]]
// 1. 使用JS内置flat方法
// let flatArr = arr.flat(Infinity)

// 2.使用递归
// function flatArray(arr) {
//   let res = []
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       res = res.concat(flatArray(arr[i]))
//     } else {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

// 3. 使用set

console.log(flatArray(arr));