export interface INetworkManager {
  request(query: string, variables?: object): any;
}
class NetworkManager implements INetworkManager {
  private url: string;
  private fetch: (
    input: RequestInfo,
    init?: RequestInit | undefined,
  ) => Promise<Response>;

  public constructor(url: string, fetch: any) {
    this.url = url;
    this.fetch = fetch;
  }

  public async request<T>(query: string, variables?: object): Promise<T> {
    try {
      let headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'x-access-token': '...the_token...',
      };

      let body: {} = {
        query,
      };

      if (variables) {
        body = {
          ...body,
          variables,
        };
      }

      const response = await this.fetch(this.url, {
        method: 'POST',
        headers,
        body: JSON.stringify(body),
      });

      return response.json();
    } catch (e) {
      throw e;
    }
  }
}

export default NetworkManager;
