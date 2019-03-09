/*
 * Breakpoints
 * Mobile first so mobile breakpoint not required
 * 
 * Mobile: 0px - 599px
 * Tablet: 600px - 899px
 * Desktop: 900px - 1199px
 * Large Desktop: 1200px+
 */
const breakpoints = {
  tablet: '600px',
  desktop: '900px',
  largeDesktop: '1200px',
}

// Create an object containing all breakpoints
export const media = Object.keys(breakpoints).reduce((media, breakpoint) => {
  media[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
  return media
}, {})

export const color = {
  black: '#000000',
  blackBoxShadow: 'rgba(0,0,0,0.75)',
  white: '#FFFFFF',
  grey: '#2D2D2D',
  darkGrey: '#202020',
  lightGrey: '#323232',
  grommetPurple: '#7D4CDB',
  grommetPurpleBoxShadow: 'rgba(125,76,219,0.75)',
}
