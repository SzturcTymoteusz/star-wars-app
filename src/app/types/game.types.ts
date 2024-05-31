export enum PlayerType {
  One = 'playerOne',
  Two = 'playerTwo',
}

export interface Player {
  type: PlayerType;
  name: string;
  score: number;
}

export enum ResourceType {
  People = 'people',
  Starships = 'starship',
  Films = 'film',
  Vehicles = 'vehicle',
  Species = 'species',
  Planets = 'planet',
}

export interface CurrentGame {
  resource: ResourceType;
  resourceItemId: {
    [PlayerType.One]: string;
    [PlayerType.Two]: string;
  };
  winner: PlayerType | null;
}

export interface Game {
  ready: boolean;
  loading: boolean;
  resource: ResourceType;
  currentGame: CurrentGame | null;
  [PlayerType.One]: Player;
  [PlayerType.Two]: Player;
}
