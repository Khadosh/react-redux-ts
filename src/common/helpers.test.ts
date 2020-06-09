import moment from 'moment';
import { utcFromNow } from './helpers';

describe('Date Helper', () => {
  test('It should transform the date from unix to "mins ago"', () => {
    const twoMinsAgo = moment().subtract(2, 'minutes').unix();
    expect(utcFromNow(twoMinsAgo)).toEqual('2 minutes ago');
  });

  test('It should transform the date from unix to "hours ago"', () => {
    const twoHoursAgo = moment().subtract(2, 'hours').unix();
    expect(utcFromNow(twoHoursAgo)).toEqual('2 hours ago');
  });

  test('It should transform the date from unix to "days ago"', () => {
    const twoDaysAgo = moment().subtract(2, 'days').unix();
    expect(utcFromNow(twoDaysAgo)).toEqual('2 days ago');
  });
});
