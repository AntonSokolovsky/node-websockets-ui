type Position = { x: number; y: number };
type Ship = {
    position: Position;
    direction: boolean;
    length: number;
    type: string;
};
type GameBoard = { ships: Ship[]; hits: Position[]; misses: Position[] };

const gameBoards: Record<string, GameBoard> = {};

export const placeShips = (gameId: string, playerId: string, ships: Ship[]) => {
    if (!gameBoards[gameId]) {
        gameBoards[gameId] = { ships, hits: [], misses: [] };
    } else {
        gameBoards[gameId].ships.push(...ships);
    }
};

export const attack = (gameId: string, position: Position) => {
    const board = gameBoards[gameId];
    if (!board) return { status: 'error', message: 'Game not found' };

    const hitShip = board.ships.find(
        (ship) =>
            position.x >= ship.position.x &&
            position.x < ship.position.x + (ship.direction ? 1 : ship.length) &&
            position.y >= ship.position.y &&
            position.y < ship.position.y + (ship.direction ? ship.length : 1)
    );

    if (hitShip) {
        board.hits.push(position);
        return { status: 'hit', position };
    } else {
        board.misses.push(position);
        return { status: 'miss', position };
    }
};
