// modules

export default {
  state: () => ({
    snackbar: {
      show: false,
      text: '',
      color: '',
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
    },
  },
  modules: {}
}
