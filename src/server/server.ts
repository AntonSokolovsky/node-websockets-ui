import { WebSocketServer } from 'ws';
import { addPlayer, getPlayer } from '../db/inmemoryDB';

export function startWSS() {
    const wss = new WebSocketServer({ port: 8080 });

    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            const msg = JSON.parse(message.toString());

            if (msg.type === 'reg') {
                const { name, password } = msg.data;
                const existingPlayer = getPlayer(name);

                if (existingPlayer) {
                    ws.send(
                        JSON.stringify({
                            type: 'reg',
                            data: {
                                name,
                                error: true,
                                errorText: 'Player already exists',
                            },
                        })
                    );
                } else {
                    addPlayer(name, password);
                    ws.send(
                        JSON.stringify({
                            type: 'reg',
                            data: { name, error: false, errorText: '' },
                        })
                    );
                }
            }
        });
    });
}
