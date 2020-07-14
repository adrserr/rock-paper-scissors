import React, { useMemo } from 'react'
import './board.scss'
import { connect } from 'react-redux'
import Player from '../player/player'
import { GameMode, WeaponType } from '../../types'
import AppState from '../../store/ducks'

interface BoardProps {
  mode: GameMode
  playerOneScore: number
  playerTwoScore: number
  playerOneGames: number
  playerTwoGames: number
  playerOneWeapon: WeaponType | null
  playerTwoWeapon: WeaponType | null
  lastWinner: 1 | 2 | null
}
const Board = (props: BoardProps) => {
  const {
    mode,
    playerOneScore,
    playerTwoScore,
    playerOneGames,
    playerTwoGames,
    playerOneWeapon,
    playerTwoWeapon,
    lastWinner
  } = props

  const winnerStr = useMemo(() => {
    if (
      !lastWinner &&
      !playerOneGames &&
      !playerOneScore &&
      !playerTwoScore &&
      !playerTwoScore
    ) {
      return 'Let\'s play'
    }
    if (lastWinner === 1) {
      return mode === 'player' ? 'Player' : 'Computer'
    }
    if (lastWinner === 2) {
      return 'Computer'
    }

    return 'Tie'
  }, [lastWinner, mode, playerOneGames, playerOneScore, playerTwoScore])

  return (
    <div className="board">
      <div className="board--battle-zone">
        <Player
          type={mode}
          score={playerOneScore}
          position="l"
          games={playerOneGames}
          weapon={playerOneWeapon}
        />
        <div>vs</div>
        <Player
          type="computer"
          score={playerTwoScore}
          position="r"
          games={playerTwoGames}
          weapon={playerTwoWeapon}
        />
      </div>
      <div className="board--result">{winnerStr}</div>
    </div>
  )
}

export default connect((state: AppState) => {
  return {
    mode: state.game.mode,
    playerOneScore: state.game.playerOneScore,
    playerTwoScore: state.game.playerTwoScore,
    playerOneGames: state.game.playerOneGames,
    playerTwoGames: state.game.playerTwoGames,
    lastWinner: state.game.lastWinner
  }
})(Board)
