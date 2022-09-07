export default class GlobalEventEmitter{
  constructor(){
    this.eventMap = {}
  }
  on(type,handler){
    if(!(handler instanceof Function)){
      throw new Error('handler必须是一个函数')
    }
    if(!this.eventMap[type]){
      this.eventMap[type] = []
    }
    this.eventMap[type].push(handler)
  }
  emit(type,params){
    if(this.eventMap[type]){
      this.eventMap[type].forEach((handler,index) => {
        handler(params)
      })
    }
  }
  off(type,handler){
    if(this.eventMap[type]){
      this.eventMap[type].slice(this.eventMap[type].indexOf(handler) >>> 0, 1)
    }
  }
}
