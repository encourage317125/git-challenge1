import * as express from 'express';
import { Request, Response } from 'express';

function handleHelloWorld(_: Request, res: Response) {
  res.json({ msg: 'Hello, world' });
}

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', handleHelloWorld);

const server = app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:%d', app.get('port'));
});

export { server, app };
