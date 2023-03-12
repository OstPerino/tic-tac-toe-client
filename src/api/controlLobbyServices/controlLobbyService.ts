import $api from "@/api";

export async function getLeaderboard() {
  return $api.get("/game/get-leaderboard");
}

export async function createLobby() {
  return $api.post("/game/create-game");
}
