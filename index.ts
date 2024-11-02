import { httpServer } from './src/http_server/index';
import { startWSS } from './src/server/server';

const WS_PORT = Number(process.env.WS_PORT) || 3000;
const HTTP_PORT = Number(process.env.HTTP_PORT) || 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

startWSS(WS_PORT);
