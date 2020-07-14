import { WeaponType } from '../types'

const win: { [x: string]: WeaponType } = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
}

const getWinner = (
  playerOneWeapon: WeaponType,
  playerTwoWeapon: WeaponType
): 1 | 2 | null => {
  if (win[playerOneWeapon] === playerTwoWeapon) {
    return 1
  }
  if (win[playerTwoWeapon] === playerOneWeapon) {
    return 2
  }
  return null
}

export default getWinner
