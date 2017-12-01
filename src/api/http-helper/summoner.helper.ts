import BaseRequest from './base.request';

const REGION_CODE = 'na1'
const BASE_URL = 'https://' + REGION_CODE + '.api.riotgames.com/';


const SUMMONER_BY_NAME_URL = 'lol/summoner/v3/summoners/by-name/'
class SummonerHelper {
  static async getSummonerByName(name) {
    let fullUrl = BASE_URL + SUMMONER_BY_NAME_URL + name
    return await BaseRequest.getRequest(fullUrl);
  }

}

export default SummonerHelper;
