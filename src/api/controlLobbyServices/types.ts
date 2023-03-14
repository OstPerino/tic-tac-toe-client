import {Nullable} from "@/types";
import {types} from "sass";
import Null = types.Null;

export interface gameId {
    gameId: number | string,
}

export interface OpenGame {
    is_ended: boolean;
    participant_id: Nullable<number>;
    cell_1: Nullable<string>;
    cell_2: Nullable<string>;
    cell_3: Nullable<string>;
    cell_4: Nullable<string>;
    cell_5: Nullable<string>;
    cell_6: Nullable<string>;
    cell_7: Nullable<string>;
    cell_8: Nullable<string>;
    cell_9: Nullable<string>;
    x_player_id:Nullable<number>;
    current_player_id:Nullable<number>;
    creator_id: number;
    id: number;
    game_winner_id: Nullable<number>;
    o_player_id: Nullable<number>;
}