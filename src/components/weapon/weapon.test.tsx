import React from 'react'
import { render, getByTestId } from '@testing-library/react'
import Weapon from './weapon'
import { WeaponType } from '../../types'

describe('Weapon', () => {
  it('should render', () => {
    const { baseElement } = render(
      <Weapon type="paper" onSelect={(weapon: WeaponType) => null} />
    )

    expect(baseElement).toBeTruthy()
  })

  it('should render weapon icon', () => {
    const { container } = render(
      <Weapon type="paper" onSelect={(weapon: WeaponType) => null} />
    )

    expect(container.getElementsByClassName('icon-paper')).toBeTruthy()
  })

  it('should call onSelect when you click the weapon', () => {
    const onSelect = jest.fn().mockImplementation((weapon: WeaponType) => null)
    const { container } = render(<Weapon type="paper" onSelect={onSelect} />)

    const weapon = getByTestId(container, 'weapon')

    expect(onSelect).not.toHaveBeenCalled()
    weapon.click()
    expect(onSelect).toHaveBeenCalledWith('paper')
  })

  it('should call onSelect with a random weapon when mode is Computer', () => {
    const onSelect = jest.fn().mockImplementation((weapon: WeaponType) => null)

    const { container } = render(<Weapon type="random" onSelect={onSelect} />)

    const weapon = getByTestId(container, 'weapon')

    expect(onSelect).not.toHaveBeenCalled()
    weapon.click()
    expect(onSelect).toHaveBeenCalledWith(
      expect.stringMatching(/rock|paper|scissors/)
    )
  })
})
