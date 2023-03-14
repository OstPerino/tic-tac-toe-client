import MainPage from "@/views/UserPages/MainPage.vue";
import LeaderBoardPage from "@/views/UserPages/LeaderBoardPage.vue";
import GamePage from "@/views/UserPages/GamePage.vue";
import MyGamesPage from "@/views/UserPages/MyGamesPage.vue";

export default [
  {
    name: "Main",
    component: MainPage,
    path: "/main",
    meta: { requiresAuth: true }
  },
  {
    name: "LeaderBoard",
    component: LeaderBoardPage,
    path: "/leaders",
    meta: { requiresAuth: true }
  },
  {
    name: "Game",
    component: GamePage,
    path: "/game",
    meta: { requiresAuth: true }
  },
  {
    name: "MyGames",
    component: MyGamesPage,
    path: "/my-games",
    meta: { requiresAuth: true }
  }
];
