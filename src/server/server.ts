import { WebSocketServer } from 'ws';
import { handleMessage } from '../controller/handleMessage';
import { Message } from '../types/types';

export function startWSS(port: number) {
  const wss = new WebSocketServer({ port: port });

  wss.on('connection', (ws) => {
    ws.on('message', (data: string) => {
      try {
        const message: Message = JSON.parse(data);
        handleMessage(ws, message);
      } catch (error) {
        console.error('Invalid message format:', error);
      }
    });
  });
}
