import { WebSocket } from 'ws';
import { addUser, getUserById } from '../db/inmemoryDB';
import { PlayerData, RegistrationRequest } from '../types/types';
import { sendResponse } from '../utils/sendResponse';

export const handleRegistration = (
  ws: WebSocket,
  request: RegistrationRequest,
): void => {
  console.log(request);
  const existingUser = getUserById(request.data.name);

  if (existingUser) {
    sendResponse(ws, 'reg', {
      name: request.data.name,
      error: true,
      errorText: 'User already exists',
    });
    return;
  }

  const userId = generateUserId();
  const newUser: PlayerData = {
    id: userId,
    name: request.data.name,
    password: request.data.password,
    wins: 0,
  };

  addUser(userId, newUser);
  sendResponse(ws, 'reg', {
    name: request.data.name,
    index: userId,
    error: false,
  });
};

const generateUserId = (): string => {
  return `player_${Math.floor(Math.random() * 10000)}`;
};
