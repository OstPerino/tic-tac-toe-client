export interface SelectSign {
  gameId: number;
  sign: boolean;
}

export interface MakeMove {
  gameId: number;
  cellName: string;
  sign: boolean;
}
