import { getGameById } from "@/api/controlLobbyServices/controlLobbyService";

export default {
  namespaced: true,
  state: {
    gameState: null,
    cells: [],
  },
  mutations: {
    setGameState(state: any, payload: any) {
      state.gameState = payload;
    },
    // setCells(state: any, payload: any) {
    //   const topRow = [payload.cell_1, payload.cell_2, payload.cell_3];
    //   const midRow = [payload.cell_4, payload.cell_5, payload.cell_6];
    //   const bottomRow = [payload.cell_7, payload.cell_8, payload.cell_9];
    //   state.cells = [topRow, midRow, bottomRow];
    // },
  },
  actions: {
    async fetchGameState(context: any, payload: any) {
      try {
        const response = await getGameById(payload.id);
        context.commit("setGameState", response.data);
        return response.data;
        // context.commit("setCells", response.data);
      } catch (e) {
        return e;
      }
    },
  },
};
