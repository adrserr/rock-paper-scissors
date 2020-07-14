import React, { useCallback, useState } from 'react'
import './game.scss'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import AppState from '../../store/ducks'
import { changeMode, countPoints } from '../../store/ducks/game'
import { WeaponSelector, Board } from '../../components'
import { WeaponType } from '../../types'
import { getRandomWeapon, getWinner } from '../../utils'

const computerMode = 'Computer vs computer'
const playerMode = 'Player vs computer'

interface GameProps {
  mode: 'player' | 'computer'
  changeGameMode: () => void
  count: (winner: 1 | 2 | null) => void
}

const Game = (props: GameProps) => {
  const { mode, changeGameMode, count } = props

  const [playerWeapon, setPlayerWeapon] = useState<WeaponType | null>(null)
  const [computerWeapon, setComputerWeapon] = useState<WeaponType | null>(null)

  const onWeaponSelection = useCallback(
    (weapon: WeaponType) => {
      setPlayerWeapon(weapon)
      const randomWeapon = getRandomWeapon()
      setComputerWeapon(randomWeapon)
      if (weapon && randomWeapon) {
        const winner = getWinner(weapon, randomWeapon)
        count(winner)
      }
    },
    [count]
  )

  return (
    <div className="game">
      <h3 className="game--mode">
        {mode === 'computer' ? computerMode : playerMode}
      </h3>
      <button
        type="button"
        className="game--mode-button bg-white border--orange orange"
        onClick={changeGameMode}
      >
        Change mode
      </button>
      <div className="board">
        <Board
          playerOneWeapon={playerWeapon}
          playerTwoWeapon={computerWeapon}
        />
      </div>
      <div style={{ flexShrink: 0 }}>
        <WeaponSelector onSelect={onWeaponSelection} />
      </div>
    </div>
  )
}

export default connect(
  (state: AppState) => {
    return {
      mode: state.game.mode
    }
  },
  (dispatch: Dispatch) => {
    return {
      changeGameMode: () => changeMode(dispatch),
      count: (winner: 1 | 2 | null) => countPoints(winner, dispatch)
    }
  }
)(Game)
