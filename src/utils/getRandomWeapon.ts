import { WeaponType } from '../types'

enum randomWeapon {
  'rock',
  'paper',
  'scissors'
}
const getRandomWeapon = (): WeaponType => {
  return randomWeapon[Math.round(Math.random() * 2)] as WeaponType
}

export default getRandomWeapon
