import { server, app } from '../src/server';
import * as jsonist from 'jsonist';

const urlBase = `http://localhost:${app.get('port')}`;

describe('server', () => {
  it('responds hello', done => {
    jsonist.get(urlBase, (_, body) => {
      expect(body.msg).toEqual('Hello, world');
      done();
    });
  });

  afterAll(async () => {
    server.close();
  });
});
