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
