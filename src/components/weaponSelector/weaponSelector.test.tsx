import React from 'react'
import { render, getByTestId, getAllByTestId } from '@testing-library/react'
import { WeaponSelector } from './weaponSelector'
import { WeaponType } from '../../types'

const onSelect = jest.fn().mockImplementation((weapon: WeaponType) => null)
describe('WeaponSelector', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('should render 3 weapons on player mode', () => {
    const { container } = render(
      <WeaponSelector mode="player" onSelect={onSelect} />
    )

    const weapons = getAllByTestId(container, 'weapon')

    expect(weapons).toHaveLength(3)
  })
  it('should render 1 weapon on computer mode', () => {
    const { container } = render(
      <WeaponSelector mode="computer" onSelect={onSelect} />
    )

    const weapons = getAllByTestId(container, 'weapon')

    expect(weapons).toHaveLength(1)
  })
  it('should call onSelect with rock', () => {
    const { container } = render(
      <WeaponSelector mode="player" onSelect={onSelect} />
    )

    const weapons = getAllByTestId(container, 'weapon')

    weapons[0].click()

    expect(onSelect).toHaveBeenCalledWith('rock')
  })

  it('should call onSelect with paper', () => {
    const { container } = render(
      <WeaponSelector mode="player" onSelect={onSelect} />
    )

    const weapons = getAllByTestId(container, 'weapon')

    weapons[1].click()

    expect(onSelect).toHaveBeenCalledWith('paper')
  })

  it('should call onSelect with scissors', () => {
    const { container } = render(
      <WeaponSelector mode="player" onSelect={onSelect} />
    )

    const weapons = getAllByTestId(container, 'weapon')

    weapons[2].click()

    expect(onSelect).toHaveBeenCalledWith('scissors')
  })
  it('should call onSelect with random weapon', () => {
    const { container } = render(
      <WeaponSelector mode="computer" onSelect={onSelect} />
    )

    const weapon = getByTestId(container, 'weapon')

    weapon.click()

    expect(onSelect).toHaveBeenCalledWith(
      expect.stringMatching(/rock|paper|scissors/)
    )
  })
})
