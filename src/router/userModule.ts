import MainPage from "@/views/UserPages/MainPage.vue";
import LeaderBoardPage from "@/views/UserPages/LeaderBoardPage.vue";
import GamePage from "@/views/UserPages/GamePage.vue";

export default [
  {
    name: "Main",
    component: MainPage,
    path: "/main",
    meta: ["requires"],
  },
  {
    name: "LeaderBoard",
    component: LeaderBoardPage,
    path: "/leaders",
    meta: ["requires"],
  },
  {
    name: "Game",
    component: GamePage,
    path: "/game",
    meta: ["requires"],
  }
];
