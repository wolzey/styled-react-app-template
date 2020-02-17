import { createSizeForTheme } from '../utils/theme'

const BASE_SIZE = 1
const rem = createSizeForTheme(BASE_SIZE)('rem')

export default {
  small: rem(0.5),
  regular: rem(1),
  medium: rem(1.5),
  large: rem(2),
}
