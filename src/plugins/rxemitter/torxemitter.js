import { Observable } from 'rxjs'

import { ToRxEmitterOperator } from './torxemitteroperator'

export function toRxEmitter (obj, a, b) {
  let eventObj = typeof a === 'object' ? a : { eventName: a, map: b }
  if (eventObj.name) eventObj.eventName = eventObj.name
  if (eventObj.event) eventObj.eventName = eventObj.event

  return obj.lift(new ToRxEmitterOperator(eventObj))
    .subscribe(x => { eventObj.log && console.log(x) })
}
Observable.prototype.toRxEmitter = toRxEmitter
