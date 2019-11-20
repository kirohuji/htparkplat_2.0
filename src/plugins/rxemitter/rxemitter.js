import { Subject } from 'rxjs'
export class RxEmitter {
  static cache = {};
  static on (eventName, target) {
    this.createCache(eventName)
    if (target !== undefined) {
      this.cache[eventName].targets.push(target)
    }
    return this.cache[eventName].subject
  }

  static one (eventName, target) {
    return this.on(eventName, target).take(1)
  }

  static emit (eventName, ...rest) {
    this.createCache(eventName)
    if (rest.length === 1) {
      this.cache[eventName].subject.next(rest[0])
    } else {
      this.cache[eventName].subject.next(rest)
    }

    return this.cache[eventName].target
  }

  static has (eventName) {
    return !!this.cache[eventName]
  }

  static get (eventName) {
    return this.cache[eventName]
  }

  static getByTarget (target, eventName) {
    let caches = []
    for (let key in this.cache) {
      let cache = this.cache[key]

      if (cache.targets.indexOf(target) > -1) {
        if (eventName) {
          if (eventName === cache.eventName) cache.push(cache)
        } else {
          caches.push(cache)
        }
      }
    }
  }
  static off (eventName) {
    if (this.cache[eventName]) {
      for (let key in this.cache[eventName]) {
        if (key === 'targets') this.cache[eventName][key].length = 0
        delete this.cache[eventName][key]
      }
    }

    delete this.cache[eventName]
  }
  static unsubscribe (target, eventName) {
    let cache = this.getByTarget(target, eventName)

    for (let i = 0; i < cache.length; i++) {
      cache[i].subscription && cache[i].subscription.unsubscribe()
    }
  }

  static offAllByTarget (target) {
    try {
      this.offByTarget(target)
      this.unsubscribe(target)
    } catch (e) {

    }
  }

  static offByTarget (target) {
    for (let key in this.cache) {
      let cache = this.cache[key]
      if (cache.targets.indexOf(target)) delete this.cache[key]
    }
  }

  static offAll (eventName) {
    if (!eventName) {
      for (let key in this.cache) delete this.cache[key]
    } else {
      delete (this.cache[eventName])
    }
  }
  static createCache (eventName) {
    if (!this.cache[eventName]) {
      this.cache[eventName] = {}
      this.cache[eventName].id = guid()
      this.cache[eventName].targets = []
      this.cache[eventName].eventName = eventName
    }
    if (!this.cache[eventName].subject) {
      this.cache[eventName].subject = new Subject()
    }
    return this.cache[eventName]
  }
}

function guid () {
  return 'xxxxxx-xxxx-4xxx-yxxx-xxxxxx'
    .replace(/[xy]/g, c => { let r = Math.random() * 16 | 0; let v = c === 'x' ? r : r & 0x3 | 0x8; return v.toString(16) })
}
