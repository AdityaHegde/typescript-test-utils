import {createServer, Server} from "http";
import {readFileSync} from "fs";

export async function startServer(port: number) {
  return new Promise<Server>(resolve => {
    const server = createServer((req, res) => {
      res.write(readFileSync(`${__dirname}/index.html`));
      res.end();
    });
    server.listen(port, () => {
      resolve(server);
    });
  })
}
