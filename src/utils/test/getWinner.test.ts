import getWinner from '../getWinner'

describe('getWinner', () => {
  it('should return null when there is a tie', () => {
    const winner = getWinner('paper', 'paper')

    expect(winner).toEqual(null)
  })
  it('should return 1 when the player one wins', () => {
    const winner = getWinner('paper', 'rock')

    expect(winner).toEqual(1)
  })
  it('should return 2 when the player two wins', () => {
    const winner = getWinner('rock', 'paper')

    expect(winner).toEqual(2)
  })

  it('rock should beat scissors', () => {
    const winner = getWinner('rock', 'scissors')

    expect(winner).toEqual(1)
  })
  it('paper should beat rock', () => {
    const winner = getWinner('paper', 'rock')

    expect(winner).toEqual(1)
  })
  it('scissors should beat paper', () => {
    const winner = getWinner('scissors', 'paper')

    expect(winner).toEqual(1)
  })
})
