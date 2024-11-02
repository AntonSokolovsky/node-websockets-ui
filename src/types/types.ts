export type PlayerMessage = {
  type: 'reg';
  data: {
    name: string;
    password: string;
  };
  id: number;
};

export type RoomMessage = {
  type: 'create_room' | 'add_user_to_room';
  data: string | { indexRoom: number | string };
  id: number;
};

export type ShipMessage = {
  type: 'add_ships';
  data: {
    gameId: number | string;
    ships: {
      position: { x: number; y: number };
      direction: boolean;
      length: number;
      type: 'small' | 'medium' | 'large' | 'huge';
    }[];
    indexPlayer: number | string;
  };
  id: number;
};

export type GameMessage = {
  type: 'attack' | 'randomAttack';
  data: {
    gameId: number | string;
    x?: number;
    y?: number;
    indexPlayer: number | string;
  };
  id: number;
};

export type Message = PlayerMessage | RoomMessage | ShipMessage | GameMessage;

export type RegistrationRequest = PlayerMessage;

export type RegistrationResponse = {
  type: 'reg';
  data: {
    name: string;
    index: number;
    error: boolean;
    errorText: string;
  };
  id: number;
};

export type PlayerData = {
  id: string;
  wins: number;
} & PlayerMessage['data'];
