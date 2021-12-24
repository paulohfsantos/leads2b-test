// import axios from 'axios'
import {MarvelServices} from '@/api/methods/marvel.service';

const state = () => ({
  marvel: {
    count: 1, // number of heroes
    limit: 10, // items per page
    offset: 1, // skipped pages
    results: [],
    total: 1,
  },
  hero: {
    id: 1,
    name: '',
    description: '',
    thumbnail: {
      extension: '',
      path: '',
    },
    modified: '',
    resourceURI: '',
    comics: {
      available: 1,
      items: [],
      collectionURI: '',
      returned: 1,
    },
    events: {
      available: 1,
      items: [],
      collectionURI: '',
      returned: 1,
    },
    series: {
      available: 1,
      items: [],
      collectionURI: '',
      returned: 1,
    },
    urls: [
      {
        type: '',
        url: '',
      }
    ],
  },
  itemsPerPage: 6,
});

const getters = {
  heroes: state => state.marvel,
  hero: state => state.hero,
  itemsPerPage: state => state.itemsPerPage,
  heroTotal: state => state.marvel.total,
}

const mutations = {
  setHeroes(state, payload) {
    state.marvel = payload;
  },
  setItemsPerPage(state, payload) {
    state.marvel.limit = payload.limit;
  },
  setHero(state, payload) {
    state.hero = payload;
  },
  resetHeroes(state) {
    state.marvel = {
      count: 1,
      limit: 1,
      offset: 1,
      results: [],
      total: 1,
    };
  },
  resetHero(state) {
    state.hero = {
      id: 1,
      name: '',
      description: '',
      thumbnail: {
        extension: '',
        path: '',
      },
      modified: '',
      resourceURI: '',
      comics: {
        available: 1,
        items: [],
        collectionURI: '',
        returned: 1,
      },
      events: {
        available: 1,
        items: [],
        collectionURI: '',
        returned: 1,
      },
      series: {
        available: 1,
        items: [],
        collectionURI: '',
        returned: 1,
      },
      urls: [
        {
          type: '',
          url: '',
        }
      ],
    };
  },
}

const actions = {
  async getHeroes({ commit, state }) {
    const { data: {data} } = await MarvelServices.getAllCharacters(state.marvel.limit);
    commit("setHeroes", data);
    // eslint-disable-next-line no-console
    console.log('actions', data);
  },

  async getHeroById({ commit }, id) {
    const { data: { data: { results } } } = await MarvelServices.getCharacterId(id);
    commit("setHero", results[0]);
    // eslint-disable-next-line no-console
    console.log('hero', results[0]);
  },
}


export default {
  state,
  getters,
  mutations,
  actions
}
