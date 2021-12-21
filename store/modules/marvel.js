import { MarvelServices } from "~/api/methods/marvel.service";

const state = () => ({
  movies: {
    count: 1,
    limit: 1,
    offset: 0,
    results: [],
    total: 10,
  },
  // itemsPerPage: 6,
});

const getters = {
  movies: state => state.movies
}

const mutations = {
  setMovies(state, payload) {
    state.movies = payload;
  },
  setItemsPerPage(state, payload) {
    state.movies.limit = payload;
  }
}

const actions = {
  async getHeroes({ commit }, state) {
    const { data } = await MarvelServices.getAllCharacters(
      state.movies.limit,
      state.movies.offset,
    );
    commit("setMovies", data);
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
