import { Action } from 'redux'

export interface Action extends Action {
  payload?: any
}
