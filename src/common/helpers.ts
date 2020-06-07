import moment from 'moment';

export const utcFromNow = (dateUtc: number): string => moment.unix(dateUtc).fromNow();
