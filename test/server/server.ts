import {createServer} from "http";
import {readFileSync} from "fs";

export async function startServer(port: number) {
  return new Promise<void>(resolve => {
    createServer((req, res) => {
      res.write(readFileSync(`${__dirname}/index.html`));
      res.end();
    }).listen(port, resolve);
  })
}
