import { RxEmitter } from './rxemitter'

export function RxOn (a, b = false, c = null) {
  let eventObj = typeof a === 'object' ? a : { eventName: a, unsubscribe: b, target: c }
  return (target, name) => {
    let eventName = eventObj.name || eventObj.event || eventObj.eventName
    Object.defineProperty(target, name, {
      enumerable: true,
      configurable: true,
      writable: true,
      value: RxEmitter.on(eventName, eventObj.target)
    })
  }
}
