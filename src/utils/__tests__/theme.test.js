import { createSizeForTheme } from '../theme'

describe('createSizeForTheme', () => {
  test('should return correct values with suffix', () => {
    const px = createSizeForTheme(12)('px')

    expect(px(1)).toEqual('12px')
    expect(px(1.5)).toEqual('18px')

    const rem = createSizeForTheme(1)('rem')

    expect(rem(1)).toEqual('1rem')
    expect(rem(1.5)).toEqual('1.5rem')
  })
})
