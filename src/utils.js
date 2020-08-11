import moment from 'moment';

const breakpoints = {
  xl: 1450,
  l: 900,
  m: 500,
}

//Substring of the full descriptions
export const shortDescriptions = (descriptions) => {
  if (descriptions === null)
    return descriptions;
  return descriptions.substring(0, 100)
}

export const FormatTime = (time) => {
  return moment(time).format('LL');
}

export const device = {
  s: `(max-width: ${breakpoints.m}px)`,
  m: `(min-width: ${breakpoints.m}px) and (max-width: ${breakpoints.l}px)`,
  l: `(min-width: ${breakpoints.l}px) and (max-width: ${breakpoints.xl}px)`,
  xl: `(min-width: ${breakpoints.xl}px)`,
}