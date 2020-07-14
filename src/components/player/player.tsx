import React, { useMemo } from 'react'
import './player.scss'
import { WeaponType } from '../../types'

interface PlayerProps {
  type: 'player' | 'computer'
  score: number
  position: 'l' | 'r'
  games: number
  weapon: WeaponType | null
}
const Player = (props: PlayerProps): JSX.Element => {
  const { type, score, position, games, weapon } = props

  const weaponIcon = useMemo(() => {
    return weapon ? `icon-${weapon}` : ''
  }, [weapon])

  const iconStyle = useMemo(() => {
    if (weapon) {
      return position === 'l' ? 'rotate(90deg) scaleX(-1)' : 'rotate(-90deg)'
    }
    return ''
  }, [position, weapon])

  return (
    <div
      className="player"
      style={{ flexDirection: position === 'l' ? 'row' : 'row-reverse' }}
    >
      <div className="player--games">{`${games} games`}</div>
      <div>
        <h5>{type}</h5>
        <div className="player--weapon">
          <span
            className={weaponIcon}
            style={{
              transform: iconStyle
            }}
          >
            {!weapon && '?'}
          </span>
        </div>
        <p>{`${score} pt`}</p>
      </div>
    </div>
  )
}

export default Player
