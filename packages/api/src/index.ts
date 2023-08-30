import cors from 'cors';
import express from 'express';

import { Workspace } from 'types';

const app = express();
const port = 3002;

app.use(cors({ origin: '*' }));

app.get('/workspaces', (_, res) => {
  const workspaces: Workspace[] = [
    { name: 'api', version: '1.0.0' },
    { name: 'types', version: '1.0.0' },
    { name: 'web', version: '1.0.0' },
  ];
  res.json({ data: workspaces });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
