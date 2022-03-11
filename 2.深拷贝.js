// /**
//  * 深拷贝
//  * 简单版的深拷贝存在一个循环引用的问题
//  * 可以使用map来存储已经拷贝过的属性，如果拷贝过就直接取出
//  */
// function deepClone(target, map = new WeakMap()) {
//   if (typeof target === 'object' && target !== null) {
//     let cloneTarget = Array.isArray(target) ? [] : {}
//     if (map.get(target)) {
//       return map.get(target)
//     }
//     map.set(target, cloneTarget)
//     for (const key in target) {
//       if (target.hasOwnProperty(key)) {
//         cloneTarget[key] = deepClone(target[key], map)
//       }
//     }
//     return cloneTarget
//   } else {
//     return target
//   }
// }
// let a = {
//   name: 'Jack',
//   fn: function use() {}
// }
// let b = deepClone(a)
// a.name = 'Rose'
// a.fn = function go() {}
// a.t = a
// console.log(a);

function deepClone(targetObj) {
  if (typeof targetObj === 'object' && targetObj !== null) {
    let res = Array.isArray(targetObj) ? [] : {}
    for (let key in targetObj) {
      if (targetObj.hasOwnProperty(key)) {
        res[key] = deepClone(targetObj[key])
      }
    }
    return res
  } else {
    return targetObj
  }
}
let a = {
  name: 'jack'
}
let b = deepClone(a)
b.name = 'rose'
console.log(a);
console.log(b);