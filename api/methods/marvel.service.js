import axios from 'axios'

const getTimeStamp = '1640063689';
const publicKey = process.env.PUBLIC_KEY;
const hash = '2a5cba6d83f8be099e5e41777a0b3665';

export const MarvelServices = {
  getAllCharacters(limit=10, offset=0) {
    return axios.get(
      `${process.env.API_URL}:443/v1/public/characters
      ?ts=${getTimeStamp}
      &apikey=${publicKey}
      &hash=${hash}
      &limit=${limit}`
    );
  },
}
