import { WebSocket } from 'ws';

export const sendResponse = (
  ws: WebSocket,
  type: string,
  data: Record<string, unknown>,
  id: number = 0,
): void => {
  try {
    const response = JSON.stringify({ type, data, id });
    console.log(response);
    ws.send(response);
  } catch (error) {
    console.error('Failed to send JSON response:', error);
  }
};
