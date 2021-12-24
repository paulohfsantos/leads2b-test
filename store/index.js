import marvel from "./modules/marvel"

export default {
  state: () => ({
    snackbar: {
      show: false,
      text: '',
      color: '',
      timeout: 3000,
    }
  }),
  getters: {
    snackbar: state => state.snackbar
  },
  mutations: {
    showSnackbar(state, payload) {
      state.snackbar.show = true
      state.snackbar.text = payload.text
      state.snackbar.color = payload.color
      state.snackbar.timeout = payload.timeout
    },
  },
  modules: {
    marvel,
  }
}
