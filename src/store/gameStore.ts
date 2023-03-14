export default {
  namespaced: true,
  state: {
    gameState: null,
  },
  mutations: {
    setGameState(state: any, payload: any) {
      state.gameState = payload;
    }
  },
  actions: {

  }
};
