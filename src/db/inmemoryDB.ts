type Player = { name: string; password: string; wins: number };
type Room = { roomId: string; players: Player[] };

const players: Player[] = [];
const rooms: Room[] = [];

export const addPlayer = (name: string, password: string) => {
    players.push({ name, password, wins: 0 });
};

export const getPlayer = (name: string) => players.find((p) => p.name === name);

export const addRoom = (roomId: string, player: Player) => {
    rooms.push({ roomId, players: [player] });
};

export const getRooms = () => rooms.filter((room) => room.players.length === 1);
