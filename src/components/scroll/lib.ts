export function getRect (el: HTMLElement) {
  return {
    top: el.offsetTop,
    left: el.offsetLeft,
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}

const camelizeRE = /-(\w)/g
export function camelize (str: String) {
  // str = String(str)
  return str.replace(camelizeRE, function (m, c) {
    return c ? c.toUpperCase() : ''
  })
}

export const tip = function (msg: String, componentName: String) {
  if (process.env.NODE_ENV !== 'production') {
    const component = componentName ? `<${componentName}> ` : ''
    console.warn(`[Cube tip]: ${component}${msg}`)
  }
}
export function kebab (str: String) {
  str = String(str)
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}