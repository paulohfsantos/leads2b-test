// import axios from 'axios'
import {MarvelServices} from '@/api/methods/marvel.service';

const state = () => ({
  marvel: {
    count: 1, // number of heroes
    limit: 1, // items per page
    offset: 1, // skipped pages
    results: [],
    total: 10,
  },
  itemsPerPage: 6,
});

const getters = {
  heroes: state => {
    console.log('getter', state.marvel);
    return state.marvel
  }
}

const mutations = {
  setHeroes(state, payload) {
    console.log('mutations', payload);
    state.marvel = payload;
  },
  setItemsPerPage(state, payload) {
    state.marvel.limit = payload.limit;
  },
  resetHeroes(state) {
    state.marvel = {
      count: 1,
      limit: 1,
      offset: 1,
      results: [],
      total: 10,
    };
  }
}

const actions = {
  async getHeroes({ commit, state }) {
    const { data: {data} } = await MarvelServices.getAllCharacters(state.marvel.limit);
    commit("setHeroes", data);
    console.log('actions', data);
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
