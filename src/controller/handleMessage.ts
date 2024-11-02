import { Message } from '../types/types';
import { WebSocket } from 'ws';
import {
  handleAddShips,
  handleAddUserToRoom,
  handleAttack,
  handleCreateRoom,
  handleRegistration,
} from './index';
import { ServerTypeMessage } from '../types/serverTypeMessage';

export function handleMessage(ws: WebSocket, message: Message) {
  switch (message.type) {
    case ServerTypeMessage.Reg:
      handleRegistration(ws, message);
      break;

    case ServerTypeMessage.CreateRoom:
      handleCreateRoom();
      break;

    case ServerTypeMessage.AddUserToRoom:
      handleAddUserToRoom();
      break;

    case ServerTypeMessage.AddShips:
      handleAddShips();
      break;

    case ServerTypeMessage.Attack:
    case ServerTypeMessage.RandomAttack:
      handleAttack();
      break;

    default:
      console.error('Unknown message type:', message.type);
      break;
  }
}
