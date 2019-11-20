import { Subscriber } from 'rxjs'
import { RxEmitter } from './rxemitter'
export class ToRxEmitterOperator {
  constructor (eventObj) { }
  call (subscriber, source) {
    return source.subscribe(new ToRxEmitterSubscriber(subscriber, this.eventObj))
  }
}
class ToRxEmitterSubscriber extends Subscriber {
  count = 0;
  constructor (destination, eventObj) {
    super(destination)
  }
  _next (x) {
    let result
    if (this.eventObj.map) { result = this.eventObj.map.call(null, x, this.count++) } else { result = x }

    if (this.eventObj.timeout) {
      setTimeout(() => RxEmitter.emit(this.eventObj.eventName, result), this.eventObj.timeout)
    } else {
      RxEmitter.emit(this.eventObj.eventName, result)
    }

    this.destination.next(x)
  }
}
