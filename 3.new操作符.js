function newObj(obj) {
  let new_obj = {}
  new_obj.__proto__ = obj.prototype
  obj.apply(new_obj, ...arguments)
}