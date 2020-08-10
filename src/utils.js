import moment from 'moment';

//Substring of the full descriptions
export const shortDescriptions = (descriptions) => {
  if (descriptions === null)
    return descriptions;
  return descriptions.substring(0, 100)
}

export const FormatTime = (time) => {
  return moment(time).format('LL');
}