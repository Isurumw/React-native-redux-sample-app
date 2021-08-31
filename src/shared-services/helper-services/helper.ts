import moment from 'moment-timezone';
import {DATE_VIEW_FORMAT} from 'utils/constants';

export const formattedDate = (dateString: string) => {
  const date = moment(dateString);
  return date.format(DATE_VIEW_FORMAT);
};
