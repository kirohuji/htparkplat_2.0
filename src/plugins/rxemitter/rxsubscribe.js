import { RxEmitter } from './rxemitter'

export function RxSubscribe (a, b = false, c = null) {
  return (target, name, descriptor) => {
    let eventObj = typeof a === 'object' ? a : { eventName: a, unsubscribe: b, target: c }
    let eventName = eventObj.name || eventObj.event || eventObj.eventName
    let subscription = RxEmitter.on(eventName, eventObj.target).subscribe(descriptor.value.bind(target))
    if (eventObj.target) {
      let cache = RxEmitter.get(eventName)
      cache.subscription = subscription
    }
    if (eventObj.unsubscribe === true ||
      eventObj.unsubscribe === 'unsubscribe' ||
      eventObj.unsubscribe === 'destroy' ||
      eventObj.unsubscribe === 'off' ||
      eventObj.unsubscribe === 'remove') {
      let oldNgOnDestroy = target.ngOnDestroy

      target.ngOnDestroy = function () {
        oldNgOnDestroy && oldNgOnDestroy.call(this)
        subscription.unsubscribe()
      }
    }
  }
}
