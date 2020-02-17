import { lighten, darken } from 'polished'

const createColor = baseHash => {
  let colors = {}
  for (let i = 0.1; i <= 1; i += 0.1) {
    const label = i * 1000
    if (i <= 0.5) {
      colors[label] = lighten(i, baseHash)
    } else {
      colors[label] = darken(i, baseHash)
    }
  }

  return colors
}

export default {
  blue: createColor('#3498DB'),
  red: createColor('#E74C3C'),
  navy: createColor('#2C3E50'),
  primary: createColor('#2980B9'),
}
