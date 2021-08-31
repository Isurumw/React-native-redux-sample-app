import {formattedDate} from './helper';

describe('make sure the shared helper methods working correctly', () => {
  it('format the server date correctly', () => {
    const date = '2019-06-11T12:28:46.000Z';
    expect(formattedDate(date)).toEqual('11 Jun 2019');
  });
});
