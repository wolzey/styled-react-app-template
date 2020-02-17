import { createSizeForTheme } from '../utils/theme'

const px = createSizeForTheme(12)('px')

export default {
  sizes: {
    small: px(0.75),
    regular: px(1),
    medium: px(1.5),
    large: px(2),
  },
  faces: {
    openSans: "'Open Sans', sans-serif",
    montserrat: "'Montserrat', sans-serif",
    roboto: "'Roboto', sans-serif",
  },
}
