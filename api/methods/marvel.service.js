import axios from 'axios'
import md5 from 'md5'

const getTimeStamp = Math.round(Date.now() / 1000);
const BASE_URL = 'https://gateway.marvel.com/v1/public/';
const hash = md5(getTimeStamp + process.env.API_PRIVATE_KEY + process.env.API_PUBLIC_KEY);

export const MarvelServices = {
  getAllCharacters(limit=10) {
    return axios.get(
      `${BASE_URL}characters?ts=${getTimeStamp}&apikey=${process.env.API_PUBLIC_KEY}&hash=${hash}&limit=${limit}`
    );
  },
}
