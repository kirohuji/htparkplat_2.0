import { Observable } from 'rxjs'
import { ToRxEmitterOperator } from './torxemitteroperator'

/* @flow */
export function rxEmit (obj, a, b) {
  let eventObj = typeof a === 'object' ? a : { eventName: a, map: b }
  if (eventObj.name) eventObj.eventName = eventObj.name
  if (eventObj.event) eventObj.eventName = eventObj.event

  return obj.lift(new ToRxEmitterOperator(eventObj))
}

Observable.prototype.rxEmit = rxEmit
