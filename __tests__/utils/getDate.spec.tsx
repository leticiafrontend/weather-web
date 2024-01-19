import { getDate } from 'utils/getDate'

describe('getDate()', () => {
  it('Should return formatted date', () => {
    const mockDate = new Date('2022-01-18T12:00:00Z')

    // eslint-disable-next-line
    global.Date = jest.fn(() => mockDate) as any

    const result = getDate()

    global.Date = Date

    expect(result).toBe('Tuesday, January 18')
  })
})
