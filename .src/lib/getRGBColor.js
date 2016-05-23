import rgb from 'rgb'
import colorParse from 'color-parse'

export default (colorStr) => {
  const color = colorParse(rgb(colorStr))
  return {
    r: color.values[0],
    g: color.values[1],
    b: color.values[2],
    a: color.alpha
  }
}
