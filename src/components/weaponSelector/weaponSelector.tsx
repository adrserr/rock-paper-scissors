import React from 'react'
import { connect } from 'react-redux'
import Weapon from '../weapon/weapon'
import AppState from '../../store/ducks'
import { GameMode, WeaponType } from '../../types'
import './weaponSelector.scss'

interface WeaponSelectorProps {
  mode: GameMode
  onSelect: (weapon: WeaponType) => void
}
export const WeaponSelector = (props: WeaponSelectorProps): JSX.Element => {
  const { mode, onSelect } = props

  return (
    <div className="weapon-selector bg-maroon">
      {mode && mode === 'player' && (
        <>
          <div className="orange">Weapons</div>
          <div className="weapons">
            <Weapon data-testid="rock" type="rock" onSelect={onSelect} />
            <Weapon data-testid="paper" type="paper" onSelect={onSelect} />
            <Weapon
              data-testid="scissors"
              type="scissors"
              onSelect={onSelect}
            />
          </div>
        </>
      )}
      {mode && mode === 'computer' && (
        <Weapon data-testid="random" type="random" onSelect={onSelect} />
      )}
    </div>
  )
}

export default connect((state: AppState) => {
  return {
    mode: state.game.mode
  }
})(WeaponSelector)
