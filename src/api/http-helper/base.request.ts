import request from 'request';

const apiKey = 'RGAPI-e5787697-1977-4b13-aad6-f3162530deb5';
class BaseRequest {
  static async getRequest(endpint) {
    let options = {
      url: endpint,
      headers: {
        'X-Riot-Token': apiKey,
        'Access-Control-Allow-Origin': 'http://localhost:4200'
      },
      agentOptions: {
        secureProtocol: 'SSLv3_method'
      }
    };

    return await request.get(options);
  }
}

export default BaseRequest;
