import $api from "@/api";

export function selectSign(data: any) {
    return $api.post(`/game/select-sign/${data.gameId}/${data.sign}`);
}

export function makeMove(data: any) {
    return $api.post(`/game/make-move/${data.gameId}/${data.cellName}/${data.sign}`);
}

