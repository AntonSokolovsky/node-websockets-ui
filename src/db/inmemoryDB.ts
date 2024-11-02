import { PlayerData } from '../types/types';

export const users: Map<string, PlayerData> = new Map();

export const addUser = (id: string, data: PlayerData): void => {
  users.set(id, data);
};

export const getUserById = (name: string): PlayerData | undefined => {
  return Array.from(users.values()).find((user) => user.name === name);
};
