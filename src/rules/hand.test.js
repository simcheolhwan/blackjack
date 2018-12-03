import fn from './hand'

describe('핸드', () => {
  test('블랙잭', () => {
    expect(fn(['A', 10]).totals).toEqual([21])
    expect(fn(['A', 10]).blackjack).toBeTruthy()
    expect(fn(['A', 'K']).totals).toEqual([21])
    expect(fn(['A', 'K']).blackjack).toBeTruthy()
    expect(fn(['A', 8, 2]).totals).toEqual([21])
    expect(fn(['A', 8, 2]).blackjack).toBeFalsy()
  })

  test('하드 토탈', () => {
    expect(fn([10, 9]).totals).toEqual([19])
    expect(fn([10, 10]).bust).toBeFalsy()
    expect(fn(['J', 2, 10]).totals).toEqual([22])
    expect(fn(['J', 2, 10]).bust).toBeTruthy()
  })

  test('소프트 토탈', () => {
    expect(fn(['A']).totals).toEqual([1, 11])
    expect(fn(['A', 'A']).totals).toEqual([2, 12])

    expect(fn(['A', 2]).totals).toEqual([3, 13])
    expect(fn(['A', 2, 'A']).totals).toEqual([4, 14])
    expect(fn(['A', 2, 'A', 'A']).totals).toEqual([5, 15])
    expect(fn(['A', 2, 'A', 'A', 'A']).totals).toEqual([6, 16])
    expect(fn(['A', 2, 'A', 'A', 'A', 'A']).totals).toEqual([7, 17])
    expect(fn(['A', 2, 'A', 'A', 'A', 'A', 'A']).totals).toEqual([8, 18])

    expect(fn(['A', 2, 8]).totals).toEqual([21])
    expect(fn(['A', 2, 9]).totals).toEqual([12])
  })
})
