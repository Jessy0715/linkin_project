// state
export const state = () => ({
  appear: false,
});
// actions
export const actions = {
  handAppear({commit}) {
    commit('Appear')
  }
};
// mutations
export const mutations = {
  Appear(state) {
    state.appear = true
  }
};
// getters
export const getters = {
  getAppear(state) {
    return state.appear
  }
};