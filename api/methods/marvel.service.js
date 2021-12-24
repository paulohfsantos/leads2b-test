import axios from 'axios'
import md5 from 'md5'

const getTimeStamp = Math.round(Date.now() / 1000);
const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const hash = md5(
  getTimeStamp +
  (process.env.API_PRIVATE_KEY || this.$config.apiPrivateKey)
  +
  (process.env.API_PUBLIC_KEY || this.$config.apiPublicKey)
);

export const MarvelServices = {
  getAllCharacters(limit=10) {
    return axios.get(
      `${BASE_URL}characters?ts=${getTimeStamp}&apikey=${(process.env.API_PUBLIC_KEY || this.$config.apiPublicKey)}&hash=${hash}&limit=${limit}`
    );
  },
  getCharacterId(id) {
    return axios.get(
      `${BASE_URL}characters/${id}?ts=${getTimeStamp}&apikey=${(process.env.API_PUBLIC_KEY || this.$config.apiPublicKey)}&hash=${hash}`
    );
  }
}
