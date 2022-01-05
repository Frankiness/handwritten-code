/**
 * 事件总线通过 bus.$emit('name',params)发送事件，bus.$on('name',callback)回调函数来接受事件
 * 用一个对象来映射事件名与回调函数
 */
class Bus {
  constructor() {
    this.eventList = {}
  }
  on(name, cb) {
    if (this.eventList[name]) {
      this.eventList[name].push(cb)
    } else {
      this.eventList[name] = [cb]
    }
  }
  emit(name, ...args) {
    let list = this.eventList[name] //得到回调函数数组
    list && list.forEach(element => {
      element(...args)
    });
  }
  // 删除订阅
  off(name) {
    delete this.eventList[name]
  }
}
let e = new Bus()

function cb(val) {
  console.log(val);
}
e.on('e1', cb)
e.off('e1')
e.emit('e1', 'hahah')