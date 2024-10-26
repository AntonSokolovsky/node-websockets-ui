import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });
console.log('WebSocket server started on ws://localhost:8080');

wss.on('connection', (ws) => {
    console.log('New client connected');

    ws.on('message', (message) => {
        console.log('Received:', message);
        ws.send(JSON.stringify({ type: 'ack', data: 'Message received' }));
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
