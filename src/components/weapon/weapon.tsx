/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback } from 'react'
import './weapon.scss'
import { WeaponType } from '../../types'
import { getRandomWeapon } from '../../utils'

interface WeaponProps {
  type: WeaponType
  onSelect: (weapon: WeaponType) => void
}
const Weapon = (props: WeaponProps): JSX.Element => {
  const { type, onSelect } = props

  const onWeaponSelect = useCallback(() => {
    if (type === 'random') {
      onSelect(getRandomWeapon())
    } else {
      onSelect(type)
    }
  }, [onSelect, type])

  return (
    <div className="weapon bg-maroon orange border--orange">
      {type !== 'random' && (
        <span
          data-testid="weapon"
          className={`icon-${type}`}
          onClick={onWeaponSelect}
        />
      )}
      {type === 'random' && (
        <span
          data-testid="weapon"
          style={{ fontSize: '2rem', fontWeight: 'bold' }}
          onClick={onWeaponSelect}
        >
          Play
        </span>
      )}
    </div>
  )
}

export default Weapon
