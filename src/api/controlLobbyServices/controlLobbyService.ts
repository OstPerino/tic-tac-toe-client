import $api from "@/api";
import { gameId } from "@/api/controlLobbyServices/types";

export async function getLeaderboard() {
  return $api.get("/game/get-leaderboard");
}

export async function getOpenGames() {
  return $api.get("/game/get-open-games");
}

export async function getUserGames() {
  return $api.get("/game/get-my-games");
}

export async function getGameById(gameId: gameId) {
  return $api.get(`/game/get-particular-game/${gameId}`);
}

export async function createLobby() {
  return $api.post("/game/create-game");
}

export async function joinLobby(gameId: gameId) {
  return $api.post(`/game/join-game/${gameId}`);
}

