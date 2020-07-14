import { mergeDeepRight } from 'ramda'
import { Dispatch } from 'redux'
import { GameMode, WeaponType } from '../../types/index'
import { Action } from '../action.d'

const CHANGE_GAME_MODE = 'game/CHANGE_GAME_MODE'
const COUNT = 'game/COUNT'

export interface GameState {
  playerOneGames: number
  playerOneScore: number
  playerOneWeapon: WeaponType | null
  playerTwoGames: number
  playerTwoScore: number
  mode: GameMode
  lastWinner: 1 | 2 | null
}

const defaultState: GameState = {
  playerOneGames: 0,
  playerTwoGames: 0,
  playerOneWeapon: null,
  playerOneScore: 0,
  playerTwoScore: 0,
  mode: 'player',
  lastWinner: null
}

export default function reducer(state = defaultState, action: Action): any {
  switch (action.type) {
    case CHANGE_GAME_MODE:
      return mergeDeepRight(state, {
        mode: state.mode === 'computer' ? 'player' : 'computer',
        playerOneScore: 0,
        playerOneGames: 0,
        playerTwoScore: 0,
        playerTwoGames: 0,
        lastWinner: null
      })
    case COUNT:
      const { winner } = action.payload
      if (!winner) {
        return mergeDeepRight(state, { lastWinner: null })
      }
      if (winner === 1) {
        const isGame = state.playerOneScore === 2
        const playerOneScore = isGame ? 0 : state.playerOneScore + 1
        const playerOneGames = isGame
          ? state.playerOneGames + 1
          : state.playerOneGames
        const playerTwoScore = isGame ? 0 : state.playerTwoScore

        return mergeDeepRight(state, {
          playerOneScore,
          playerOneGames,
          playerTwoScore,
          lastWinner: winner
        })
      }

      if (winner === 2) {
        const isGame = state.playerTwoScore === 2
        const playerTwoScore = isGame ? 0 : state.playerTwoScore + 1
        const playerTwoGames = isGame
          ? state.playerTwoGames + 1
          : state.playerTwoGames
        const playerOneScore = isGame ? 0 : state.playerOneScore

        return mergeDeepRight(state, {
          playerTwoScore,
          playerTwoGames,
          playerOneScore,
          lastWinner: winner
        })
      }

      return state

    default:
      return state
  }
}

export const changeMode = (dispatch: Dispatch): void => {
  dispatch({ type: CHANGE_GAME_MODE })
}

export const countPoints = (winner: 1 | 2 | null, dispatch: Dispatch): void => {
  dispatch({ type: COUNT, payload: { winner } })
}
