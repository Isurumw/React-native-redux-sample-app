import fetchMock from 'jest-fetch-mock';
import Config from 'react-native-config';

import NetworkManager from './network-manager';

jest.mock('react-native-config', () => ({
  BASEURL: 'URL',
}));

describe('center network client', () => {
  const networkManager = new NetworkManager(Config.BASEURL, fetch);

  beforeEach(() => {
    const returnValue = {
      json: jest.fn(async () => ({
        firstName: 'Test',
        lastName: 'Awesome',
      })),
    };

    fetchMock.mockImplementation(async (): Promise<any> => {
      return Promise.resolve(returnValue);
    });
  });

  afterEach(() => {
    fetchMock.mockClear();
  });

  it('query data from api', async (): Promise<void> => {
    const response = await networkManager.request('the_query');

    //check number of calls on fetch client
    expect(fetch).toBeCalledTimes(1);

    expect(response).toEqual({
      firstName: 'Test',
      lastName: 'Awesome',
    });

    expect(fetch).toBeCalledWith('URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-access-token':
          'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU5OCwicm9sZUlkIjoiMiIsImlhdCI6MTYyODgzMzgwNn0.LztrxbZfs9oqvOgQ41bwx59jW8WFXBI6Ewsxe23RUBA',
      },
      body: JSON.stringify({query: 'the_query'}),
    });
  });
});
