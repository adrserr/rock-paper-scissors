import getRandomWeapon from '../getRandomWeapon'

describe('getRandomWeapon', () => {
  it('should return a random weapon', () => {
    const weapon = getRandomWeapon()

    expect(weapon).toEqual(expect.stringMatching(/paper|rock|scissors/))
  })
})
